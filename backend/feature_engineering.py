# feature_engineering.py

import pandas as pd

stats = pd.read_csv(
    "../dataset/team_stats.csv"
)

elo = pd.read_csv(
    "../dataset/elo_ratings.csv"
)

df = pd.read_csv(
    "../dataset/results.csv"
)

rows = []

for _, match in df.iterrows():

    home = match['home_team']
    away = match['away_team']

    try:

        h_stats = stats[
            stats['team']==home
        ].iloc[0]

        a_stats = stats[
            stats['team']==away
        ].iloc[0]

        h_elo = elo[
            elo['team']==home
        ].iloc[0]

        a_elo = elo[
            elo['team']==away
        ].iloc[0]

    except:

        continue

    result = (
        2
        if match['home_score']
        >
        match['away_score']

        else 1

        if match['home_score']
        ==
        match['away_score']

        else 0
    )

    rows.append({

        "home_elo":
            h_elo['elo'],

        "away_elo":
            a_elo['elo'],

        "home_win_rate":
            h_stats['win_rate'],

        "away_win_rate":
            a_stats['win_rate'],

        "home_avg_goals":
            h_stats['avg_goals'],

        "away_avg_goals":
            a_stats['avg_goals'],

        "result":
            result

    })

features = pd.DataFrame(rows)

features.to_csv(
    "../dataset/features.csv",
    index=False
)

print(features.shape)