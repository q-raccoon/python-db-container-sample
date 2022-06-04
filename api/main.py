from dotenv import load_dotenv
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from typing import Union

from database.mariadb import engine as mariadb_engine, Base as mariadb_Base
from database.redis import set_client, discard_client

from router import db_mariadb as db_mariadb_router, db_mongodb as db_mongodb_router, db_redis as db_redis_router

mariadb_Base.metadata.create_all(bind=mariadb_engine)

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(db_mariadb_router.router, prefix="/api/mariadb", tags=["mariadb"])
app.include_router(db_mongodb_router.router, prefix="/api/mongodb", tags=["mongodb"])
app.include_router(db_redis_router.router, prefix="/api/redis", tags=["redis"])

app.add_event_handler('startup', set_client)
app.add_event_handler('shutdown', discard_client)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/version")
def read_root():
    return "0.2"


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
