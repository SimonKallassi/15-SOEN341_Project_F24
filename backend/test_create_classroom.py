import requests

# Define the endpoint URL
url = "http://127.0.0.1:8000/create_classroom"

# Define the payload to match the ClassroomCreate schema
payload = {
    "classroom_name": "Tested Class",
    "user_email": "ad@gmail.com"
}

try:
    # Send a POST request with JSON payload
    response = requests.post(url, json=payload)
    response.raise_for_status()  # Will raise an error for 4xx or 5xx responses

    # Print the response for verification
    print("Response status:", response.status_code)
    print("Response data:", response.json())
except requests.HTTPError as http_err:
    print(f"HTTP error occurred: {http_err}")
    print("Response content:", response.content)
except Exception as err:
    print(f"An error occurred: {err}")
