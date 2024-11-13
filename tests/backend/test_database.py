

# test_database.py

import pytest
from sqlalchemy import text  # Import text for raw SQL queries
from app.database import get_db, SessionLocal
from sqlalchemy.exc import OperationalError

