# 컨테이너 기반 FastAPI 디비연동

* running

```bash
$ docker-compose up

$ docker-compose ps  
     Name                    Command               State            Ports          
-----------------------------------------------------------------------------------
api.fastapi.com   uvicorn main:app --host 0. ...   Up      0.0.0.0:4000->80/tcp    
db.maria.com      docker-entrypoint.sh mariadbd    Up      0.0.0.0:3306->3306/tcp  
db.mongodb.com    docker-entrypoint.sh mongod      Up      0.0.0.0:27017->27017/tcp
```

4000번 포트로 요청한다 /mariadb, /mongodb

docker-compose up 시 api 서버 이미지가 없다면 새로 생성한다. 만약 api 서버 코드가 수정되었다면 기존에 생성된 이미지를 지우고 up을 수행한다.

api.fastapi.com은 환경변수 api/.product.env을 적용한다

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

### mysql

```bash
$ docker exec -it db.maria.com /bin/bash

$ mongo -u root -p password

>
```

### mongodb

```bash
$ docker exec -it db.mongodb.com /bin/bash

$ mongo -u root -p 1234

>
```

* 데이터베이스 변경

```sql
> use mydb
```

* 컬렉션 생성

```sql
> db.createCollection('book')
```

* 데이터 입력

```sql
> db.book.insertOne({name:"hello mongo", author:"choi"})

> db.book.insertMany([{name:"hello python", author:"mung0"}, {name:"hello docker", author:"mung1"}])
```

* 데이터 조회

```sql
> db.book.find().pretty()

> db.book.find({name:"hello docker"})
```

* 데이터 업데이트

```sql
> db.book.updateOne( { _id: ObjectId("61e374779cbbcefe0d6d744d") }, { $set: { author: "mm" } } )
```

* 데이터 삭제

```sql
> db.book.deleteOne({name:"hello docker"})

```