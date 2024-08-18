# Use an official Maven image with JDK to build and run the application
FROM maven:3.8.6-eclipse-temurin-17

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project files
COPY ./pom.xml /app/pom.xml

# Download dependencies
RUN mvn dependency:go-offline

# Copy the source files
COPY ./src /app/src
COPY ./docker-compose.yaml /app/docker-compose.yml


# Install inotify-tools
RUN apt-get update && apt-get install -y inotify-tools

# Copy the entrypoint script
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Specify the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]