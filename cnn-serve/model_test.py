import tensorflow as tf
from tensorflow.keras import datasets
import numpy as np

(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

model = tf.keras.models.load_model('cifar10_model')

a = model.predict(train_images[0: 10])
print(train_images.shape)
for i, v in enumerate(a):
  print(v, v.argmax(), train_labels[i])