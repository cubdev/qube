FROM python:3-alpine

# set the working directory in the container to /app
WORKDIR /app

# add the current directory to the container as /app
ADD . /app

# execute pip command, pip install -r
RUN pip install -r requirements.txt

# EXPOSE 5000

# CMD gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.gateway:app --log-config logger.ini -b 0.0.0.0:5000