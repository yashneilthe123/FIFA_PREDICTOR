function ChampionCard({ champion }) {

    if (!champion) return null;

    return (

        <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 rounded-xl p-10 text-center mt-12 shadow-2xl">

            <h2 className="text-3xl font-bold text-white">

                🏆 FIFA Champion

            </h2>

            <h1 className="text-6xl font-black mt-6 text-white">

                {champion}

            </h1>

        </div>

    );

}

export default ChampionCard;