import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TeamDropdown from "../components/TeamDropdown";
import PredictionCard from "../components/PredictionCard";
import AIConfidence from "../components/AIConfidence";
import AIInsights from "../components/AIInsights";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

function MatchPredictor() {

    const [teams, setTeams] = useState([]);

    const [team1, setTeam1] = useState("");

    const [team2, setTeam2] = useState("");

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {

        loadTeams();

    }, []);

    async function loadTeams() {

        try {

            const response = await api.get("/teams");

            setTeams(response.data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load teams.");

        }

    }

    async function predictMatch() {

        if (!team1 || !team2) {

            setError("Please select both teams.");

            return;

        }

        if (team1 === team2) {

            setError("Please select two different teams.");

            return;

        }

        setError("");

        setLoading(true);

        setResult(null);

        try {

            const response = await api.post(

                "/predict_match",

                {

                    team1,

                    team2

                }

            );

            setResult(response.data);

            // Save prediction history

            const history = JSON.parse(

                localStorage.getItem("predictionHistory")

            ) || [];

            history.unshift({

                ...response.data,

                date: new Date().toLocaleString()

            });

            localStorage.setItem(

                "predictionHistory",

                JSON.stringify(history.slice(0, 20))

            );

        }

        catch (err) {

            console.log(err);

            setError("Prediction failed. Please try again.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-black text-center">

                        ⚽ AI Match Predictor

                    </h1>

                    <p className="text-center text-gray-400 text-xl mt-4">

                        Choose two teams and let AI predict the winner.

                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">

                        <TeamDropdown

                            teams={teams}

                            value={team1}

                            onChange={(e) => setTeam1(e.target.value)}

                            label="Home Team"

                        />

                        <TeamDropdown

                            teams={teams}

                            value={team2}

                            onChange={(e) => setTeam2(e.target.value)}

                            label="Away Team"

                        />

                    </div>

                    <div className="flex justify-center mt-10">

                        <button

                            onClick={predictMatch}

                            className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-xl text-xl font-bold"

                        >

                            Predict Match

                        </button>

                    </div>

                    {

                        error &&

                        <div className="text-center mt-6">

                            <p className="text-red-500 text-lg">

                                {error}

                            </p>

                        </div>

                    }

                    {

                        loading &&

                        <LoadingSpinner />

                    }

                    {

                        result && !loading &&

                        <>

                            <PredictionCard

                                result={result}

                            />

                            <AIConfidence

                                result={result}

                            />

                            <AIInsights

                                result={result}

                            />

                        </>

                    }

                </div>

            </div>

        </>

    );

}

export default MatchPredictor;