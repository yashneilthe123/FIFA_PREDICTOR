import ReactCountryFlag from "react-country-flag";
import countryCodes from "../utils/countryCodes";

function TournamentTeamCard({ team, removeTeam }) {

    return (

        <div className="bg-slate-800 rounded-xl shadow-xl p-5 mb-4 hover:bg-slate-700 transition duration-300">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                    <ReactCountryFlag

                        countryCode={countryCodes[team] || "UN"}

                        svg

                        style={{
                            width: "2.2em",
                            height: "2.2em"
                        }}

                    />

                    <h2 className="text-2xl font-bold text-white">

                        {team}

                    </h2>

                </div>

                <button

                    onClick={() => removeTeam(team)}

                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition duration-300"

                >

                    ❌ Remove

                </button>

            </div>

        </div>

    );

}

export default TournamentTeamCard;