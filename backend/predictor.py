import pandas as pd
import joblib

# Load model
model = joblib.load("models/outcome_model.pkl")

# Load team statistics
stats = pd.read_csv("../dataset/team_stats.csv")


def get_team_stats(team):

    row = stats[stats["team"] == team]

    if row.empty:
        raise ValueError(f"{team} not found")

    row = row.iloc[0]

    return {
        "matches": float(row["matches"]),
        "win_rate": float(row["win_rate"]),
        "avg_goals": float(row["avg_goals"])
    }


def predict_match(team1, team2):

    t1 = get_team_stats(team1)
    t2 = get_team_stats(team2)

    X = pd.DataFrame([{

        "home_matches": t1["matches"],
        "away_matches": t2["matches"],

        "home_win_rate": t1["win_rate"],
        "away_win_rate": t2["win_rate"],

        "home_avg_goals": t1["avg_goals"],
        "away_avg_goals": t2["avg_goals"]

    }])

    probs = model.predict_proba(X)[0]

    winner = max(
        [
            (team1, probs[2]),
            ("Draw", probs[1]),
            (team2, probs[0])
        ],
        key=lambda x: x[1]
    )[0]

    # AI Explanation
    reasons = []

    if t1["matches"] > t2["matches"]:
        reasons.append(f"{team1} has played more international matches.")
    else:
        reasons.append(f"{team2} has played more international matches.")

    if t1["win_rate"] > t2["win_rate"]:
        reasons.append(f"{team1} has a better win rate.")
    else:
        reasons.append(f"{team2} has a better win rate.")

    if t1["avg_goals"] > t2["avg_goals"]:
        reasons.append(f"{team1} scores more goals per match.")
    else:
        reasons.append(f"{team2} scores more goals per match.")

    return {

        "team1": team1,
        "team2": team2,

        "team1_win": round(float(probs[2]) * 100, 2),
        "draw": round(float(probs[1]) * 100, 2),
        "team2_win": round(float(probs[0]) * 100, 2),

        "winner": winner,

        "reasons": reasons

    }