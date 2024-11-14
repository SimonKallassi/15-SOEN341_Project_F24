import requests

# Step 1: Login to get the token
login_url = "http://127.0.0.1:8000/login"
login_data = {
    "username": "ad@gmail.com",
    "password": "Simster_12211"
}

try:
    login_response = requests.post(login_url, data=login_data)
    login_response.raise_for_status()  # Raise an error for bad status codes
    token = login_response.json().get("access_token")

    if not token:
        print("Failed to retrieve token. Check login credentials.")
        exit()

    print("Token retrieved successfully:", token)

    # Step 2: Use the token to create a classroom
    create_classroom_url = "http://127.0.0.1:8000/create_classroom"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    classroom_data = {"classroom_name": "Test Class"}

    create_response = requests.post(create_classroom_url, json=classroom_data, headers=headers)
    create_response.raise_for_status()  # Raise an error for bad status codes

    print("Classroom created successfully!")
    print("Classroom creation status:", create_response.status_code)
    print("Response JSON:", create_response.json())

except requests.exceptions.HTTPError as http_err:
    print("HTTP error occurred:", http_err)
except requests.exceptions.RequestException as e:
    print("Request error occurred:", e)
except Exception as e:
    print("An unexpected error occurred:", e)
