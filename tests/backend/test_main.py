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
