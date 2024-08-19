#!/bin/sh

echo "Starting file change polling for /app/src/main/java/com/example/backend..."

# Store the last modification time
LAST_MOD_TIME=$(date +%s)

# Polling loop in the background
(
  while true; do
    # Find the most recent modification time of the files in the specific directory
    MOD_TIME=$(find /app/src/main/java/com/example/backend -type f -exec stat --format '%Y' {} + | sort -n | tail -1)

    if [ "$MOD_TIME" -gt "$LAST_MOD_TIME" ]; then
      echo "File change detected in /app/src/main/java/com/example/backend, running mvn compile..."
      mvn compile -o -DskipTests
      # Update the last modification time
      LAST_MOD_TIME=$MOD_TIME
    fi

    # Sleep for 5 seconds before checking again
    sleep 5
  done
) &

echo "Starting Spring Boot application..."
mvn spring-boot:run