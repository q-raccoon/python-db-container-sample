#!/bin/bash 

echo $PWD

cd mariadb
./apply.sh
echo "\n\n\n"

cd ../mongodb
./apply.sh
echo "\n\n\n"

cd ../redis
./apply.sh
echo "\n\n\n"

cd ../api
./apply.sh
echo "\n\n\n"

cd ../cnn-serve
./apply.sh
echo "\n\n\n"

cd ../client
./apply.sh
echo "\n\n\n"

echo "모든 컨테이너가 Running 상태인지 확인하세요. "
echo "모든 컨테이너가 Running 상태이면 아래 명령어를 실행하세요. "
echo "\n"
echo "cd ingress"
echo "./ingress.sh"
