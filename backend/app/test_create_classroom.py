import requests

# Step 1: Login to get the token
login_url = "http://127.0.0.1:8000/login"
login_data = {
    "username": "ad@gmail.com",  # Replace with your actual email/username
    "password": "Simster_12211"  # Replace with your actual password
}

try:
    login_response = requests.post(login_url, data=login_data)
    login_response.raise_for_status()  # Raise an error for bad status codes
    token = login_response.json().get("access_token")

    if not token:
        print("Failed to retrieve token.")
        exit()

    print("Token retrieved:", token)

    # Step 2: Use the token to create a classroom
    create_classroom_url = "http://127.0.0.1:8000/create_classroom"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }
    classroom_data = {"classroom_name": "Test Class"}

    create_response = requests.post(create_classroom_url, json=classroom_data, headers=headers)
    create_response.raise_for_status()  # Raise an error for bad status codes

    print("Classroom creation status:", create_response.status_code)
    print("Response JSON:", create_response.json())

except requests.exceptions.RequestException as e:
    print("An error occurred:", e)
