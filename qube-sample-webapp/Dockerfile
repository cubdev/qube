FROM python:3

# set the working directory in the container to /app
WORKDIR /app

# add the current directory to the container as /app
ADD . /app

# execute everyone's favorite pip command, pip install -r
RUN pip install -r requirements.txt

# expose port 5000 for Flask app to run on
EXPOSE 5000

# set entrypoint for docker
ENTRYPOINT python app.py

# execute the flask application
CMD flask run 
