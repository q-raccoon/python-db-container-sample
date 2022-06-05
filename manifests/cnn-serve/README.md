```bash
$ kustomize edit set image pjt3591oo/cnn-serve-tutorial:0.4
```

```bash
$ kustomize build . -o deployment-new.yaml
```