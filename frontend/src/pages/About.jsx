import Navbar from "../components/Navbar";

function About() {

    const technologies = [
        "React",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Recharts",
        "Axios"
    ];

    return (

        <>
            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-black text-center">

                        ℹ About FIFA AI Predictor

                    </h1>

                    <p className="text-center text-gray-400 mt-6 text-xl">

                        An Artificial Intelligence powered football prediction
                        platform built using Machine Learning and modern
                        full-stack web technologies.

                    </p>

                    <div className="grid lg:grid-cols-2 gap-10 mt-14">

                        <div className="bg-slate-800 rounded-2xl p-8">

                            <h2 className="text-3xl font-bold text-blue-400">

                                🎯 Project Objective

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-gray-300">

                                FIFA AI Predictor predicts football match outcomes
                                using Machine Learning. It analyzes team statistics,
                                win rates, historical performances and goal scoring
                                ability to estimate the probability of Home Win,
                                Draw and Away Win.

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8">

                            <h2 className="text-3xl font-bold text-green-400">

                                🚀 Features

                            </h2>

                            <ul className="mt-6 space-y-3 text-lg">

                                <li>✅ AI Match Prediction</li>
                                <li>✅ Tournament Simulator</li>
                                <li>✅ Team Analytics</li>
                                <li>✅ Team Comparison</li>
                                <li>✅ FIFA Rankings</li>
                                <li>✅ Prediction History</li>
                                <li>✅ Interactive Dashboard</li>

                            </ul>

                        </div>

                    </div>

                    <div className="bg-slate-800 rounded-2xl p-8 mt-12">

                        <h2 className="text-3xl font-bold text-yellow-400">

                            🛠 Technology Stack

                        </h2>

                        <div className="grid md:grid-cols-5 gap-4 mt-8">

                            {

                                technologies.map((tech,index)=>(

                                    <div

                                        key={index}

                                        className="bg-slate-700 rounded-xl p-5 text-center font-bold hover:bg-blue-600 transition"

                                    >

                                        {tech}

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2 className="text-5xl">

                                🤖

                            </h2>

                            <h3 className="text-2xl font-bold mt-4">

                                AI Model

                            </h3>

                            <p className="mt-3 text-gray-400">

                                XGBoost / Random Forest

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2 className="text-5xl">

                                ⚽

                            </h2>

                            <h3 className="text-2xl font-bold mt-4">

                                Matches

                            </h3>

                            <p className="mt-3 text-gray-400">

                                International Football Dataset

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-8 text-center">

                            <h2 className="text-5xl">

                                📈

                            </h2>

                            <h3 className="text-2xl font-bold mt-4">

                                Accuracy

                            </h3>

                            <p className="mt-3 text-gray-400">

                                ~98%

                            </p>

                        </div>

                    </div>

                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-10 mt-12 text-center">

                        <h2 className="text-4xl font-bold">

                            🎓 Academic Project

                        </h2>

                        <p className="text-xl mt-6">

                            Developed as a Full-Stack Machine Learning Project
                            demonstrating React, FastAPI, REST APIs,
                            Machine Learning and Data Visualization.

                        </p>

                    </div>

                </div>

            </div>

        </>

    );

}

export default About;