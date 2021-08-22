FROM gradle:6.8.3-jdk11
WORKDIR /app
COPY . /app

RUN gradle build -x test 

EXPOSE 8080

CMD java $QUBE_JAVA_OPTS -jar build/libs/app-0.0.1-SNAPSHOT.jar
