import requests

# Replace with your actual FastAPI server URL and port
url = "http://127.0.0.1:8000/join_class"

# Define the test data
payload = {
    "class_code": "91ea0f39",  # Replace with a valid class code from your database
    "user_email": "yb@gmail.com"  # Replace with an email from your database
}

# Make the POST request
try:
    response = requests.post(url, json=payload)
    response.raise_for_status()  # Raise an exception for HTTP errors
    print("Response status:", response.status_code)
    print("Response data:", response.json())
except requests.exceptions.HTTPError as err:
    print("HTTP error occurred:", err)
except Exception as err:
    print("An error occurred:", err)
