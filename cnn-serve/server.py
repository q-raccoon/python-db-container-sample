from fastapi import FastAPI, File, UploadFile
from utils import raw_to_pixel, label_to_class
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model('cifar10_model')

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

class Prediction(BaseModel):
    label: int
    name: str

@app.post("/files/")
async def create_file(file: bytes = File(...)):
  return {"file_size": len(file)}


@app.post("/prediction", response_model=Prediction)
async def predict_image(file: UploadFile = File(...)):
  
  pixels = await raw_to_pixel(file)
  prediction = model.predict(np.array([pixels]))
  label = int(prediction[0].argmax())
  name = label_to_class(label)

  result = {
    "label": prediction[0].argmax(),
    "name": name
  } 

  return Prediction(**result)
# from fastapi import FastAPI, File, UploadFile

# app = FastAPI()


# @app.post("/files/")
# async def create_file(file: bytes = File(...)):
#     return {"file_size": len(file)}


# @app.post("/prediction/")
# async def create_upload_file(file: UploadFile):
#     return {"filename": file.filename}