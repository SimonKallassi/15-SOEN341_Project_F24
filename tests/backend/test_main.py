import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.database import SessionLocal, Base, engine
from app.models import User
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext