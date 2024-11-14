import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.database import SessionLocal, Base, engine
from app.models import User
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext
from uuid import uuid4

client = TestClient(app)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@pytest.fixture
def test_db():
    db = SessionLocal()
    yield db
    db.close()

@pytest.fixture
def create_user(test_db):
    user_data = User(
        first_name="Test",
        last_name="User",
        email=f"testuser_{uuid4().hex}@example.com",
        hashed_password=pwd_context.hash("testpassword"),
        role="teacher"
    )
    test_db.add(user_data)
    test_db.commit()
    test_db.refresh(user_data)
    return user_data

@pytest.fixture
def create_student(test_db):
    student_data = User(
        first_name="Student",
        last_name="Example",
        email=f"student_{uuid4().hex}@example.com",
        hashed_password=pwd_context.hash("studentpassword"),
        role="student"
    )
    test_db.add(student_data)
    test_db.commit()
    test_db.refresh(student_data)
    return student_data

@pytest.fixture
def classroom_id(create_user):
    # Fixture to create a classroom and provide its ID
    classroom_name = f"Class_{uuid4().hex[:8]}"
    response = client.post("/create_classroom", json={
        "classroom_name": classroom_name,
        "user_email": create_user.email
    })
    assert response.status_code == 200, "Failed to create a classroom in fixture"
    return response.json().get("classroom_id")

def test_signup():
    response = client.post("/signup", json={
        "first_name": "New",
        "last_name": "User",
        "email": f"newuser_{uuid4().hex}@example.com",
        "password": "password123",
        "role": "teacher"
    })
    assert response.status_code == 200
    assert response.json()["message"] == "User created successfully"

def test_login(create_user):
    response = client.post("/login", data={
        "username": create_user.email,
        "password": "testpassword"
    })
    assert response.status_code == 200
    assert response.json()["message"] == "Login successful"

def test_create_classroom(create_user):
    classroom_name = f"Class_{uuid4().hex[:8]}"
    response = client.post("/create_classroom", json={
        "classroom_name": classroom_name,
        "user_email": create_user.email
    })
    assert response.status_code == 200
    assert response.json()["message"] == "Classroom created successfully"

def test_get_classrooms(create_user):
    # Create a classroom for the teacher
    classroom_name = f"Class_{uuid4().hex[:8]}"
    create_response = client.post("/create_classroom", json={
        "classroom_name": classroom_name,
        "user_email": create_user.email
    })
    assert create_response.status_code == 200
    assert create_response.json()["message"] == "Classroom created successfully"

    # Now retrieve the classrooms
    response = client.get("/classrooms", params={"user_email": create_user.email})
    assert response.status_code == 200
    classrooms = response.json()

    # Ensure the teacher has at least one classroom
    assert len(classrooms) > 0
    # Check that the created classroom is in the returned list
    assert any(c["classroom_name"] == classroom_name for c in classrooms)

def test_join_class(create_student, classroom_id):
    response = client.post("/join_class", json={
        "class_code": classroom_id,
        "user_email": create_student.email
    })
    assert response.status_code == 200
    assert response.json()["message"] == "Successfully joined the class"

def test_join_class_already_member(create_student, classroom_id):
    # Have the student join the class once
    first_join_response = client.post("/join_class", json={
        "class_code": classroom_id,
        "user_email": create_student.email
    })
    assert first_join_response.status_code == 200
    assert first_join_response.json()["message"] == "Successfully joined the class"

    # Attempt to join the same classroom again
    second_join_response = client.post("/join_class", json={
        "class_code": classroom_id,
        "user_email": create_student.email
    })
    assert second_join_response.status_code == 400
    assert "User is already a member of this class" in second_join_response.json()["detail"]
   
def test_get_classroom_members(classroom_id):
    response = client.get(f"/classroom_members/{classroom_id}")
    assert response.status_code == 200
    # Ensure members are listed
    data = response.json()
    assert "members" in data
    # Should have at least 1 member (the teacher)

def test_delete_classroom(classroom_id):
    response = client.delete(f"/delete_classroom/{classroom_id}")
    assert response.status_code == 200
    assert response.json()["message"] == "Classroom deleted successfully"

