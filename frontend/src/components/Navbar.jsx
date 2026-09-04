import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

    const location = useLocation();

    const getLinkClass = (path) => {

        return location.pathname === path
            ? "text-blue-400 font-bold border-b-2 border-blue-400 pb-1"
            : "text-gray-300 hover:text-blue-400 transition";

    };

    return (

        <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50 shadow-lg">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}

                <Link
                    to="/"
                    className="text-3xl font-black text-blue-400 hover:text-blue-300 transition"
                >
                    ⚽ FIFA AI Predictor
                </Link>

                {/* Navigation */}

                <div className="flex items-center gap-6 text-sm lg:text-base">

                    <Link
                        to="/"
                        className={getLinkClass("/")}
                    >
                        🏠 Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className={getLinkClass("/dashboard")}
                    >
                        📊 Dashboard
                    </Link>

                    <Link
                        to="/predict"
                        className={getLinkClass("/predict")}
                    >
                        ⚽ Predict
                    </Link>

                    <Link
                        to="/tournament"
                        className={getLinkClass("/tournament")}
                    >
                        🏆 Tournament
                    </Link>

                    <Link
                        to="/analytics"
                        className={getLinkClass("/analytics")}
                    >
                        📈 Analytics
                    </Link>

                    <Link
                        to="/compare"
                        className={getLinkClass("/compare")}
                    >
                        ⚔ Compare
                    </Link>

                    <Link
                        to="/rankings"
                        className={getLinkClass("/rankings")}
                    >
                        🌍 Rankings
                    </Link>

                    <Link
                        to="/history"
                        className={getLinkClass("/history")}
                    >
                        📜 History
                    </Link>

                    <Link
                        to="/about"
                        className={getLinkClass("/about")}
                    >
                        ℹ About
                    </Link>

                    <ThemeToggle />

                </div>

            </div>

        </nav>

    );

}

export default Navbar;