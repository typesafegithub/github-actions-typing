FROM eclipse-temurin:21.0.8_9-jre
RUN mkdir /app
COPY dist/github-actions-typing/lib/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
