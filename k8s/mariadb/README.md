### k8s

* 배포

```bash
$ kubectl apply -f secret.yaml

$ kubectl apply -f pv.yaml

$ kubectl apply -f deployment.yaml
```

* 조회

```bash
$ kubectl get deployment

$ kubectl get pod

$ kubectl get service

$ kubectl get pv

$ kubectl get pvc
```

* mysql pod 접근

```bash
# mysql pod에 연결된 서비스 이름이 mysql이기 때문에 mysql으로 접속할 수 있다.
$ kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql-service -ppassword
```

password는 secret에서 관리

서비스를 통해 pod간 통신이 가능

* 삭제

```bash
$ kubectl delete deployment mysql
$ kubectl delete svc mysql-service
$ kubectl delete pvc mysql-pv-claim
$ kubectl delete pv mysql-pv-volume
```