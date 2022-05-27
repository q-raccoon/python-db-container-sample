# MongoDB

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