import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database

USER = os.environ.get('MYSQL_ROOT_USER')
PASSWORD = os.environ.get('MYSQL_PASSWORD')
HOST = os.environ.get('MYSQL_HOST')
PORT = os.environ.get('MYSQL_PORT')
DATABASE_NAME = os.environ.get('MYSQL_DATABASE')

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE_NAME}"

# 외부에서 사용함.
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

# 만약 DATABASE_NAME 이름을 가진 데이터베이스가 없다면 생성
if not database_exists(engine.url):
  create_database(engine.url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 모델을 만들 때 상속받음
Base = declarative_base()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()