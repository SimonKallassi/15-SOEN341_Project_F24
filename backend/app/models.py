from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, nullable=False)


class Classroom(Base):
    __tablename__ = 'classrooms'

    classroom_id = Column(String, primary_key=True, index=True)
    classroom_name = Column(String, unique=True, index=True)
    teacher_id = Column(Integer, ForeignKey('users.id'))  # Links to the Users table
    members = relationship("ClassroomMember", back_populates="classroom")


class ClassroomMember(Base):
    __tablename__ = 'classroom_members'

    id = Column(Integer, primary_key=True, index=True)
    classroom_id = Column(String, ForeignKey('classrooms.classroom_id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    role = Column(String)  # e.g., "student" or "teacher"
    classroom = relationship("Classroom", back_populates="members")
    user = relationship("User")