import pytest
from app.database import Base, engine, SessionLocal
from app.models import User
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext
import uuid
import sys
import os
from sqlalchemy import text

# Add the backend directory to the system path
backend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../backend'))
sys.path.insert(0, backend_path)

# Initialize the password context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@pytest.fixture(scope="session", autouse=True)
def setup_test_database():
    """Create and drop tables around all test runs."""
    Base.metadata.create_all(bind=engine)  # Create tables
    yield
    Base.metadata.drop_all(bind=engine)    # Drop tables after tests are done

@pytest.fixture(scope="function")
def db_session():
    """Provide a transactional scope around each test."""
    connection = engine.connect()
    transaction = connection.begin()
    session = sessionmaker(bind=connection)()

    # Clean up before each test to avoid unique constraint errors
    session.execute(text("TRUNCATE TABLE users, classrooms RESTART IDENTITY CASCADE"))

    yield session  # Run the test with this session

    session.close()
    transaction.rollback()
    connection.close()

@pytest.fixture
def create_unique_user(db_session):
    """Fixture to create a unique user in the database."""
    user_data = User(
        first_name="Test",
        last_name="User",
        email=f"testuser_{uuid.uuid4().hex}@example.com",
        hashed_password=pwd_context.hash("testpassword"),
        role="teacher"
    )
    db_session.add(user_data)
    db_session.commit()
    db_session.refresh(user_data)
    return user_data

@pytest.fixture
def unique_classroom_name():
    """Fixture to generate a unique classroom name."""
    return f"Class_{uuid.uuid4().hex[:8]}"
