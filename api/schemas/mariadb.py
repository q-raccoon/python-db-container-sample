from typing import List, Optional

from pydantic import BaseModel  # 객체 타입설정


class ItemBase(BaseModel):
  title: str
  description: Optional[str] = None


class ItemCreate(ItemBase):
  pass


class Item(ItemBase):
  id: int
  owner_id: int

  class Config:
    orm_mode = True


class UserBase(BaseModel):
  email: str


class UserCreate(UserBase):
  password: str


class User(UserBase):
  id: int
  is_active: bool

  class Config:
    orm_mode = True
