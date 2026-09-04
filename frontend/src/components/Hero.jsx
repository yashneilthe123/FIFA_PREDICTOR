import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

            <div className="max-w-7xl mx-auto px-8 py-24 text-center">

                <h1 className="text-7xl font-black">

                    ⚽ FIFA AI Predictor

                </h1>

                <p className="text-2xl text-gray-300 mt-8 max-w-3xl mx-auto">

                    Predict football matches using Machine Learning,
                    compare teams, simulate tournaments,
                    and analyze international football statistics.

                </p>

                <div className="mt-12 flex justify-center gap-6">

                    <Link

                        to="/predict"

                        className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-xl font-bold"

                    >

                        Predict Match

                    </Link>

                    <Link

                        to="/dashboard"

                        className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl text-xl font-bold"

                    >

                        Dashboard

                    </Link>

                </div>

            </div>

        </section>

    );

}

export default Hero;