FROM eclipse-temurin:21.0.5_11-jre
RUN mkdir /app
COPY dist/github-actions-typing/lib/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
