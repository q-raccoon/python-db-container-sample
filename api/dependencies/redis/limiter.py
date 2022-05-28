from fastapi import HTTPException, Request

from database.redis import get_client

# 일정 시간동안 limit_per_minutes 만큼 요청을 허용
class RateLimiter:
  def __init__(self, name: str, limit_per_minutes: int, by_resource: bool = False):
    """
    Initialize RateLimiter
    Args:
        name: Unique name required
        limit_per_minutes: threshold of limiter, positive integer required.
    """
    self.name: str = name
    self.limit_per_minutes: int = limit_per_minutes
    self.by_resource: bool = by_resource

  async def limiter(self, key):
    redis = get_client()

    async with redis.client() as conn:
      requests = await conn.incr(key)

      if requests == 1:
        await conn.expire(key, 60)
        ttl = 60
      else:
        ttl = await conn.ttl(key)
      return {
        'call': requests <= self.limit_per_minutes,
        'ttl': ttl
      }

  async def __call__(self, request: Request):
    client_ip = request.client.host
    resource = f'{request.method}:{request.url.path}' if self.by_resource else ':'

    key = f'{self.name}::{client_ip}::{resource}'

    res = await self.limiter(key)

    if not res.get('call'):
      raise HTTPException(503, detail='Rate limit exceeded.')
