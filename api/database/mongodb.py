import os
from motor.motor_asyncio import AsyncIOMotorClient

MONGODB_HOST = os.environ.get('MONGODB_HOST')
MONGODB_PORT = os.environ.get('MONGODB_PORT')
MONGODB_USER = os.environ.get('MONGODB_USER')
MONGODB_PASSWORD = os.environ.get('MONGODB_PASSWORD')
MONGODB_DATABASE = os.environ.get('MONGODB_DATABASE')

MONGODB_URL = f"mongodb://{MONGODB_USER}:{MONGODB_PASSWORD}@{MONGODB_HOST}:{MONGODB_PORT}/{MONGODB_DATABASE}?authSource=admin&authMechanism=SCRAM-SHA-1&retryWrites=true&w=majority"

print(MONGODB_URL)

client: AsyncIOMotorClient = AsyncIOMotorClient(MONGODB_URL, maxPoolSize=10, minPoolSize=10)

db = client[MONGODB_DATABASE]