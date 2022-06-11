from dotenv import load_dotenv
load_dotenv()

from PIL import Image
import numpy as np
import tensorflow as tf
import io

from minio import Minio
import os, datetime

HOST = os.environ.get('HOST')
ACCESS_KEY = os.environ.get('ACCESS_KEY')
SECRET_KEY = os.environ.get('SECRET_KEY')

BUCKET_NAME = 'model'

minioClient = Minio(
  HOST,
  access_key=ACCESS_KEY,
  secret_key=SECRET_KEY,
  secure=False
)

async def raw_to_pixel(file):
  raw = await file.read()
  image = Image.open(io.BytesIO(raw))
  pixels = np.array(image)
  
  # TODO: image = Image.frombytes('RGBA', (32,32), image_data, 'raw')
  return pixels

def label_to_class(label):
  labels = [
    "airplane",
    "automobile",
    "bird",
    "cat",
    "deer",
    "dog",
    "frog",
    "horse",
    "ship",
    "truck",
  ]

  return labels[label]

def load_model():
  minioClient.fget_object(BUCKET_NAME, 'cifar10_model.h5', 'cifar10_model.h5', request_headers=None)
  return tf.keras.models.load_model('cifar10_model.h5')