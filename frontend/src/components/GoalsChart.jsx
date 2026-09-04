import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

function GoalsChart({ team }) {

    if (!team) return null;

    const data = [
        {
            name: team.team,
            Goals: team.avg_goals
        }
    ];

    return (

        <div className="bg-slate-800 rounded-2xl p-8 mt-8">

            <h2 className="text-white text-3xl font-bold mb-8">

                ⚽ Average Goals

            </h2>

            <div style={{ width: "100%", height: 300 }}>

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid stroke="#475569" />

                        <XAxis
                            dataKey="name"
                            stroke="#CBD5E1"
                        />

                        <YAxis
                            stroke="#CBD5E1"
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1E293B",
                                border: "none",
                                borderRadius: "10px",
                                color: "#fff"
                            }}
                        />

                        <Bar
                            dataKey="Goals"
                            fill="#22C55E"
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default GoalsChart;