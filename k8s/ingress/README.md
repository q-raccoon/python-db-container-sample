
```bash
# ingress-controller 생성
# nginx ingress controller는 퍼블릭 환경이 아니면 bare metal을 설치해야한다고 한다.
# 만약 minikube 환경이라면 ingress-controller는 minikube addons enable ingress를 통해 생성한다
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml
# minikube 환경일 때
# $ minikube addons enable ingress

# ingress에 바인딩 되어있는 포트 확인
$ kubectl get svc -n ingress-nginx
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.101.38.52    <pending>     80:30153/TCP,443:32024/TCP   50s
ingress-nginx-controller-admission   ClusterIP      10.107.96.150   <none>        443/TCP                      50s
```

```bash
$ kubectl apply -f ingress.yaml
```

deployment와 service를 생성한다. ingress도 service를 생성해야 한다.

```bash
$  kubectl get ingress
NAME           CLASS    HOSTS          ADDRESS        PORTS   AGE
mung-ingress   <none>   www.mung.com   192.168.42.2   80      4m4s
```

배포가 완료되기 전까지 ADDRESS가 잠깐 보이지 않을 수 있다.

```bash
$ kubectl get svc 
NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
cnn-serve-service      NodePort    10.99.161.46    <none>        4100:32000/TCP   19m
kubernetes             ClusterIP   10.96.0.1       <none>        443/TCP          19m
mung-ingress-service   ClusterIP   10.111.101.95   <none>        80/TCP           2m14s
```

```bash
$ kubectl describe ingress mung-ingress

Name:             mung-ingress
Namespace:        default
Address:          192.168.49.2
Default backend:  default-http-backend:80 (<error: endpoints "default-http-backend" not found>)
Rules:
  Host        Path  Backends
  ----        ----  --------
  mung.tes
              /api/*          api-service:4000 (172.17.0.6:80,172.17.0.7:80,172.17.0.8:80)
              /prediction/*   cnn-serve-service:4100 (172.17.0.6:80,172.17.0.7:80,172.17.0.8:80)
Annotations:  nginx.ingress.kubernetes.io/rewrite-target: /
Events:
  Type    Reason  Age                From                      Message
  ----    ------  ----               ----                      -------
  Normal  Sync    18s (x2 over 38s)  nginx-ingress-controller  Scheduled for sync
```

```
$ kubectl get pod -n ingress-nginx
NAME                                       READY   STATUS      RESTARTS   AGE
ingress-nginx-admission-create-dpnm2       0/1     Completed   0          6m50s
ingress-nginx-admission-patch-pkxnf        0/1     Completed   1          6m50s
ingress-nginx-controller-cc8496874-6gd8t   1/1     Running     0          6m50s

# 서비스를 포트포워딩 해준다
# ingress-nginx 네임스페이스의 ingress-nginx-controller 서비스를 포트포워딩 해준다
$ kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller -n ingress-nginx 8080:80
```

localhost:8080/api, localhost:8080/prediction
