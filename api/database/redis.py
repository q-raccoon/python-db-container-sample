import os

from typing import Union
from aioredis import Redis, from_url

REDIS_HOST = os.environ.get('REDIS_HOST')
REDIS_PORT = os.environ.get('REDIS_PORT')
REDIS_DATABASE = os.environ.get('REDIS_DATABASE')
REDIS_PASSWORD = os.environ.get('REDIS_PASSWORD')

_url = f"redis://:{REDIS_PASSWORD}@{REDIS_HOST}:{REDIS_PORT}"

def set_client() -> None:
  global _redis
  _redis = from_url(url=_url)


def get_client() -> Redis:
  global _redis
  return _redis


async def discard_client() -> None:
  global _redis
  await _redis.close()