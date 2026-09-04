

import pandas as pd

df = pd.read_csv("../dataset/results.csv")

teams = pd.unique(
    pd.concat([
        df['home_team'],
        df['away_team']
    ])
)

stats = []

for team in teams:

    home = df[df['home_team']==team]
    away = df[df['away_team']==team]

    matches = len(home)+len(away)

    wins = len(
        home[
            home['home_score'] >
            home['away_score']
        ]
    )

    wins += len(
        away[
            away['away_score'] >
            away['home_score']
        ]
    )

    goals_scored = (
        home['home_score'].sum()
        +
        away['away_score'].sum()
    )

    goals_conceded = (
        home['away_score'].sum()
        +
        away['home_score'].sum()
    )

    stats.append({

        "team":team,

        "matches":matches,

        "wins":wins,

        "win_rate":
            wins/max(matches,1),

        "avg_goals":
            goals_scored/max(matches,1),

        "avg_conceded":
            goals_conceded/max(matches,1)

    })

team_stats = pd.DataFrame(stats)

team_stats.to_csv(
    "../dataset/team_stats.csv",
    index=False
)

print("Saved")