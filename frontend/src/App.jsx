import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MatchPredictor from "./pages/MatchPredictor";
import Tournament from "./pages/Tournament";
import TeamAnalytics from "./pages/TeamAnalytics";
import CompareTeams from "./pages/CompareTeams";
import Rankings from "./pages/Rankings";
import PredictionHistory from "./pages/PredictionHistory";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Home */}

                <Route
                    path="/"
                    element={<Home />}
                />

                {/* Dashboard */}

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* Match Predictor */}

                <Route
                    path="/predict"
                    element={<MatchPredictor />}
                />

                {/* Tournament */}

                <Route
                    path="/tournament"
                    element={<Tournament />}
                />

                {/* Team Analytics */}

                <Route
                    path="/analytics"
                    element={<TeamAnalytics />}
                />

                {/* Compare Teams */}

                <Route
                    path="/compare"
                    element={<CompareTeams />}
                />

                {/* Rankings */}

                <Route
                    path="/rankings"
                    element={<Rankings />}
                />

                {/* Prediction History */}

                <Route
                    path="/history"
                    element={<PredictionHistory />}
                />

                {/* About */}

                <Route
                    path="/about"
                    element={<About />}
                />

                {/* 404 Page */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;