# elo.py

import pandas as pd

df = pd.read_csv(
    "../dataset/results.csv"
)

ratings = {}

teams = pd.unique(
    pd.concat([
        df['home_team'],
        df['away_team']
    ])
)

for team in teams:

    ratings[team] = 1500

K = 20

for _, row in df.iterrows():

    home = row['home_team']
    away = row['away_team']

    Rh = ratings[home]
    Ra = ratings[away]

    expected_home = 1 / (
        1 + 10**((Ra-Rh)/400)
    )

    expected_away = 1 - expected_home

    if row['home_score'] > row['away_score']:

        actual_home = 1
        actual_away = 0

    elif row['home_score'] < row['away_score']:

        actual_home = 0
        actual_away = 1

    else:

        actual_home = 0.5
        actual_away = 0.5

    ratings[home] = (
        Rh +
        K*(actual_home-expected_home)
    )

    ratings[away] = (
        Ra +
        K*(actual_away-expected_away)
    )

elo_df = pd.DataFrame(

    ratings.items(),

    columns=[
        "team",
        "elo"
    ]
)

elo_df.to_csv(
    "../dataset/elo_ratings.csv",
    index=False
)

print("Saved")