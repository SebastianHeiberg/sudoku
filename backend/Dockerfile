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

# Copy the entrypoint script
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# edit this in, if you want to run a devopment mode.
# It uses polling to detect changes in the source code, and will rebuild the project
# The spring boot dev tool, the reloads the application
# It is consumeing a lot of resources, because i did not get inotify to work sadly
ENTRYPOINT ["/docker-entrypoint.sh"]