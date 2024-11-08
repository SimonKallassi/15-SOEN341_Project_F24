from app.database import engine, Base
from app.models import User

# This will create the tables defined in models if they don’t exist
Base.metadata.create_all(bind=engine)
print("Tables created successfully.")