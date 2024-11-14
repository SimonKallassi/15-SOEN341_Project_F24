from app.database import get_db, Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import pytest
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text

# Setup an in-memory SQLite database for testing
TEST_DATABASE_URL = "sqlite:///:memory:"

# Initialize the test database engine and session factory
engine = create_engine(TEST_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="module")
def db_session():
    # Create all tables for an isolated in-memory database
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    yield db
    db.close()
    # Drop all tables after tests complete
    Base.metadata.drop_all(bind=engine)

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
