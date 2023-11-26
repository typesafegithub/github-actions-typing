FROM eclipse-temurin:21.0.1_12-jre
RUN mkdir /app
COPY dist/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
