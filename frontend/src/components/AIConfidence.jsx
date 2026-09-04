function AIConfidence({ result }) {

    if (!result) return null;

    const confidence = Math.max(
        result.team1_win,
        result.team2_win,
        result.draw
    );

    let color = "text-green-400";

    if (confidence < 60)
        color = "text-yellow-400";

    if (confidence < 45)
        color = "text-red-400";

    return (

        <div className="bg-slate-800 rounded-2xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-white">

                🤖 AI Confidence

            </h2>

            <h1 className={`text-6xl font-black mt-6 ${color}`}>

                {confidence.toFixed(1)}%

            </h1>

            <p className="text-gray-400 mt-5">

                Confidence of the predicted outcome based on the
                machine learning model.

            </p>

        </div>

    );

}

export default AIConfidence;