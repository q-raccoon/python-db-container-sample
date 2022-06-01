#!/bin/bash 

echo '[DB DEPLOY START] mariadb'

kubectl apply -f secret.yaml
kubectl apply -f pv.yaml
kubectl apply -f deployment.yaml