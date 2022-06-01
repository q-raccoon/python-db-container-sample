from fastapi import FastAPI, File, UploadFile
from utils import raw_to_pixel, label_to_class
from fastapi.responses import JSONResponse
import tensorflow as tf
from pydantic import BaseModel
import numpy as np

model = tf.keras.models.load_model('cifar10_model')

app = FastAPI()

class Prediction(BaseModel):
    label: int
    name: str

@app.post("/files/")
async def create_file(file: bytes = File(...)):
  return {"file_size": len(file)}


@app.post("/prediction/")
async def create_upload_file(file: UploadFile = File(...)):
  
  pixels = await raw_to_pixel(file)
  prediction = model.predict(np.array([pixels]))
  label = int(prediction[0].argmax())
  name = label_to_class(label)

  result = {
    "label": prediction[0].argmax(),
    "name": name
  } 

  return Prediction(**result)
