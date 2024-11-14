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
