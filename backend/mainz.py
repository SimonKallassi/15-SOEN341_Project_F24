from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TeamCreateRequest(BaseModel):
    classroom_id: str
    team_members: list[int]

@app.post("/create_team")
async def create_team(request: TeamCreateRequest):
    return {"message": "Test route working"}
