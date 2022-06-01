#!/bin/bash 

echo '[DB DEPLOY START] mongodb'
kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml