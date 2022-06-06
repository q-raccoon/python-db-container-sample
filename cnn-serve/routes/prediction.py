from fastapi import APIRouter, Depends, HTTPException, File, UploadFile
from utils import raw_to_pixel, label_to_class
from schemas.prediction import Prediction
from utils import load_model

import numpy as np

model = load_model()

router = APIRouter()

@router.get('/version')
async def get_version():
  return '0.4'


@router.post("/", response_model=Prediction)
async def predict_image(file: UploadFile = File(...)):
  
  pixels = await raw_to_pixel(file)

  prediction = model.predict(np.array([pixels / 255]) )
  label = int(prediction[0].argmax())
  name = label_to_class(label)

  result = {
    "label": prediction[0].argmax(),
    "name": name
  } 

  return Prediction(**result)