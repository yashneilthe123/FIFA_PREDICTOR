# ⚽ FIFA AI Predictor

A full-stack machine learning app that predicts international football match outcomes and simulates knockout tournaments. It's trained on **49,000+ international matches from 1872 onward**, with an XGBoost model served through a FastAPI backend and a React dashboard.

<!-- Add a screenshot or GIF of the dashboard here -->
<!-- ![Dashboard](docs/dashboard.png) -->

**Live demo:** _coming soon_

---

## Features

- **Match predictor:** pick two national teams and get win / draw / loss probabilities with a plain-language explanation of the prediction
- **Tournament simulator:** enter a bracket of teams and the model plays every round through to a champion
- **Team analytics:** matches played, win rate, goals scored and conceded for 330+ national teams
- **Rankings and comparisons:** sort teams by win rate and scoring, and compare two teams side by side
- **Prediction history:** a log of recent predictions
- **Dashboard:** interactive charts, dark/light theme, country flags

## How it works

```
results.csv (49k matches)
   │
   ├── build_team_stats.py  →  team_stats.csv   (win rate, avg goals, avg conceded per team)
   ├── elo.py               →  elo_ratings.csv  (Elo rating per team, K = 20)
   │
   └── features.csv  →  train.py  →  XGBoost classifier  →  models/outcome_model.pkl
                                                              │
                                     FastAPI (app.py)  ◄──────┘
                                          │
                                     React dashboard
```

**Model:** `XGBClassifier` (300 trees, max depth 6, learning rate 0.05), trained as a 3-class problem: home win / draw / away win.

**Features (per team):** matches played, win rate, average goals scored.

**Evaluation:** 80/20 train-test split. Test accuracy: **XX%** <!-- run `python train.py` and paste the printed accuracy here -->

## Tech stack

| Layer | Tools |
|---|---|
| ML / data | Python, pandas, scikit-learn, XGBoost, joblib |
| Backend | FastAPI, Pydantic, Uvicorn |
| Frontend | React 19, Vite, Tailwind CSS, Chart.js, Recharts, Framer Motion |

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/teams` | List all teams |
| GET | `/team/{team}` | Stats for one team |
| GET | `/rankings` | Teams ranked by win rate and goals |
| POST | `/predict` | Predict a match: `{ "team1": "Brazil", "team2": "Argentina" }` |
| POST | `/tournament` | Simulate a knockout bracket: `{ "teams": [...] }` |

Interactive API docs are available at `http://localhost:8000/docs` when the backend is running.

## Run locally

**Backend**
```bash
cd backend
pip install fastapi uvicorn pandas scikit-learn xgboost joblib
uvicorn app:app --reload
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and talks to the API on port 8000.

**Retrain the model (optional)**
```bash
cd backend
python build_team_stats.py
python elo.py
python train.py
```

## Project structure

```
FIFA_PREDICTOR/
├── backend/
│   ├── app.py                 # FastAPI routes
│   ├── predictor.py           # loads model, returns probabilities + explanation
│   ├── simulator.py           # knockout tournament simulation
│   ├── train.py               # model training
│   ├── build_team_stats.py    # per-team aggregate stats
│   ├── elo.py                 # Elo rating computation
│   ├── feature_engineering.py
│   └── models/
├── frontend/                  # React + Vite dashboard
└── dataset/                   # match results and derived features
```

## Roadmap

- [ ] Add Elo ratings as model features (already computed in `elo_ratings.csv`)
- [ ] Use a time-based train/test split (train on older matches, test on recent ones) for a more realistic evaluation
- [ ] Add recent-form features (last 5–10 matches) and home advantage / neutral venue
- [ ] Deploy (frontend on Vercel, backend on Render)

## Dataset

International football results from 1872 to the present, from the public [Kaggle international football results dataset](https://www.kaggle.com/datasets/martj42/international-football-results-from-1872-to-2017).

---

Built by [Yashneil Purkayastha](https://www.linkedin.com/in/yashneil-purkayastha-87a593371)
