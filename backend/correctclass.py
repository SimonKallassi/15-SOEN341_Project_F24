import requests

user_email = "ask@gmail.com"  # Replace with actual student email
response = requests.get("http://127.0.0.1:8000/student_classrooms", params={"user_email": user_email})

if response.status_code == 200:
    print("Response:", response.json())
else:
    print("Error:", response.status_code, response.text)
