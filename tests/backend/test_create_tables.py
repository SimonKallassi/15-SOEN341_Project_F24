import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../backend')))


# test_create_tables.py

import pytest
from sqlalchemy import inspect
from app.database import engine, Base
from app.models import User, Classroom, ClassroomMember

@pytest.fixture(scope="module")
def connection():
    # Set up a connection to the database
    connection = engine.connect()
    yield connection
    connection.close()

@pytest.fixture(scope="module")
def setup_database(connection):
    # Ensures that the tables are created before each test
    Base.metadata.create_all(bind=engine)
    yield
    # Teardown after tests
    Base.metadata.drop_all(bind=engine)

def test_tables_created(setup_database):
    inspector = inspect(engine)
    # Assert tables are created
    assert 'users' in inspector.get_table_names()
    assert 'classrooms' in inspector.get_table_names()
    assert 'classroom_members' in inspector.get_table_names()

def test_idempotency(setup_database):
    # Run the table creation script multiple times
    Base.metadata.create_all(bind=engine)  # Should not throw an error
    inspector = inspect(engine)
    # Re-check table presence after re-running the creation
    assert 'users' in inspector.get_table_names()
    assert 'classrooms' in inspector.get_table_names()
    assert 'classroom_members' in inspector.get_table_names()
