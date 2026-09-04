import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

function PredictionHistory() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        loadHistory();

    }, []);

    function loadHistory() {

        const saved = JSON.parse(

            localStorage.getItem("predictionHistory")

        ) || [];

        setHistory(saved);

    }

    function clearHistory() {

        localStorage.removeItem("predictionHistory");

        setHistory([]);

    }

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-black text-center">

                        📜 Prediction History

                    </h1>

                    <p className="text-center text-gray-400 mt-4">

                        View all previous AI match predictions.

                    </p>

                    <div className="flex justify-center mt-8">

                        <button

                            onClick={clearHistory}

                            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"

                        >

                            🗑 Clear History

                        </button>

                    </div>

                    {

                        history.length === 0 ?

                        (

                            <div className="text-center mt-20">

                                <h2 className="text-3xl">

                                    No Predictions Yet

                                </h2>

                                <p className="text-gray-500 mt-4">

                                    Your match predictions will appear here.

                                </p>

                            </div>

                        )

                        :

                        (

                            <div className="grid gap-8 mt-12">

                                {

                                    history.map((item,index)=>(

                                        <div

                                            key={index}

                                            className="bg-slate-800 rounded-2xl p-8 shadow-lg"

                                        >

                                            <div className="flex justify-between items-center">

                                                <h2 className="text-3xl font-bold">

                                                    {item.team1} ⚽ {item.team2}

                                                </h2>

                                                <span className="bg-green-600 px-5 py-2 rounded-xl font-bold">

                                                    🏆 {item.winner}

                                                </span>

                                            </div>

                                            <div className="grid md:grid-cols-3 gap-6 mt-8">

                                                <div className="bg-slate-700 rounded-xl p-5 text-center">

                                                    <h3 className="text-lg">

                                                        {item.team1}

                                                    </h3>

                                                    <p className="text-4xl font-bold text-blue-400 mt-3">

                                                        {item.team1_win}%

                                                    </p>

                                                </div>

                                                <div className="bg-slate-700 rounded-xl p-5 text-center">

                                                    <h3 className="text-lg">

                                                        Draw

                                                    </h3>

                                                    <p className="text-4xl font-bold text-yellow-400 mt-3">

                                                        {item.draw}%

                                                    </p>

                                                </div>

                                                <div className="bg-slate-700 rounded-xl p-5 text-center">

                                                    <h3 className="text-lg">

                                                        {item.team2}

                                                    </h3>

                                                    <p className="text-4xl font-bold text-red-400 mt-3">

                                                        {item.team2_win}%

                                                    </p>

                                                </div>

                                            </div>

                                            {

                                                item.reasons &&

                                                <div className="mt-8">

                                                    <h3 className="text-2xl font-bold text-blue-400">

                                                        🤖 AI Explanation

                                                    </h3>

                                                    <ul className="list-disc list-inside mt-4 space-y-2">

                                                        {

                                                            item.reasons.map((reason,i)=>(

                                                                <li key={i}>

                                                                    {reason}

                                                                </li>

                                                            ))

                                                        }

                                                    </ul>

                                                </div>

                                            }

                                            {

                                                item.date &&

                                                <div className="mt-8 text-right text-gray-400">

                                                    {item.date}

                                                </div>

                                            }

                                        </div>

                                    ))

                                }

                            </div>

                        )

                    }

                </div>

            </div>

        </>

    );

}

export default PredictionHistory;