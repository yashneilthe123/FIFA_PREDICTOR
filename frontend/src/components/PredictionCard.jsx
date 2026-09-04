import ReactCountryFlag from "react-country-flag";
import AIConfidence from "./AIConfidence";
import countryCodes from "../utils/countryCodes";

function PredictionCard({ result }) {

    if (!result) return null;

    const confidence = Math.max(
        result.team1_win,
        result.team2_win,
        result.draw
    );

    return (

        <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8 mt-12 w-[700px] mx-auto">

            <h2 className="text-center text-4xl font-bold text-white mb-8">

                🏆 Match Prediction

            </h2>

            {/* Winner */}

            <div className="flex justify-center items-center gap-5">

                <ReactCountryFlag

                    countryCode={countryCodes[result.winner] || "UN"}

                    svg

                    style={{
                        width: "3em",
                        height: "3em"
                    }}

                />

                <h1 className="text-6xl font-black text-green-400">

                    {result.winner}

                </h1>

            </div>

            {/* Team 1 */}

            <div className="mt-12">

                <div className="flex justify-between text-white mb-2">

                    <span className="text-lg">

                        {result.team1}

                    </span>

                    <span>

                        {result.team1_win}%

                    </span>

                </div>

                <div className="bg-gray-700 rounded-full h-5">

                    <div

                        className="bg-blue-500 h-5 rounded-full transition-all duration-700"

                        style={{
                            width: `${result.team1_win}%`
                        }}

                    />

                </div>

            </div>

            {/* Draw */}

            <div className="mt-8">

                <div className="flex justify-between text-white mb-2">

                    <span className="text-lg">

                        Draw

                    </span>

                    <span>

                        {result.draw}%

                    </span>

                </div>

                <div className="bg-gray-700 rounded-full h-5">

                    <div

                        className="bg-yellow-400 h-5 rounded-full transition-all duration-700"

                        style={{
                            width: `${result.draw}%`
                        }}

                    />

                </div>

            </div>

            {/* Team 2 */}

            <div className="mt-8">

                <div className="flex justify-between text-white mb-2">

                    <span className="text-lg">

                        {result.team2}

                    </span>

                    <span>

                        {result.team2_win}%

                    </span>

                </div>

                <div className="bg-gray-700 rounded-full h-5">

                    <div

                        className="bg-red-500 h-5 rounded-full transition-all duration-700"

                        style={{
                            width: `${result.team2_win}%`
                        }}

                    />

                </div>

            </div>

            {/* AI Explanation */}

            <div className="mt-12 border-t border-slate-600 pt-8">

                <h2 className="text-3xl font-bold text-blue-400 mb-6">

                    🤖 AI Explanation

                </h2>

                {

                    result.reasons && result.reasons.length > 0 ? (

                        result.reasons.map((reason, index) => (

                            <div

                                key={index}

                                className="flex items-center gap-3 mb-3"

                            >

                                <span className="text-green-400 text-xl">

                                    ✔

                                </span>

                                <span className="text-gray-300 text-lg">

                                    {reason}

                                </span>

                            </div>

                        ))

                    ) : (

                        <p className="text-gray-400">

                            No explanation available.

                        </p>

                    )

                }

            </div>

            {/* AI Confidence */}

            <AIConfidence probability={confidence} />

        </div>

    );

}

export default PredictionCard;