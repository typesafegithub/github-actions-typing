FROM eclipse-temurin:25.0.2_10-jre
RUN mkdir /app
COPY dist/github-actions-typing/lib/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
