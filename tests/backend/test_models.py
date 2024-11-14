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

def test_create_classroom_with_teacher(db_session, create_unique_user):
    """Test that a Classroom can be created and associated with a teacher."""
    classroom = Classroom(
        classroom_id="class123",
        classroom_name="Science 101",
        teacher_id=create_unique_user.id  # Associate with a teacher
    )
    db_session.add(classroom)
    db_session.commit()
    db_session.refresh(classroom)
    assert classroom.classroom_id == "class123"
    assert classroom.teacher_id == create_unique_user.id
