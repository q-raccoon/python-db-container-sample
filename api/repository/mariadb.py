from sqlalchemy.orm import Session
from models.mariadb import User, Item
from schemas.mariadb import UserCreate

# import sql_app.database


# import sql_app.models # 절대경로로 불러오는방법
# import sql_app.schemas # 절대경로로 불러오는방법

def create_user(db: Session, user: UserCreate):
  fake_hashed_password = user.password + "notreallyhashed"
  db_user = User(email=user.email, hashed_password=fake_hashed_password)
  db.add(db_user)
  db.commit()
  db.refresh(db_user)
  return db_user

def get_users(db:Session):
  return db.query(User).all()

def get_user_by_email(db:Session, email: str):
  return db.query(User).filter(User.email == email).first()

def update_user(db:Session, from_email: str, to_email):
  email_update = db.query(User).filter(User.email == from_email).first()
  
  if not email_update:
    return False

  email_update.email = to_email
  db.add(email_update)
  db.commit()

  return email_update

def delete_user(db:Session, email:str):
  email_delete = db.query(User).filter_by(email = email).first()

  if not email_delete:
    return False

  db.delete(email_delete)
  db.commit()

  return email_delete