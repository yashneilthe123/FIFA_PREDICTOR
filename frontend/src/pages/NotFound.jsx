import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">

            <h1 className="text-9xl font-black text-blue-500">

                404

            </h1>

            <h2 className="text-4xl font-bold mt-6">

                Page Not Found

            </h2>

            <p className="text-gray-400 mt-4">

                The page you are looking for doesn't exist.

            </p>

            <Link

                to="/"

                className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"

            >

                Back Home

            </Link>

        </div>

    );

}

export default NotFound;