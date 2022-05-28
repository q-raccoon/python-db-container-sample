from fastapi import APIRouter, Depends

from dependencies.redis.limiter import RateLimiter

rate_limiter = RateLimiter('resources', 10, by_resource=True)
router = APIRouter(dependencies=[Depends(rate_limiter)])

@router.get(path='/resources/')
def retrieve():
  return {'key': 'value'}

@router.post(path='/resources/')
def create():
  return {'key': 'value'}
    
@router.put(path='/resources/')
def update():
  return {'key': 'value'}