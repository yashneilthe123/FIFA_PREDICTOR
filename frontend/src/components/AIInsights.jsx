function AIInsights({ result }) {

    if (!result || !result.reasons) return null;

    return (

        <div className="bg-slate-800 rounded-2xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-blue-400">

                🤖 AI Explanation

            </h2>

            <ul className="list-disc list-inside mt-6 space-y-4">

                {

                    result.reasons.map((reason,index)=>(

                        <li

                            key={index}

                            className="text-lg text-gray-300"

                        >

                            {reason}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default AIInsights;