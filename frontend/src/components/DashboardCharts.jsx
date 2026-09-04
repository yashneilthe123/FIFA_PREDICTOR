import { useEffect, useState } from "react";

import api from "../services/api";

import {

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

ResponsiveContainer

} from "recharts";

function DashboardCharts(){

const [teams,setTeams]=useState([]);

useEffect(()=>{

load();

},[]);

async function load(){

try{

const res=await api.get("/rankings");

setTeams(res.data);

}

catch(err){

console.log(err);

}

}

const topWinRate=[...teams]

.sort((a,b)=>b.win_rate-a.win_rate)

.slice(0,5)

.map(t=>({

name:t.team,

value:(t.win_rate*100).toFixed(1)

}));

const topGoals=[...teams]

.sort((a,b)=>b.avg_goals-a.avg_goals)

.slice(0,5)

.map(t=>({

name:t.team,

value:t.avg_goals

}));

const topMatches=[...teams]

.sort((a,b)=>b.matches-a.matches)

.slice(0,5)

.map(t=>({

name:t.team,

value:t.matches

}));

return(

<div className="space-y-10">

<div className="grid lg:grid-cols-2 gap-8">

<Chart

title="📈 Top Win Rate"

color="#3B82F6"

data={topWinRate}

/>

<Chart

title="⚽ Top Goal Scorers"

color="#22C55E"

data={topGoals}

/>

</div>

<Chart

title="🏟 Most Experienced Teams"

color="#FACC15"

data={topMatches}

/>

</div>

);

}

function Chart({

title,

data,

color

}){

return(

<div className="bg-slate-800 rounded-2xl p-8">

<h2 className="text-3xl font-bold text-white mb-8">

{title}

</h2>

<ResponsiveContainer

width="100%"

height={350}

>

<BarChart data={data}>

<CartesianGrid stroke="#475569"/>

<XAxis

dataKey="name"

stroke="#CBD5E1"

/>

<YAxis stroke="#CBD5E1"/>

<Tooltip

contentStyle={{

background:"#1E293B",

border:"none",

borderRadius:"10px"

}}

/>

<Bar

dataKey="value"

fill={color}

radius={[8,8,0,0]}

/>

</BarChart>

</ResponsiveContainer>

</div>

);

}

export default DashboardCharts;