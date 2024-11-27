#!/bin/bash

APP_URL="http://35.228.246.23/"
EXPECTED_CONTENT="<!doctype html>"

echo "Running smoke test for the application on $APP_URL"

MAX_RETRIES=5
RETRY_INTERVAL=5

for i in $(seq 1 $MAX_RETRIES); do
  echo "Attempt $i of $MAX_RETRIES..."

  # Fetch the response and status code
  RESPONSE=$(curl --silent --max-time 10 "$APP_URL")
  STATUS_CODE=$(curl --write-out %{http_code} --silent --output /dev/null --max-time 10 "$APP_URL")

  # Debug output for response and status
  echo "HTTP Status Code: $STATUS_CODE"
  echo "Response (first 100 characters): ${RESPONSE:0:100}"

  # Check if the response is 200 and contains the expected content
  if [[ $STATUS_CODE -eq 200 && "$RESPONSE" == *"$EXPECTED_CONTENT"* ]]; then
    echo "Smoke test passed successfully on attempt $i"
    exit 0
  fi

  echo "Attempt $i failed (Status: $STATUS_CODE). Retrying in $RETRY_INTERVAL seconds..."
  sleep $RETRY_INTERVAL
done

echo "Smoke test failed after $MAX_RETRIES attempts"
exit 1
