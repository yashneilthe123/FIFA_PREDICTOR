import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend
} from "recharts";

function ComparisonChart({ team1, team2 }) {

    if (!team1 || !team2) return null;

    const data = [

        {
            subject: "Matches",
            Team1: team1.matches,
            Team2: team2.matches
        },

        {
            subject: "Win Rate",
            Team1: team1.win_rate * 100,
            Team2: team2.win_rate * 100
        },

        {
            subject: "Goals",
            Team1: team1.avg_goals * 20,
            Team2: team2.avg_goals * 20
        }

    ];

    return (

        <div className="bg-slate-800 rounded-2xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-center text-white mb-8">

                📊 Team Comparison

            </h2>

            <ResponsiveContainer width="100%" height={450}>

                <RadarChart data={data}>

                    <PolarGrid />

                    <PolarAngleAxis dataKey="subject" />

                    <PolarRadiusAxis />

                    <Radar
                        name={team1.team}
                        dataKey="Team1"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.5}
                    />

                    <Radar
                        name={team2.team}
                        dataKey="Team2"
                        stroke="#22c55e"
                        fill="#22c55e"
                        fillOpacity={0.5}
                    />

                    <Legend />

                </RadarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ComparisonChart;