
```bash
# ingress-controller 생성
# 만약 minikube 환경이라면 ingress-controller는 minikube addons enable ingress를 통해 생성한다
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml

# minikube 환경일 때
$ minikube addons enable ingress

# ingress에 바인딩 되어있는 포트 확인
$ kubectl get svc -n ingress-nginx
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.101.38.52    <pending>     80:30153/TCP,443:32024/TCP   50s
ingress-nginx-controller-admission   ClusterIP      10.107.96.150   <none>        443/TCP                      50s
```

```bash
$ kubectl apply -f ingress.yaml
```

```
$  kubectl get ingress
NAME           CLASS    HOSTS          ADDRESS        PORTS   AGE
mung-ingress   <none>   www.mung.com   192.168.42.2   80      4m4s
```

배포가 완료되기 전까지 ADDRESS가 잠깐 보이지 않을 수 있다.

ingress로 등록된 hosts(/etc/hosts에 address로 바인딩) 또는 address로 접속되지 않음. 이때 svc 목록 조회시 80:포트/TCP에서 포트로 접속하면 ingress의 80으로 트래픽이 전달됨

나의 환경에서 정상적으로 실행되지 않아 ingress-nginx의 pod을 직접 포워딩을 건다.

```
$ kubectl get pod -n ingress-nginx
NAME                                       READY   STATUS      RESTARTS   AGE
ingress-nginx-admission-create-dpnm2       0/1     Completed   0          6m50s
ingress-nginx-admission-patch-pkxnf        0/1     Completed   1          6m50s
ingress-nginx-controller-cc8496874-6gd8t   1/1     Running     0          6m50s


$ kubectl port-forward ingress-nginx-controller-cc8496874-6gd8t -n ingress-nginx 8080:80
```

ingress, tunnel, port-forward