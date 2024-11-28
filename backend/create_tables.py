from database import engine, Base
from models import User, Classroom, ClassroomMember, TeamMember

# This will create the tables defined in models if they don’t exist
Base.metadata.create_all(bind=engine)
print("Tables created successfully.")