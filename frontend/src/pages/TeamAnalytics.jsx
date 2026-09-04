import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TeamDropdown from "../components/TeamDropdown";
import TeamInfoCard from "../components/TeamInfoCard";
import WinRateChart from "../components/WinRateChart";
import GoalsChart from "../components/GoalsChart";
import MatchesChart from "../components/MatchesChart";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

function TeamAnalytics() {

    const [teams, setTeams] = useState([]);

    const [selectedTeam, setSelectedTeam] = useState("");

    const [team, setTeam] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchTeams();

    }, []);

    async function fetchTeams() {

        try {

            const response = await api.get("/teams");

            setTeams(response.data);

        }

        catch (err) {

            console.log(err);

        }

    }

    async function loadTeam() {

        if (!selectedTeam) {

            setError("Please select a team.");

            return;

        }

        setError("");

        setLoading(true);

        setTeam(null);

        try {

            const response = await api.get(`/team/${selectedTeam}`);

            setTeam(response.data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load team.");

        }

        setLoading(false);

    }

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-black text-center">

                        📊 Team Analytics

                    </h1>

                    <p className="text-center text-gray-400 mt-4 text-xl">

                        Explore detailed statistics and AI insights for every national team.

                    </p>

                    <div className="flex justify-center gap-6 mt-12">

                        <TeamDropdown

                            teams={teams}

                            value={selectedTeam}

                            onChange={(e)=>setSelectedTeam(e.target.value)}

                            label="Select Team"

                        />

                        <button

                            onClick={loadTeam}

                            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold"

                        >

                            Show Analytics

                        </button>

                    </div>

                    {

                        error &&

                        <div className="text-center mt-6">

                            <p className="text-red-500">

                                {error}

                            </p>

                        </div>

                    }

                    {

                        loading &&

                        <LoadingSpinner />

                    }

                    {

                        team && !loading &&

                        <>

                            <div className="mt-12">

                                <TeamInfoCard

                                    team={team}

                                />

                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mt-10">

                                <WinRateChart

                                    team={team}

                                />

                                <GoalsChart

                                    team={team}

                                />

                            </div>

                            <div className="mt-10">

                                <MatchesChart

                                    team={team}

                                />

                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mt-10">

                                <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

                                    <h2 className="text-2xl font-bold">

                                        🏟 Matches Played

                                    </h2>

                                    <h1 className="text-6xl font-black text-blue-400 mt-5">

                                        {team.matches}

                                    </h1>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

                                    <h2 className="text-2xl font-bold">

                                        📈 Win Rate

                                    </h2>

                                    <h1 className="text-6xl font-black text-green-400 mt-5">

                                        {(team.win_rate * 100).toFixed(1)}%

                                    </h1>

                                </div>

                                <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

                                    <h2 className="text-2xl font-bold">

                                        ⚽ Average Goals

                                    </h2>

                                    <h1 className="text-6xl font-black text-yellow-400 mt-5">

                                        {team.avg_goals}

                                    </h1>

                                </div>

                            </div>

                            <div className="bg-slate-800 rounded-2xl p-10 mt-12 shadow-lg">

                                <h2 className="text-3xl font-bold text-blue-400">

                                    🤖 AI Insights

                                </h2>

                                <div className="mt-8 space-y-4 text-lg">

                                    <p>

                                        ✅ <strong>{team.team}</strong> has played <strong>{team.matches}</strong> international matches.

                                    </p>

                                    <p>

                                        ✅ Current win rate is <strong>{(team.win_rate * 100).toFixed(1)}%</strong>.

                                    </p>

                                    <p>

                                        ✅ Average goals scored per match is <strong>{team.avg_goals}</strong>.

                                    </p>

                                    <p>

                                        ✅ The Machine Learning model uses these statistics to predict future match outcomes.

                                    </p>

                                    <p>

                                        ✅ Teams with higher win rates and goal averages generally receive higher prediction probabilities.

                                    </p>

                                </div>

                            </div>

                        </>

                    }

                </div>

            </div>

        </>

    );

}

export default TeamAnalytics;