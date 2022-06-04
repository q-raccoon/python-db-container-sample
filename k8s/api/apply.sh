echo '[SERVER DEPLOY START] api'

kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml