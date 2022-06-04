echo '[SERVER DEPLOY START] ingress'

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml

echo 'ingress controller nginx가 생성되기를 기다리는 중 입니다. 약 10초 후 ingress를 생성합니다.'
sleep 10
kubectl apply -f ingress.yaml