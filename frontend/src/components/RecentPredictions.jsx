import { useEffect, useState } from "react";

function RecentPredictions() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("predictionHistory")
        ) || [];

        setHistory(data.slice(0, 5));

    }, []);

    return (

        <div className="bg-slate-800 rounded-2xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-white mb-8">

                📜 Recent Predictions

            </h2>

            {

                history.length === 0 ?

                (

                    <p className="text-gray-400">

                        No predictions available.

                    </p>

                )

                :

                history.map((item, index) => (

                    <div

                        key={index}

                        className="border-b border-slate-700 py-4"

                    >

                        <div className="flex justify-between">

                            <h3 className="text-xl font-bold text-white">

                                {item.team1} vs {item.team2}

                            </h3>

                            <span className="text-green-400 font-bold">

                                🏆 {item.winner}

                            </span>

                        </div>

                        <p className="text-gray-400 mt-2">

                            {item.team1}: {item.team1_win}% |
                            Draw: {item.draw}% |
                            {item.team2}: {item.team2_win}%

                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default RecentPredictions;