import ReactCountryFlag from "react-country-flag";
import countryCodes from "../utils/countryCodes";

function TeamInfoCard({ team }) {

    if (!team) return null;

    return (

        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-8">

            <div className="flex items-center gap-6">

                <ReactCountryFlag

                    countryCode={countryCodes[team.team] || "UN"}

                    svg

                    style={{

                        width: "4em",

                        height: "4em"

                    }}

                />

                <div>

                    <h1 className="text-5xl font-black text-white">

                        {team.team}

                    </h1>

                    <p className="text-blue-100 text-xl mt-2">

                        FIFA Team Analytics Dashboard

                    </p>

                </div>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">

                <div className="bg-white/10 rounded-xl p-5 text-center">

                    <h2 className="text-lg text-gray-200">

                        🏟 Matches

                    </h2>

                    <p className="text-4xl font-bold text-white mt-3">

                        {team.matches}

                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-5 text-center">

                    <h2 className="text-lg text-gray-200">

                        📈 Win Rate

                    </h2>

                    <p className="text-4xl font-bold text-green-300 mt-3">

                        {(team.win_rate * 100).toFixed(1)}%

                    </p>

                </div>

                <div className="bg-white/10 rounded-xl p-5 text-center">

                    <h2 className="text-lg text-gray-200">

                        ⚽ Avg Goals

                    </h2>

                    <p className="text-4xl font-bold text-yellow-300 mt-3">

                        {team.avg_goals}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default TeamInfoCard;