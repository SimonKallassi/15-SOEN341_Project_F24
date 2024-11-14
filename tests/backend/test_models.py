import pytest
from sqlalchemy.exc import IntegrityError
from app.models import User, Classroom, ClassroomMember



def test_create_user(db_session):
    """Test that a User can be created successfully."""
    user = User(
        first_name="John",
        last_name="Doe",
        email="john.doe@example.com",
        hashed_password="hashed_password",
        role="teacher"
    )
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)
    assert user.id is not None
    assert user.email == "john.doe@example.com"

