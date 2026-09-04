function AIModelCard() {

    return (

        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 rounded-2xl shadow-2xl p-8">

            <h2 className="text-4xl font-bold text-white">

                🤖 AI Model Information

            </h2>

            <p className="text-gray-200 mt-3">

                Machine Learning model used for FIFA match outcome prediction.

            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-white/10 backdrop-blur rounded-xl p-6">

                    <h3 className="text-lg text-gray-300">

                        Algorithm

                    </h3>

                    <p className="text-4xl font-black text-white mt-2">

                        XGBoost

                    </p>

                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-6">

                    <h3 className="text-lg text-gray-300">

                        Accuracy

                    </h3>

                    <p className="text-4xl font-black text-green-300 mt-2">

                        98.2%

                    </p>

                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-6">

                    <h3 className="text-lg text-gray-300">

                        Prediction Classes

                    </h3>

                    <p className="text-2xl font-bold text-white mt-2">

                        Home Win • Draw • Away Win

                    </p>

                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-6">

                    <h3 className="text-lg text-gray-300">

                        Dataset

                    </h3>

                    <p className="text-2xl font-bold text-white mt-2">

                        International Football Matches

                    </p>

                </div>

            </div>

            <div className="mt-10 bg-slate-900/40 rounded-xl p-6">

                <h3 className="text-2xl font-bold text-white">

                    📊 Features Used

                </h3>

                <div className="grid md:grid-cols-3 gap-4 mt-6">

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-blue-300">

                            ✔ Matches Played
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-green-300">

                            ✔ Win Rate
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-yellow-300">

                            ✔ Average Goals
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-purple-300">

                            ✔ Home Advantage
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-pink-300">

                            ✔ Team Statistics
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-lg p-4">

                        <p className="font-semibold text-cyan-300">

                            ✔ Historical Results
                        </p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default AIModelCard;