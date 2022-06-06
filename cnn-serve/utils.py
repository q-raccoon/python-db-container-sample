from PIL import Image
import numpy as np
import tensorflow as tf
import io

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
  return tf.keras.models.load_model('cifar10_model')