
```bash
$ kubectl apply -f deployment.yaml

```

```bash
$ kubectl run -it --rm --image=bitnami/redis:latest redis-client --command -- /bin/bash

$ redis-cli -h redis-service -p 6379 -a password
```
