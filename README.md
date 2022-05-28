# 컨테이너 기반 FastAPI 디비연동

### Architecture

![](./resource/Architecture.png)

* running

```bash
$ docker-compose up

$ docker-compose ps  

     Name                    Command               State            Ports
-----------------------------------------------------------------------------------
api.fastapi.com   uvicorn main:app --host 0. ...   Up      0.0.0.0:4000->80/tcp
db.maria.com      docker-entrypoint.sh mariadbd    Up      0.0.0.0:3306->3306/tcp
db.mongodb.com    docker-entrypoint.sh mongod      Up      0.0.0.0:27017->27017/tcp
front.react.com   /docker-entrypoint.sh ngin ...   Up      0.0.0.0:80->80/tcp
```

http://localhost

http://localhost/docs


FastAPI로 실행중인 서버 어플리케이션은 4000번 포트로 요청하며 라우트는 /mariadb, /mongodb가 있다

docker-compose up 시 api, font 이미지가 없다면 생성

만약 api, font 코드가 수정되었다면 기존에 생성된 이미지를 지우고 up 수행(docker-compose의 build에 의해 이미지가 없다면 이미지를 생성)

api.fastapi.com은 환경변수 api/.product.env 적용

front.react.com은 환경변수 front/.product.env 적용

* api 서버 로컬 개발모드

```bash
$ docker-compose up db.mongodb.com db.maria.com

$ docker-compose ps  
     Name                    Command               State            Ports          
-----------------------------------------------------------------------------------
db.maria.com      docker-entrypoint.sh mariadbd    Up      0.0.0.0:3306->3306/tcp  
db.mongodb.com    docker-entrypoint.sh mongod      Up      0.0.0.0:27017->27017/tcp
```

이제 api를 직접 실행한다.

```bash
$ cd api

$ uvicorn main:app --reload
```

환경변수 api/.env을 적용한다.

### API 이미지 빌드

```
$ docker build -t [이미지 이름] ./api
```

### 쿼리 

[MariaDB](./mariadb/README.md)

[MongoDB](./mongodb/README.md)