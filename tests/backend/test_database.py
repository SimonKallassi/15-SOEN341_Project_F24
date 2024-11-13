

# test_database.py

import pytest
from sqlalchemy import text  # Import text for raw SQL queries
from app.database import get_db, SessionLocal
from sqlalchemy.exc import OperationalError

@pytest.fixture(scope="module")
def db_session():
    # Initialize a session to test get_db
    db = SessionLocal()
    yield db
    db.close()

def test_database_connection(db_session):
    # Check that we can execute a simple query on the session to ensure it's active
    try:
        result = db_session.execute(text("SELECT 1"))  # Wrap in text()
        assert result.scalar() == 1
    except OperationalError:
        pytest.fail("Database connection failed")

def test_get_db():
    # Test get_db function to ensure it yields a session and closes it after use
    try:
        db = next(get_db())
        result = db.execute(text("SELECT 1"))  # Wrap in text()
        assert result.scalar() == 1
    finally:
        db.close()
