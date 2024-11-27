APP_URL="http://35.228.246.23/"
EXPECTED_CONTENT="Portfolio Pipeline Project"

echo "Running smoke test for the application on $APP_URL"

MAX_RETRIES=5
RETRY_INTERVAL=5

for i in $(seq 1 $MAX_RETRIES); do
  RESPONSE=$(curl --silent --max-time 10 $APP_URL)
  STATUS_CODE=$(curl --write-out %{http_code} --silent --output /dev/null --max-time 10 $APP_URL)

  if [[ $STATUS_CODE -eq 200 && $RESPONSE == *"$EXPECTED_CONTENT"* ]]; then
    echo "Smoke test passed successfully"
    exit 0
  fi

  echo "Attempt $i failed (Status: $STATUS_CODE). Retrying in $RETRY_INTERVAL seconds..."
  sleep $RETRY_INTERVAL
done

echo "Smoke test failed after $MAX_RETRIES attempts"
exit 1
