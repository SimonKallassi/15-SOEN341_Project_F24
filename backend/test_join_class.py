import requests

# FastAPI server URL
url = "http://127.0.0.1:8000/join_class"

# Class code of the class to which users will be added
class_code = "8b9eb772"  # Replace with a valid class code from your database

# Add each user to the class
for i in range(1, 11):  # Loop through the 30 users
    payload = {
        "class_code": class_code,
        "user_email": f"user{i}@example.com"  # Use the same emails created in the registration script
    }

    # Make the POST request to add the user to the class
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # Raise an exception for HTTP errors
        print(f"User {i} added to class successfully: {response.json()}")
    except requests.exceptions.HTTPError as err:
        print(f"HTTP error occurred for User {i}: {err}")
    except Exception as err:
        print(f"An error occurred for User {i}: {err}")