from fastapi import APIRouter, Depends, HTTPException

from typing import List

from sqlalchemy.orm import Session

from schemas.mariadb import User, UserCreate, UserBase
from repository.mariadb import get_users, get_user_by_email, create_user, update_user, delete_user
from database.mariadb import get_db

router = APIRouter()


@router.get("/", tags=["mariadb"], response_model=List[User])
async def _get_users(db: Session = Depends(get_db)):
  return get_users(db)


@router.post("/", tags=["mariadb"], response_model=User)
def _create_user(user:UserCreate, db: Session = Depends(get_db)): # 무조건 typing을 해줘야 에러가 발생하지 않음
  db_user = get_user_by_email(db, email=user.email)

  if db_user:
      raise HTTPException(status_code=400, detail="Email already registered")
  return create_user(db=db, user=user)

@router.put("/", tags=["mariadb"], response_model=User)
def _update_user(user: UserBase, db: Session = Depends(get_db)):
  did_update = update_user(db, from_email=user.email, to_email="mung")

  if not did_update:
    raise HTTPException(status_code=404, detail=f"User not found: {user.email}")

  return did_update

@router.delete("/", tags=["mariadb"], response_model=User)
def _delete_user(user: UserBase, db: Session = Depends(get_db)):
  did_delete = delete_user(db, email=user.email)

  if not did_delete:
    raise HTTPException(status_code=404, detail=f"User not found: {user.email}")

  return did_delete
