from fastapi import APIRouter

from database.mongodb import db

from schemas.mongodb import UserBase

router = APIRouter()

@router.get('/', tags=['mongodb'])
async def get_books():
  result = await db.book.find().to_list(1000)
  temp = []
  for i in result:
    temp.append({"name": i['name'], "author": i['author']})
  return {
    "count": len(temp),
    "data": temp
  }

@router.post("/", tags=["mongodb"])
async def create_book():
  document = {"name":"hello mongo123", "author":"choi"}
  
  await db.book.insert_one(document)
  return {'key': 'value'}

