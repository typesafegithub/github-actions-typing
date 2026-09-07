FROM eclipse-temurin:25.0.4_7-jre
RUN mkdir /app
COPY dist/github-actions-typing/lib/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
