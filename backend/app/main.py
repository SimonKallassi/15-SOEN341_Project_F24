from fastapi import FastAPI, HTTPException, Depends, Body
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from .database import get_db
from .models import User, Classroom , ClassroomMember
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from .schemas import ClassroomCreate
import uuid
import logging

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def generate_classroom_id():
    return str(uuid.uuid4())[:8]


class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    password: str
    role: str


class LoginData(BaseModel):
    email: str
    password: str


class ClassroomCreate(BaseModel):
    classroom_name: str
    user_email: EmailStr

class JoinClassRequest(BaseModel):
    class_code: str
    user_email: str

@app.post("/signup")
async def signup(user: UserCreate, db: Session = Depends(get_db)):
    logging.info("Signup endpoint loaded")

    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = pwd_context.hash(user.password)

    db_user = User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        hashed_password=hashed_password,
        role=user.role
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return {"message": "User created successfully", "user_id": db_user.id}


@app.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    logging.info("Login endpoint loaded")
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful", "user_id": user.id, "role": user.role}

@app.post("/create_classroom")
async def create_classroom(request: ClassroomCreate, db: Session = Depends(get_db)):
    logging.info("Received classroom creation request")

    # Locate the teacher by email
    teacher = db.query(User).filter(User.email == request.user_email, User.role == "teacher").first()
    if not teacher:
        raise HTTPException(status_code=404, detail="Teacher not found")

    # Generate a unique classroom ID
    classroom_id = generate_classroom_id()

    # Create the classroom entry in the database
    new_classroom = Classroom(
        classroom_id=classroom_id,
        classroom_name=request.classroom_name,
        teacher_id=teacher.id,
    )

    db.add(new_classroom)
    db.commit()
    db.refresh(new_classroom)

    # Add the teacher as a member of the classroom
    teacher_member = ClassroomMember(
        classroom_id=classroom_id,
        user_id=teacher.id,
        role="teacher"
    )
    db.add(teacher_member)
    db.commit()

    return {"message": "Classroom created successfully", "classroom_id": classroom_id}



@app.get("/classrooms")
async def get_classrooms(user_email: str, db: Session = Depends(get_db)):
    # Locate the teacher by email
    teacher = db.query(User).filter(User.email == user_email, User.role == "teacher").first()
    if not teacher:
        raise HTTPException(status_code=403, detail="Access denied. Only teachers can view classrooms.")

    # Retrieve classrooms only created by this teacher
    classrooms = db.query(Classroom).filter(Classroom.teacher_id == teacher.id).all()
    return classrooms


@app.post("/join_class")
async def join_class(request: JoinClassRequest = Body(...), db: Session = Depends(get_db)):
    class_code = request.class_code
    user_email = request.user_email
    logging.info(f"Received join request with class_code: {class_code} and user_email: {user_email}")

    # Locate the user by email
    user = db.query(User).filter(User.email == user_email).first()
    if not user:
        logging.error("User not found")
        raise HTTPException(status_code=404, detail="User not found")

    # Locate the classroom by code
    classroom = db.query(Classroom).filter(Classroom.classroom_id == class_code).first()
    if not classroom:
        logging.error("Classroom not found")
        raise HTTPException(status_code=404, detail="Classroom not found")

    # Verify membership
    existing_membership = (
        db.query(ClassroomMember)
        .filter(ClassroomMember.classroom_id == classroom.classroom_id, ClassroomMember.user_id == user.id)
        .first()
    )
    if existing_membership:
        logging.info("User is already a member of this class")
        raise HTTPException(status_code=400, detail="User is already a member of this class")

    # Add the user to the classroom
    membership = ClassroomMember(classroom_id=classroom.classroom_id, user_id=user.id, role="student")
    db.add(membership)
    db.commit()

    logging.info("User successfully joined the class")
    return {"message": "Successfully joined the class", "classroom_name": classroom.classroom_name}


@app.get("/classroom_members/{classroom_id}")
async def get_classroom_members(classroom_id: str, db: Session = Depends(get_db)):
    classroom = db.query(Classroom).filter(Classroom.classroom_id == classroom_id).first()
    if not classroom:
        raise HTTPException(status_code=404, detail="Classroom not found")

    members = db.query(User).join(ClassroomMember).filter(ClassroomMember.classroom_id == classroom_id).all()
    member_list = [{"id": member.id, "name": f"{member.first_name} {member.last_name}", "role": member.role} for member
                   in members]

    return {"classroom_name": classroom.classroom_name, "members": member_list}

@app.delete("/delete_classroom/{classroom_id}")
async def delete_classroom(classroom_id: str, db: Session = Depends(get_db)):
    # Find the classroom by ID
    classroom = db.query(Classroom).filter(Classroom.classroom_id == classroom_id).first()
    if not classroom:
        raise HTTPException(status_code=404, detail="Classroom not found")

    # Delete associated members first if required by your database logic
    db.query(ClassroomMember).filter(ClassroomMember.classroom_id == classroom_id).delete()

    # Delete the classroom itself
    db.delete(classroom)
    db.commit()

    return {"message": "Classroom deleted successfully"}

@app.get("/student_classrooms")
async def get_student_classrooms(user_email: str, db: Session = Depends(get_db)):
    # Locate the student by email
    student = db.query(User).filter(User.email == user_email, User.role == "student").first()
    if not student:
        raise HTTPException(status_code=403, detail="Access denied. Only students can view joined classrooms.")

    # Retrieve classrooms where this student is a member
    joined_classrooms = (
        db.query(Classroom)
        .join(ClassroomMember, Classroom.classroom_id == ClassroomMember.classroom_id)
        .filter(ClassroomMember.user_id == student.id)
        .all()
    )

    return {"classes": [{"classroom_id": c.classroom_id, "classroom_name": c.classroom_name} for c in joined_classrooms]}
