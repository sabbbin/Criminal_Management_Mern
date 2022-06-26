# import sys

# from deepface import DeepFace
# import cv2

# # img1=cv2.imread(sys.argv[1])
# # img2=cv2.imread(sys.argv[2])

# # result=DeepFace.verify(img1,img2) 

# def result():
#     return 24
# # return result


import os
import time
import pandas as pd
import torch
import torch.nn as nn
import torch.nn.functional as F
import argparse
import sys

# from torch.utils.data import Dataset
# from torch.utils.data import DataLoader

from torchvision import transforms
from PIL import Image
# torch.backends.cudnn.deterministic = True
# from sklearn.model_selection import train_test_split
# torch.backends.cudnn.deterministic = True

# from torch.utils.data import Dataset
# from torch.utils.data import DataLoader

# from torchvision import transforms
from PIL import Image
# torch.backends.cudnn.deterministic = True
# from sklearn.model_selection import train_test_split
# torch.backends.cudnn.deterministic = True


 # Hyperparameters
learning_rate = 0.0005
num_epochs = 25

 # Architecture
NUM_CLASSES = 54
BATCH_SIZE = 256
GRAYSCALE = False

# //resnet-34 architecture

def conv3x3(in_planes, out_planes, stride=1):
    """3x3 convolution with padding"""
    return nn.Conv2d(in_planes, out_planes, kernel_size=3, stride=stride,
                     padding=1, bias=False)


class BasicBlock(nn.Module):
    expansion = 1

    def __init__(self, inplanes, planes, stride=1, downsample=None):
        super(BasicBlock, self).__init__()
        self.conv1 = conv3x3(inplanes, planes, stride)
        self.bn1 = nn.BatchNorm2d(planes)
        self.relu = nn.ReLU(inplace=True)
        self.conv2 = conv3x3(planes, planes)
        self.bn2 = nn.BatchNorm2d(planes)
        self.downsample = downsample
        self.stride = stride

    def forward(self, x):
        residual = x

        out = self.conv1(x)
        out = self.bn1(out)
        out = self.relu(out)

        out = self.conv2(out)
        out = self.bn2(out)

        if self.downsample is not None:
            residual = self.downsample(x)

        out += residual
        out = self.relu(out)

        return out


class ResNet(nn.Module):

    def __init__(self, block, layers, num_classes, grayscale):
        self.inplanes = 64
        if grayscale:
            in_dim = 1
        else:
            in_dim = 3
        super(ResNet, self).__init__()
        self.conv1 = nn.Conv2d(in_dim, 64, kernel_size=7, stride=2, padding=3,
                               bias=False)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True)
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)
        self.layer1 = self._make_layer(block, 64, layers[0])
        self.layer2 = self._make_layer(block, 128, layers[1], stride=2)
        self.layer3 = self._make_layer(block, 256, layers[2], stride=2)
        self.layer4 = self._make_layer(block, 512, layers[3], stride=2)
        self.avgpool = nn.AvgPool2d(4)
        self.fc = nn.Linear(512, num_classes)

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                n = m.kernel_size[0] * m.kernel_size[1] * m.out_channels
                m.weight.data.normal_(0, (2. / n)**.5)
            elif isinstance(m, nn.BatchNorm2d):
                m.weight.data.fill_(1)
                m.bias.data.zero_()

    def _make_layer(self, block, planes, blocks, stride=1):
        downsample = None
        if stride != 1 or self.inplanes != planes * block.expansion:
            downsample = nn.Sequential(
                nn.Conv2d(self.inplanes, planes * block.expansion,
                          kernel_size=1, stride=stride, bias=False),
                nn.BatchNorm2d(planes * block.expansion),
            )

        layers = []
        layers.append(block(self.inplanes, planes, stride, downsample))
        self.inplanes = planes * block.expansion
        for i in range(1, blocks):
            layers.append(block(self.inplanes, planes))

        return nn.Sequential(*layers)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.maxpool(x)

        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)
        x = self.avgpool(x)

        x = x.view(x.size(0), -1)
        logits = self.fc(x)
        probas = F.softmax(logits, dim=1)
        return logits, probas


def resnet34(num_classes, grayscale):
    
    model = ResNet(block=BasicBlock, 
                   layers=[3, 4, 6, 3],
                   num_classes=num_classes,
                   grayscale=grayscale)
    return model

# Get average image


#face 
import imageio
from mlxtend.image import EyepadAlign


### Setting verbosity to 1 will print a progress bar
eyepad = EyepadAlign()

eyepad.fit_directory(target_img_dir='D:/react/server/Deeplearn/agepred/facealign',
                     target_width=200, target_height=240,
                     file_extension='.jpg')
print(sys.argv[1])
# io.BytesIO(base64.b64decode(b64_string))
# import base64
# imgdec= base64.decodestring(sys.argv[0])
# print(imgdec)
# img = imageio.imread(imgdec)
img = imageio.imread('D:/react/server/Deeplearn/agepred/17.jpg')
print(img)
img_tr = eyepad.transform(img)
print('Transformed Image shape: ', img_tr.shape)
# import imageio
import os
import numpy as np
from mlxtend.image import EyepadAlign
# import pyprind

# Center nose of the average image
nose_coord = eyepad.target_landmarks_[33].copy()
disp_vec = np.array([100, 120]) - nose_coord
translated_shape = eyepad.target_landmarks_ + disp_vec

eyepad_centnoise = EyepadAlign(verbose=1)
eyepad_centnoise.fit_values(target_landmarks=translated_shape,
                            target_width=200,
                            target_height=240)

img_tr = eyepad_centnoise.transform(img_tr)
print(img_tr.shape)
#save image

import cv2
from PIL import Image
im = Image.fromarray(img_tr)
im.save("test.jpg")

#preparing for testing
import tensorflow as tf


image = Image.open('test.jpg')
print(image.size)
custom_transform = transforms.Compose([transforms.CenterCrop((140, 140)),
                                       transforms.Resize((128, 128)),
                                       transforms.CenterCrop((120, 120)),
                                       transforms.ToTensor()])
                                      
                                  
                         

    
img = custom_transform(image)

DEVICE  = torch.device("cpu")
image = img.to(DEVICE)
#predict average image
import cv2

# from google.colab.patches import cv2_imshow
img = cv2.imread("test.jpg")
cv2.imshow('tes',img)

model1 = resnet34(NUM_CLASSES, GRAYSCALE)
model1.load_state_dict(torch.load('D:/react/server/Deeplearn/agepred/best_model .pt', map_location=DEVICE))
model1.eval()

image = image.unsqueeze(0)

with torch.set_grad_enabled(False): 
  # output = model(data[None, ...])  
  # _, predicted_labels = torch.max(probas, 1)
    logits, probas = model1(image)
    # print('Class probabilities:', probas)
    # print('Predicted class label:', torch.argmax(probas, 1).item())
    print('the predicted age :', torch.argmax(probas, 1).item()+16 )