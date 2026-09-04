function DashboardCard({ title, value, icon, color }) {

    return (

        <div className={`rounded-2xl p-8 shadow-xl ${color} hover:scale-105 transition duration-300`}>

            <div className="text-5xl">

                {icon}

            </div>

            <h2 className="text-white text-xl mt-5">

                {title}

            </h2>

            <h1 className="text-white text-5xl font-black mt-4">

                {value}

            </h1>

        </div>

    );

}

export default DashboardCard;