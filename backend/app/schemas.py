# schemas.py
from pydantic import BaseModel

class ClassroomCreate(BaseModel):
    classroom_name: str
