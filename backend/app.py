from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import pandas as pd

from predictor import predict_match
from simulator import simulate_tournament

# ============================================
# FastAPI App
# ============================================

app = FastAPI(
    title="FIFA AI Predictor API",
    version="1.0"
)

# ============================================
# Enable CORS
# ============================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# Load Dataset
# ============================================

stats = pd.read_csv("../dataset/team_stats.csv")

# ============================================
# Prediction History
# ============================================

prediction_history = []

# ============================================
# Request Models
# ============================================

class MatchRequest(BaseModel):
    team1: str
    team2: str


class TournamentRequest(BaseModel):
    teams: list[str]

# ============================================
# Home
# ============================================

@app.get("/")
def home():

    return {

        "message": "Welcome to FIFA AI Predictor API"

    }

# ============================================
# Get Teams
# ============================================

@app.get("/teams")
def get_teams():

    return sorted(stats["team"].tolist())

# ============================================
# Get Single Team
# ============================================

@app.get("/team/{team}")
def get_team(team: str):

    row = stats[stats["team"] == team]

    if row.empty:

        return {

            "error": "Team not found"

        }

    row = row.iloc[0]

    return {

        "team": row["team"],

        "matches": int(row["matches"]),

        "win_rate": float(row["win_rate"]),

        "avg_goals": float(row["avg_goals"])

    }

# ============================================
# Rankings
# ============================================

@app.get("/rankings")
def get_rankings():

    rankings = stats.sort_values(

        by=["win_rate", "avg_goals"],

        ascending=False

    )

    return rankings.to_dict(orient="records")

# ============================================
# Predict Match
# ============================================

@app.post("/predict_match")
def predict(request: MatchRequest):

    result = predict_match(

        request.team1,

        request.team2

    )

    prediction_history.append(result)

    return result

# ============================================
# Prediction History
# ============================================

@app.get("/history")
def history():

    return prediction_history[::-1]

# ============================================
# Tournament Simulator
# ============================================

@app.post("/simulate_tournament")
def simulate(request: TournamentRequest):

    return simulate_tournament(

        request.teams

    )