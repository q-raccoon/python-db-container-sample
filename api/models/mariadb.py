from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database.mariadb import Base

class User(Base):
  __tablename__ = "users"
  
  id = Column(Integer, primary_key=True, index=True)
  email = Column(String(20), unique=True, index=True)
  hashed_password = Column(String(100))
  is_active = Column(Boolean, default=True)

  items = relationship("Item", back_populates="owner")

class Item(Base):
  __tablename__ = "items"

  id = Column(Integer, primary_key=True, index=True)
  title = Column(String(20), index=True)
  description = Column(String(20), index=True)
  owner_id = Column(Integer, ForeignKey("users.id")) # FK

  owner = relationship("User", back_populates="items")