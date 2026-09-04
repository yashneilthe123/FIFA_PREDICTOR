function StatCard({ title, value }) {

    return (

        <div className="bg-slate-800 rounded-xl shadow-lg p-6 hover:scale-105 transition duration-300">

            <h3 className="text-gray-400 text-lg">

                {title}

            </h3>

            <h1 className="text-4xl font-bold text-blue-400 mt-4">

                {value}

            </h1>

        </div>

    );

}

export default StatCard;