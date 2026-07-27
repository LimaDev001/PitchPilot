import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  ArrowLeft,
  Rocket,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Presentation,
  Loader,
  Target
} from "lucide-react";

import { motion } from "framer-motion";

import DashboardLayout from "../Dashboard/DashboardLayout";
import { supabase } from "../../lib/supabase";



function Report(){


const {id}=useParams();


const [report,setReport]=useState(null);

const [loading,setLoading]=useState(true);







useEffect(()=>{

loadReport();

},[]);







async function loadReport(){


const {data,error}=await supabase

.from("analyses")

.select("*")

.eq("id",id)

.single();




if(error){

console.log(error.message);

setLoading(false);

return;

}




let swot={};

let market={};

let strategy={};

let risks=[];

let recommendations=[];



try{

swot=JSON.parse(data.swot_report || "{}");

}

catch{}



try{

market=JSON.parse(data.market_analysis || "{}");

}

catch{}



try{

strategy=JSON.parse(data.business_strategy || "{}");

}

catch{}



try{

risks=JSON.parse(data.risks || "[]");

}

catch{}



try{

recommendations=JSON.parse(data.recommendations || "[]");

}

catch{}




setReport({

idea:data.idea,

score:data.confidence || 0,


strengths:swot.strengths || [],

weaknesses:swot.weaknesses || [],

opportunities:swot.opportunities || [],

threats:swot.threats || [],


market,

strategy,

risks,

recommendations,


pitch:data.investor_pitch || ""

});



setLoading(false);


}









if(loading){


return(

<DashboardLayout>

<div className="flex justify-center py-20">

<Loader className="animate-spin"/>

</div>

</DashboardLayout>

)


}








if(!report){


return(

<DashboardLayout>

<div className="text-center py-20">

<h2 className="text-2xl font-bold">

Report not found

</h2>

</div>

</DashboardLayout>

)

}









return(


<DashboardLayout>


<div className="space-y-8">






<Link

to="/history"

className="
flex
items-center
gap-2
text-[#1F7A8C]
font-semibold
"

>

<ArrowLeft size={20}/>

Back to History

</Link>









{/* HEADER */}



<motion.div

initial={{opacity:0,y:20}}

animate={{opacity:1,y:0}}

className="
bg-white
dark:bg-gray-900
border
rounded-3xl
p-8
"

>


<div className="flex items-center gap-5">


<div

className="
w-16
h-16
rounded-2xl
bg-[#BFDBF7]
flex
items-center
justify-center
"

>

<Rocket

size={35}

className="text-[#022B3A]"

/>


</div>




<div>


<h1 className="
text-4xl
font-bold
dark:text-white
">

{report.idea}

</h1>


<p className="
text-gray-500
mt-2
">

PitchPilot AI Startup Report

</p>


</div>



</div>


</motion.div>









{/* SCORE */}



<Card>


<div className="flex items-center gap-3">


<BarChart3 className="text-[#1F7A8C]"/>


<h2 className="text-2xl font-bold dark:text-white">

Startup Potential Score

</h2>


</div>


<h3 className="
text-6xl
font-bold
text-[#1F7A8C]
mt-6
">

{report.score}/100

</h3>


<p className="text-gray-500 mt-4">

AI evaluation based on market demand, scalability, competition, and investment potential.

</p>


</Card>









{/* SWOT */}



<div className="
grid
md:grid-cols-2
gap-6
">


<SWOTCard title="Strengths" icon={ShieldCheck} items={report.strengths}/>


<SWOTCard title="Weaknesses" icon={AlertTriangle} items={report.weaknesses}/>


<SWOTCard title="Opportunities" icon={TrendingUp} items={report.opportunities}/>


<SWOTCard title="Threats" icon={AlertTriangle} items={report.threats}/>


</div>









{/* MARKET */}



<Card>


<div className="flex gap-3 items-center">

<Target className="text-[#1F7A8C]"/>

<h2 className="text-2xl font-bold dark:text-white">

Market Opportunity Analysis

</h2>

</div>



<TextBlock title="Target Users" value={report.market?.targetUsers}/>


<TextBlock title="Market Demand" value={report.market?.marketDemand}/>


<TextBlock title="Competitors" value={report.market?.competitors}/>


<TextBlock title="Growth Opportunity" value={report.market?.growthOpportunity}/>



</Card>









{/* BUSINESS STRATEGY */}



<Card>


<h2 className="text-2xl font-bold dark:text-white">

Business Strategy Generator

</h2>



<TextBlock title="Business Model" value={report.strategy?.businessModel}/>


<TextBlock title="Monetization" value={report.strategy?.monetization}/>


<TextBlock title="Growth Strategy" value={report.strategy?.growthStrategy}/>


</Card>









{/* RISKS */}



<ListSection

title="Risk Evaluation"

icon={AlertTriangle}

items={report.risks}

/>









{/* RECOMMENDATIONS */}



<ListSection

title="AI Recommendations"

icon={Lightbulb}

items={report.recommendations}

/>









{/* PITCH */}



<div

className="
bg-gradient-to-r
from-[#022B3A]
to-[#1F7A8C]
text-white
rounded-3xl
p-8
"

>


<Presentation size={32}/>


<h2 className="text-3xl font-bold mt-4">

Investor Pitch

</h2>



<p className="
mt-4
leading-8
text-lg
">

{report.pitch}

</p>


</div>








</div>


</DashboardLayout>


)

}









function Card({children}){


return(

<div className="
bg-white
dark:bg-gray-900
border
rounded-3xl
p-7
shadow-sm
">

{children}

</div>

)

}









function TextBlock({title,value}){


return(

<div className="mt-5">


<h3 className="font-bold dark:text-white">

{title}

</h3>


<p className="
text-gray-600
dark:text-gray-300
mt-2
">

{value || "Not available"}

</p>


</div>

)

}









function ListSection({title,icon:Icon,items}){


return(

<Card>


<div className="flex items-center gap-3 mb-5">


<Icon className="text-[#1F7A8C]"/>


<h2 className="text-2xl font-bold dark:text-white">

{title}

</h2>


</div>



<ul className="space-y-3">


{items.map((item,index)=>(

<li key={index}

className="
text-gray-600
dark:text-gray-300
"

>

<span className="text-[#1F7A8C]">

✓

</span>

{" "}

{item}

</li>


))}


</ul>


</Card>

)

}









function SWOTCard({title,icon:Icon,items}){


return(

<Card>


<div className="flex items-center gap-3 mb-5">


<Icon className="text-[#1F7A8C]"/>


<h2 className="text-xl font-bold dark:text-white">

{title}

</h2>


</div>



<ul className="space-y-3">


{items.map((item,index)=>(

<li key={index}

className="
text-gray-600
dark:text-gray-300
"

>

✓ {item}

</li>

))}


</ul>



</Card>

)

}





export default Report;