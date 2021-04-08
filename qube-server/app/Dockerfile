FROM gradle:5.6.2-jdk8
WORKDIR /app
COPY . /app

RUN gradle --no-daemon --warning-mode all --console=plain getDeps

EXPOSE 8080
CMD ["sh", "start.sh"]