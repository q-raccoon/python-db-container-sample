#!/bin/bash 

echo $PWD

cd mariadb
./apply.sh

cd ../mongodb
./apply.sh

cd ..redis
./apply.sh

cd ..