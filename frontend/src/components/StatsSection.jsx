import DashboardCard from "./DashboardCard";

function StatsSection() {

    return (

        <section className="bg-slate-950 py-20">

            <div className="max-w-7xl mx-auto px-8">

                <h1 className="text-5xl font-bold text-center text-white mb-16">

                    AI Dashboard

                </h1>

                <div className="grid md:grid-cols-4 gap-8">

                    <DashboardCard

                        title="Accuracy"

                        value="98.2%"

                        icon="🎯"

                        color="bg-blue-600"

                    />

                    <DashboardCard

                        title="Matches"

                        value="24K+"

                        icon="⚽"

                        color="bg-green-600"

                    />

                    <DashboardCard

                        title="Countries"

                        value="211"

                        icon="🌍"

                        color="bg-yellow-500"

                    />

                    <DashboardCard

                        title="Algorithm"

                        value="XGBoost"

                        icon="🤖"

                        color="bg-red-600"

                    />

                </div>

            </div>

        </section>

    );

}

export default StatsSection;