from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from database import Base


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

class TeamMember(Base):
    __tablename__ = "team_members"
    id = Column(Integer, primary_key=True, index=True)
    classroom_id = Column(String, ForeignKey("classrooms.classroom_id"))
    student_id = Column(Integer, ForeignKey("users.id"))
    team_id = Column(String, index=True)

class Evaluation(Base):
    __tablename__ = "evaluations"

    id = Column(Integer, primary_key=True, index=True)
    team_id = Column(String, nullable=False)
    classroom_id = Column(String, nullable=False)
    evaluator_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    evaluated_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    cooperation = Column(Integer, nullable=False)
    conceptual_contribution = Column(Integer, nullable=False)
    practical_contribution = Column(Integer, nullable=False)
    work_ethic = Column(Integer, nullable=False)
    comments = Column(Text, nullable=True)