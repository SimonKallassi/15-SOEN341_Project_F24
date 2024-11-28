import requests

# FastAPI server URL
url = "http://127.0.0.1:8000/signup"

# Define the user registration data
for i in range(1, 31):  # Loop to create 30 users
    payload = {
        "first_name": f"User{i}",
        "last_name": f"Test{i}",
        "email": f"user{i}@example.com",  # Unique email for each user
        "password": "password123",  # Same password for all users
        "role": "student"  # Role can be 'student' or 'teacher'
    }

    # Make the POST request to register the user
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # Raise an exception for HTTP errors
        print(f"User {i} registered successfully: {response.json()}")
    except requests.exceptions.HTTPError as err:
        print(f"HTTP error occurred for User {i}: {err}")
    except Exception as err:
        print(f"An error occurred for User {i}: {err}")