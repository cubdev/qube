FROM gradle:6.8.3-jdk11
WORKDIR /app
COPY . /app

RUN gradle build 

EXPOSE 8080

CMD gradle bootRun -PskipDownload=true --console=plain
