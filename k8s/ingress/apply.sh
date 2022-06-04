echo '[SERVER DEPLOY START] ingress'

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml
kubectl apply -f ingress.yaml
sudo kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller -n ingress-nginx 80:80