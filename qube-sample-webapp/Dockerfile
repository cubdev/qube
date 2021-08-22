FROM python:3.7


# set the working directory in the container to /app
# WORKDIR /app

# add the current directory to the container as /app
# ADD . /app

# Copy 
COPY . /

# execute pip command, pip install -r
RUN pip install -r requirements.txt


# Expose Port
EXPOSE 5000

# Run command
CMD gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.gateway:app -b 0.0.0.0:5000 --log-config logger.ini

