import ReactCountryFlag from "react-country-flag";
import countryCodes from "../utils/countryCodes";

function TeamCard({ team }) {

    if (!team) return null;

    return (

        <div className="bg-slate-800 rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300 border border-slate-700">

            <div className="flex items-center gap-5">

                <ReactCountryFlag
                    countryCode={countryCodes[team.team] || "UN"}
                    svg
                    style={{
                        width: "3em",
                        height: "3em"
                    }}
                />

                <div>

                    <h2 className="text-3xl font-bold text-white">

                        {team.team}

                    </h2>

                    <p className="text-gray-400">

                        FIFA National Team

                    </p>

                </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-slate-700 rounded-xl p-4 text-center">

                    <p className="text-gray-300">

                        🏟 Matches

                    </p>

                    <h3 className="text-3xl font-bold text-blue-400 mt-2">

                        {team.matches}

                    </h3>

                </div>

                <div className="bg-slate-700 rounded-xl p-4 text-center">

                    <p className="text-gray-300">

                        📈 Win Rate

                    </p>

                    <h3 className="text-3xl font-bold text-green-400 mt-2">

                        {(team.win_rate * 100).toFixed(1)}%

                    </h3>

                </div>

                <div className="bg-slate-700 rounded-xl p-4 text-center">

                    <p className="text-gray-300">

                        ⚽ Avg Goals

                    </p>

                    <h3 className="text-3xl font-bold text-yellow-400 mt-2">

                        {team.avg_goals}

                    </h3>

                </div>

            </div>

        </div>

    );

}

export default TeamCard;