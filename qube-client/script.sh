#!/bin/sh

echo "Start"

sudo docker build -t qube-client:dev .

sudo docker image ls

sudo docker run -it --rm \
	-p 3000:3000 \
	qube-client:dev
