#!/bin/bash 

kubectl delete deployment mysql
kubectl delete svc mysql-service
kubectl delete pvc mysql-pv-claim # pvc를 pv보다 먼저 제거해야 한다
kubectl delete pv mysql-pv-volume