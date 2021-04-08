FROM gradle:6.8.3-jdk11
WORKDIR /app
COPY . /app

RUN gradle --no-daemon --warning-mode all --console=plain getDeps

EXPOSE 8080
CMD ["sh", "start.sh"]
