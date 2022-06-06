from model import model
from tensorflow.keras import datasets
# import matplotlib.pyplot as plt

'''
labels
  airplane : 0
  automobile : 1
  bird : 2
  cat : 3
  deer : 4
  dog : 5
  frog : 6
  horse : 7
  ship : 8
  truck : 9
'''

(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# 픽셀 졍규화
train_images, test_images = train_images / 255.0, test_images / 255.0

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
# plt.figure(figsize=(10,10))
# for i in range(10):
#     plt.subplot(5,5,i+1)
#     plt.xticks([])
#     plt.yticks([])
#     plt.grid(False)
#     plt.imshow(train_images[i], cmap=plt.cm.binary)
#     # The CIFAR labels happen to be arrays, 
#     # which is why you need the extra index
#     plt.xlabel(class_names[train_labels[i][0]])
# plt.show()

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

history = model.fit(train_images, train_labels, epochs=10, validation_data=(test_images, test_labels))
model.save('cifar10_model')
print(history)