FROM gradle:6.8.3-jdk11
WORKDIR /app
COPY . /app

RUN ./app/gradlew build 

EXPOSE 8080

CMD ./app/gradlew bootRun -PskipDownload=true --console=plain
