from dotenv import load_dotenv
load_dotenv()

from minio import Minio
import os, datetime

HOST = os.environ.get('HOST')
ACCESS_KEY = os.environ.get('ACCESS_KEY')
SECRET_KEY = os.environ.get('SECRET_KEY')

BUCKET_NAME_MODEL = 'model'
BUCKET_NAME_MODEL_HISTORY = 'model-history'

minioClient = Minio(
  HOST,
  access_key=ACCESS_KEY,
  secret_key=SECRET_KEY,
  secure=False
)

if minioClient.bucket_exists(BUCKET_NAME_MODEL) == False:
  minioClient.make_bucket(BUCKET_NAME_MODEL)

if minioClient.bucket_exists(BUCKET_NAME_MODEL_HISTORY) == False:
  minioClient.make_bucket(BUCKET_NAME_MODEL_HISTORY)

def to_storage(model, model_name):
  model_path_log = f'{model_name}-{datetime.datetime.now().strftime("%Y%m%d-%H%M%S")}.h5'
  model_path = f'{model_name}.h5'
  model.save(model_path)

  minioClient.fput_object(BUCKET_NAME_MODEL, model_path, model_path) 
  minioClient.fput_object(BUCKET_NAME_MODEL_HISTORY, model_path_log, model_path) 