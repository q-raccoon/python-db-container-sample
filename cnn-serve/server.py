from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import prediction as prediction_router

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

app.include_router(prediction_router.router, prefix="/prediction", tags=["redis"])