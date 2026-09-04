import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TeamDropdown from "../components/TeamDropdown";
import TeamInfoCard from "../components/TeamInfoCard";
import ComparisonChart from "../components/ComparisonChart";

import api from "../services/api";

function CompareTeams() {

    const [teams, setTeams] = useState([]);

    const [team1, setTeam1] = useState("");

    const [team2, setTeam2] = useState("");

    const [stats1, setStats1] = useState(null);

    const [stats2, setStats2] = useState(null);

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

        }

    }

    async function compareTeams() {

        if (!team1 || !team2) {

            setError("Please select both teams.");

            return;

        }

        if (team1 === team2) {

            setError("Please choose two different teams.");

            return;

        }

        setError("");

        setLoading(true);

        try {

            const response1 = await api.get(`/team/${team1}`);

            const response2 = await api.get(`/team/${team2}`);

            setStats1(response1.data);

            setStats2(response2.data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to compare teams.");

        }

        setLoading(false);

    }

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-bold text-center mb-12">

                        ⚔ Compare Teams

                    </h1>

                    <div className="grid md:grid-cols-2 gap-8">

                        <TeamDropdown

                            teams={teams}

                            value={team1}

                            onChange={(e) => setTeam1(e.target.value)}

                            label="Select Team 1"

                        />

                        <TeamDropdown

                            teams={teams}

                            value={team2}

                            onChange={(e) => setTeam2(e.target.value)}

                            label="Select Team 2"

                        />

                    </div>

                    <div className="flex justify-center mt-10">

                        <button

                            onClick={compareTeams}

                            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-xl font-bold"

                        >

                            Compare Teams

                        </button>

                    </div>

                    {

                        error &&

                        <p className="text-red-500 text-center mt-6">

                            {error}

                        </p>

                    }

                    {

                        loading &&

                        <div className="text-center mt-10 text-2xl">

                            Loading...

                        </div>

                    }

                    {

                        stats1 && stats2 && !loading &&

                        <>

                            <div className="grid md:grid-cols-2 gap-8 mt-12">

                                <TeamInfoCard team={stats1} />

                                <TeamInfoCard team={stats2} />

                            </div>

                            <ComparisonChart

                                team1={stats1}

                                team2={stats2}

                            />

                        </>

                    }

                </div>

            </div>

        </>

    );

}

export default CompareTeams;