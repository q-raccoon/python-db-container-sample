#!/bin/bash 

kubectl delete deployment redis    # deployment 제거
kubectl delete svc redis-service   # service 제거
kubectl delete secret redis-secret # secret 제거