FROM gradle:7.6.0-jdk17 AS build
COPY --chown=gradle:gradle . /src
WORKDIR /src
RUN gradle build --no-daemon
RUN rm -rf dist
RUN unzip build/distributions/github-actions-typing.zip -d dist

FROM eclipse-temurin:17.0.6_10-jre
RUN mkdir /app
COPY --from=build /src/dist/github-actions-typing/lib/*.jar /app/
WORKDIR /app

ENTRYPOINT ["java", "-cp", "/app/*", "it.krzeminski.githubactionstyping.MainKt"]
