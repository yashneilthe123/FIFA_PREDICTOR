import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TeamDropdown from "../components/TeamDropdown";
import TournamentTeamCard from "../components/TournamentTeamCard";
import TournamentBracket from "../components/TournamentBracket";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

function Tournament() {

    const [teams, setTeams] = useState([]);

    const [selectedTeam, setSelectedTeam] = useState("");

    const [tournamentTeams, setTournamentTeams] = useState([]);

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

        }

    }

    function addTeam() {

        if (!selectedTeam) {

            setError("Please select a team.");

            return;

        }

        if (tournamentTeams.includes(selectedTeam)) {

            setError("Team already added.");

            return;

        }

        if (tournamentTeams.length >= 16) {

            setError("Maximum 16 teams allowed.");

            return;

        }

        setTournamentTeams([...tournamentTeams, selectedTeam]);

        setSelectedTeam("");

        setError("");

    }

    function removeTeam(team) {

        setTournamentTeams(

            tournamentTeams.filter((t) => t !== team)

        );

    }

    async function simulateTournament() {

        if (tournamentTeams.length < 2) {

            setError("Please add at least 2 teams.");

            return;

        }

        if (tournamentTeams.length % 2 !== 0) {

            setError("Number of teams must be even.");

            return;

        }

        setError("");

        setLoading(true);

        setResult(null);

        try {

            const response = await api.post(

                "/simulate_tournament",

                {

                    teams: tournamentTeams

                }

            );

            setResult(response.data);

        }

        catch (err) {

            console.log(err);

            setError("Tournament simulation failed.");

        }

        setLoading(false);

    }

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-8 py-12">

                    <h1 className="text-5xl font-black text-center">

                        🏆 Tournament Simulator

                    </h1>

                    <p className="text-center text-gray-400 mt-4 text-xl">

                        Select teams and simulate a complete knockout tournament.

                    </p>

                    <div className="flex justify-center gap-6 mt-12">

                        <TeamDropdown

                            teams={teams}

                            value={selectedTeam}

                            onChange={(e)=>setSelectedTeam(e.target.value)}

                            label="Select Team"

                        />

                        <button

                            onClick={addTeam}

                            className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-bold"

                        >

                            Add Team

                        </button>

                    </div>

                    {

                        error &&

                        <div className="text-center mt-5">

                            <p className="text-red-500">

                                {error}

                            </p>

                        </div>

                    }

                    {

                        tournamentTeams.length > 0 &&

                        <>

                            <h2 className="text-3xl font-bold mt-12 mb-6">

                                Selected Teams

                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {

                                    tournamentTeams.map((team)=>(

                                        <TournamentTeamCard

                                            key={team}

                                            team={team}

                                            removeTeam={removeTeam}

                                        />

                                    ))

                                }

                            </div>

                        </>

                    }

                    <div className="text-center mt-12">

                        <button

                            onClick={simulateTournament}

                            className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-xl font-bold"

                        >

                            Simulate Tournament

                        </button>

                    </div>

                    {

                        loading &&

                        <LoadingSpinner />

                    }

                    {

                        result && !loading &&

                        <>

                            <TournamentBracket

                                rounds={result.rounds}

                            />

                            <div className="bg-green-700 rounded-2xl p-10 mt-12 text-center shadow-lg">

                                <h2 className="text-4xl font-bold">

                                    🏆 Champion

                                </h2>

                                <h1 className="text-6xl font-black mt-5">

                                    {result.champion}

                                </h1>

                            </div>

                        </>

                    }

                </div>

            </div>

        </>

    );

}

export default Tournament;