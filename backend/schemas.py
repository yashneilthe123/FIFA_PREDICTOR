from pydantic import BaseModel

class MatchRequest(BaseModel):
    team1: str
    team2: str

class TournamentRequest(BaseModel):
    teams: list[str]