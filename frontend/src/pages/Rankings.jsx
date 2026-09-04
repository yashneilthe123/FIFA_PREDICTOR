import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import api from "../services/api";

import ReactCountryFlag from "react-country-flag";

const countryCodes = {

    "Argentina":"AR",
    "Australia":"AU",
    "Belgium":"BE",
    "Brazil":"BR",
    "Cameroon":"CM",
    "Canada":"CA",
    "Croatia":"HR",
    "Denmark":"DK",
    "England":"GB",
    "France":"FR",
    "Germany":"DE",
    "Ghana":"GH",
    "Iran":"IR",
    "Italy":"IT",
    "Japan":"JP",
    "Mexico":"MX",
    "Morocco":"MA",
    "Netherlands":"NL",
    "Nigeria":"NG",
    "Poland":"PL",
    "Portugal":"PT",
    "Qatar":"QA",
    "Saudi Arabia":"SA",
    "Senegal":"SN",
    "Serbia":"RS",
    "South Korea":"KR",
    "Spain":"ES",
    "Switzerland":"CH",
    "Tunisia":"TN",
    "United States":"US",
    "Uruguay":"UY",
    "Wales":"GB"

};

function Rankings() {

    const [teams, setTeams] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadRankings();

    }, []);

    async function loadRankings() {

        try {

            const response = await api.get("/rankings");

            setTeams(response.data);

        }

        catch(err){

            console.log(err);

        }

    }

    const filtered = teams.filter(team =>

        team.team.toLowerCase().includes(

            search.toLowerCase()

        )

    );

    return(

        <>

            <Navbar/>

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto p-10">

                    <h1 className="text-5xl font-black text-center">

                        🌍 FIFA Rankings

                    </h1>

                    <div className="flex justify-center mt-10">

                        <input

                            type="text"

                            placeholder="Search Team..."

                            value={search}

                            onChange={(e)=>setSearch(e.target.value)}

                            className="bg-slate-800 rounded-xl px-6 py-3 w-96 outline-none"

                        />

                    </div>

                    <div className="overflow-x-auto mt-10">

                        <table className="w-full bg-slate-800 rounded-xl overflow-hidden">

                            <thead>

                                <tr className="bg-blue-600">

                                    <th className="p-4">Rank</th>

                                    <th className="p-4">Team</th>

                                    <th className="p-4">Matches</th>

                                    <th className="p-4">Win Rate</th>

                                    <th className="p-4">Avg Goals</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    filtered.map((team,index)=>(

                                        <tr

                                            key={team.team}

                                            className="border-b border-slate-700 hover:bg-slate-700"

                                        >

                                            <td className="text-center p-4">

                                                {index+1}

                                            </td>

                                            <td className="p-4">

                                                <div className="flex items-center gap-4">

                                                    <ReactCountryFlag

                                                        countryCode={countryCodes[team.team] || "UN"}

                                                        svg

                                                        style={{

                                                            width:"2em",

                                                            height:"2em"

                                                        }}

                                                    />

                                                    <span>

                                                        {team.team}

                                                    </span>

                                                </div>

                                            </td>

                                            <td className="text-center">

                                                {team.matches}

                                            </td>

                                            <td className="text-center">

                                                {(team.win_rate*100).toFixed(1)}%

                                            </td>

                                            <td className="text-center">

                                                {team.avg_goals}

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Rankings;