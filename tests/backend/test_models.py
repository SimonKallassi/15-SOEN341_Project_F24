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

def test_add_student_to_classroom(db_session, create_unique_user, unique_classroom_name):
    """Test adding a student to a Classroom."""
    # Create a classroom with a unique name
    classroom = Classroom(
        classroom_id="class456",
        classroom_name=unique_classroom_name,
        teacher_id=create_unique_user.id
    )
    db_session.add(classroom)
    db_session.commit()

    # Add a student to the classroom
    student = User(
        first_name="Jane",
        last_name="Smith",
        email="jane.smith@example.com",
        hashed_password="hashed_password",
        role="student"
    )
    db_session.add(student)
    db_session.commit()
    db_session.refresh(student)

    # Create a ClassroomMember link between the student and the classroom
    member = ClassroomMember(
        classroom_id=classroom.classroom_id,
        user_id=student.id,
        role="student"
    )
    db_session.add(member)
    db_session.commit()
    db_session.refresh(member)
    
    # Check relationships
    assert member.user_id == student.id
    assert member.classroom_id == classroom.classroom_id
    assert member.role == "student"


    
def test_unique_classroom_name_constraint(db_session, create_unique_user):
    """Test that a unique constraint on classroom_name is enforced."""
    classroom1 = Classroom(
        classroom_id="unique_class1",
        classroom_name="Math 101",
        teacher_id=create_unique_user.id
    )
    db_session.add(classroom1)
    db_session.commit()
    
    classroom2 = Classroom(
        classroom_id="unique_class2",
        classroom_name="Math 101",  # Duplicate name should trigger an IntegrityError
        teacher_id=create_unique_user.id
    )
    db_session.add(classroom2)
    with pytest.raises(IntegrityError):
        db_session.commit()  # This should raise an IntegrityError