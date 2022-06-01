#!/bin/bash 

echo '[DB DEPLOY START] redis'

kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml