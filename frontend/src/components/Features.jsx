function Features() {

    const features = [

        {
            title: "Match Prediction",
            icon: "⚽",
            description: "Predict football match outcomes using AI."
        },

        {
            title: "Tournament Simulator",
            icon: "🏆",
            description: "Simulate complete knockout tournaments."
        },

        {
            title: "Team Analytics",
            icon: "📊",
            description: "Analyze team performance and statistics."
        },

        {
            title: "Compare Teams",
            icon: "⚔",
            description: "Compare two national teams side by side."
        },

        {
            title: "World Rankings",
            icon: "🌍",
            description: "Browse FIFA team rankings."
        },

        {
            title: "Prediction History",
            icon: "📜",
            description: "Review previous AI predictions."
        }

    ];

    return (

        <section className="bg-slate-950 py-20">

            <div className="max-w-7xl mx-auto px-8">

                <h1 className="text-5xl font-bold text-center text-white">

                    Features

                </h1>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {

                        features.map((feature, index)=>(

                            <div

                                key={index}

                                className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition"

                            >

                                <div className="text-6xl">

                                    {feature.icon}

                                </div>

                                <h2 className="text-white text-3xl font-bold mt-6">

                                    {feature.title}

                                </h2>

                                <p className="text-gray-400 mt-4">

                                    {feature.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Features;