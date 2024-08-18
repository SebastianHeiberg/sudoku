#!/bin/sh

# echo "Starting inotifywait..."

# # Run inotifywait in the background
# while inotifywait -r -e modify /backend/src/main/java/com/example/backend/controllers; 
# do 
#   echo "File change detected, running mvn compile..."
#   mvn compile -o -DskipTests; 
# done &

# echo "Starting Spring Boot application..."
# mvn spring-boot:run


echo "Starting inotifywait..."

# Run inotifywait to monitor changes
while true; do
  # Wait for changes in the specified directory
  inotifywait -r -e modify /app/src/main/java/com/example/backend/controllers

  echo "File change detected, running mvn compile..."
  
  # Compile the changes
  mvn compile -o -DskipTests
  
  echo "Compilation finished, restarting Spring Boot application..."

  # Kill the previous Spring Boot process, if any
  pkill -f 'mvn spring-boot:run'

  # Restart the Spring Boot application
  mvn spring-boot:run &
done