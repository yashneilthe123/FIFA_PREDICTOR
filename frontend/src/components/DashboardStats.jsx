function DashboardStats(){

const cards=[

{

title:"Accuracy",

value:"98.2%",

icon:"🎯",

color:"bg-blue-600"

},

{

title:"Teams",

value:"211",

icon:"🌍",

color:"bg-green-600"

},

{

title:"Matches",

value:"24K+",

icon:"⚽",

color:"bg-red-600"

},

{

title:"Algorithm",

value:"XGBoost",

icon:"🤖",

color:"bg-purple-600"

}

];

return(

<div className="grid md:grid-cols-4 gap-8 mt-12">

{

cards.map((card,index)=>(

<div

key={index}

className={`${card.color} rounded-2xl p-8 text-center hover:scale-105 transition`}

>

<div className="text-6xl">

{card.icon}

</div>

<h2 className="text-white text-2xl mt-5">

{card.title}

</h2>

<h1 className="text-white text-5xl font-black mt-5">

{card.value}

</h1>

</div>

))

}

</div>

);

}

export default DashboardStats;