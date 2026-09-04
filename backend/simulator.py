from predictor import predict_match

def simulate_tournament(teams):

    teams = teams.copy()

    rounds = []

    while len(teams) > 1:

        winners = []

        current_round = []

        for i in range(0, len(teams), 2):

            team1 = teams[i]
            team2 = teams[i+1]

            result = predict_match(team1, team2)

            winners.append(result["winner"])

            current_round.append(result)

        rounds.append(current_round)

        teams = winners

    return {

        "champion": teams[0],

        "rounds": rounds

    }