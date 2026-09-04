import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import DashboardCharts from "../components/DashboardCharts";
import RecentPredictions from "../components/RecentPredictions";
import AIModelCard from "../components/AIModelCard";

function Dashboard() {

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-8 py-10">

                    <h1 className="text-5xl font-black text-center">

                        📊 FIFA AI Dashboard

                    </h1>

                    <p className="text-center text-gray-400 text-xl mt-4">

                        Real-time AI analytics for international football predictions.

                    </p>

                    {/* Statistics Cards */}

                    <div className="mt-12">

                        <StatsSection />

                    </div>

                    {/* Charts */}

                    <div className="mt-12">

                        <DashboardCharts />

                    </div>

                    {/* Recent Predictions */}

                    <div className="mt-12">

                        <RecentPredictions />

                    </div>

                    {/* AI Model Information */}

                    <div className="mt-12">

                        <AIModelCard />

                    </div>

                </div>

            </div>

        </>

    );

}

export default Dashboard;