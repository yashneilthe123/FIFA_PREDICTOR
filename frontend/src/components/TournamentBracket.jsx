function TournamentBracket({ rounds }) {

    if (!rounds || rounds.length === 0) return null;

    return (

        <div className="mt-12 overflow-x-auto">

            <h2 className="text-4xl text-white font-bold text-center mb-10">

                🏆 Tournament Bracket

            </h2>

            <div className="flex gap-16">

                {

                    rounds.map((round, roundIndex) => (

                        <div key={roundIndex}>

                            <h3 className="text-2xl text-blue-400 font-bold text-center mb-6">

                                Round {roundIndex + 1}

                            </h3>

                            {

                                round.map((match, index) => (

                                    <div

                                        key={index}

                                        className="bg-slate-800 rounded-xl p-6 mb-8 shadow-lg w-72"

                                    >

                                        <p className="text-white">

                                            ⚽ {match.team1}

                                        </p>

                                        <p className="text-white mt-2">

                                            ⚽ {match.team2}

                                        </p>

                                        <hr className="my-4 border-slate-600"/>

                                        <p className="text-green-400 font-bold">

                                            🏆 Winner

                                        </p>

                                        <p className="text-2xl font-bold text-white">

                                            {match.winner}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default TournamentBracket;