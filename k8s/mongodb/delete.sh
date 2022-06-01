#!/bin/bash 

kubectl delete deployment mongodb-deployment # deployment 제거
kubectl delete svc mongodb-service           # service 제거 
kubectl delete secret mongodb-secret         # secret 제거