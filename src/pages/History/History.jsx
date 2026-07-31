import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  History as HistoryIcon,
  Trash2,
  Eye,
  Download,
  Search,
  BarChart3,
  ShieldCheck,
  Presentation,
  Rocket,
  Gamepad2,
  UtensilsCrossed,
  ShoppingCart,
  Wallet,
  HeartPulse,
  GraduationCap,
  Plane,
  Bot,
  Music,
  Camera,
  Car,
  Dumbbell,
  Building2,
  Users
} from "lucide-react";

import DashboardLayout from "../Dashboard/DashboardLayout";
import { supabase } from "../../lib/supabase";
import { generatePDF } from "../../utils/generatePDF";



function History(){


const [analyses,setAnalyses] = useState([]);

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(true);





useEffect(()=>{

loadHistory();

},[]);






async function loadHistory(){


try{


const {

data:{
user

}

}=await supabase.auth.getUser();




if(!user){

setLoading(false);

return;

}





const {data,error}=await supabase

.from("analyses")

.select("*")

.eq("user_id",user.id)

.order(

"created_at",

{

ascending:false

}

);





if(error){

console.error(error);

setLoading(false);

return;

}





setAnalyses(data || []);

setLoading(false);



}


catch(error){

console.log(error);

setLoading(false);

}



}









function getIdeaInfo(idea){


const text = idea?.toLowerCase() || "";



if(
text.includes("game") ||
text.includes("gaming") ||
text.includes("player") ||
text.includes("tournament") ||
text.includes("action")
)

return {

name:"Gaming App",

icon:<Gamepad2 size={26}/>

};




if(
text.includes("food") ||
text.includes("cook") ||
text.includes("recipe") ||
text.includes("restaurant") ||
text.includes("meal")
)

return {

name:"Food Platform",

icon:<UtensilsCrossed size={26}/>

};





if(
text.includes("shop") ||
text.includes("store") ||
text.includes("marketplace") ||
text.includes("ecommerce") ||
text.includes("buy") ||
text.includes("sell")
)

return {

name:"E-Commerce App",

icon:<ShoppingCart size={26}/>

};






if(
text.includes("doctor") ||
text.includes("hospital") ||
text.includes("health") ||
text.includes("medical") ||
text.includes("patient")
)

return {

name:"Healthcare App",

icon:<HeartPulse size={26}/>

};






if(
text.includes("money") ||
text.includes("finance") ||
text.includes("bank") ||
text.includes("payment")
)

return {

name:"Finance App",

icon:<Wallet size={26}/>

};







if(
text.includes("school") ||
text.includes("student") ||
text.includes("education") ||
text.includes("learn") ||
text.includes("learning") ||
text.includes("scholarship")
)

return {

name:"Education Platform",

icon:<GraduationCap size={26}/>

};







if(
text.includes("travel") ||
text.includes("trip") ||
text.includes("hotel")
)

return {

name:"Travel App",

icon:<Plane size={26}/>

};







if(
text.includes("ai") ||
text.includes("artificial intelligence") ||
text.includes("assistant")
)

return {

name:"AI Tool",

icon:<Bot size={26}/>

};







if(
text.includes("music") ||
text.includes("song") ||
text.includes("audio")
)

return {

name:"Music App",

icon:<Music size={26}/>

};







if(
text.includes("photo") ||
text.includes("camera") ||
text.includes("image")
)

return {

name:"Photography App",

icon:<Camera size={26}/>

};







if(
text.includes("car") ||
text.includes("vehicle") ||
text.includes("transport")
)

return {

name:"Vehicle Service",

icon:<Car size={26}/>

};







if(
text.includes("fitness") ||
text.includes("gym") ||
text.includes("workout") ||
text.includes("coach")
)

return {

name:"Fitness App",

icon:<Dumbbell size={26}/>

};







if(
text.includes("business") ||
text.includes("company") ||
text.includes("startup") ||
text.includes("market")
)

return {

name:"Business Platform",

icon:<Building2 size={26}/>

};







if(
text.includes("social") ||
text.includes("community") ||
text.includes("chat")
)

return {

name:"Social Platform",

icon:<Users size={26}/>

};






return {

name:"Startup Idea",

icon:<Rocket size={26}/>

};


}

async function deleteAnalysis(id){


const confirmDelete = window.confirm(

"Are you sure you want to delete this analysis?"

);



if(!confirmDelete) return;




try{


const {

data:{
user

}

}=await supabase.auth.getUser();





if(!user){

alert("User not found");

return;

}




const {error}=await supabase

.from("analyses")

.delete()

.eq("id",id)

.eq("user_id",user.id);





if(error){

alert(error.message);

return;

}




setAnalyses((old)=>

old.filter(

(item)=>item.id !== id

)

);



await loadHistory();



}


catch(error){

console.log(error);

alert("Delete failed");

}



}









function downloadPDF(item){


let swot={};

let market={};

let strategy={};

let risks=[];

let recommendations=[];



try{

swot=JSON.parse(item.swot_report || "{}");

}

catch{}



try{

market=JSON.parse(item.market_analysis || "{}");

}

catch{}



try{

strategy=JSON.parse(item.business_strategy || "{}");

}

catch{}



try{

risks=JSON.parse(item.risks || "[]");

}

catch{}



try{

recommendations=JSON.parse(item.recommendations || "[]");

}

catch{}





const savedAnalysis={


score:item.confidence || 0,


strengths:swot.strengths || [],


weaknesses:swot.weaknesses || [],


opportunities:swot.opportunities || [],


threats:swot.threats || [],


marketAnalysis:market,


businessStrategy:strategy,


risks:risks,


recommendations:recommendations,


pitch:item.investor_pitch || ""



};





generatePDF(

savedAnalysis,

item.idea

);



}









const filteredAnalyses = analyses.filter(item=>


item.idea

?.toLowerCase()

.includes(

search.toLowerCase()

)


);






return(


<DashboardLayout>


<div className="space-y-8">






<div className="flex items-center gap-4">


<div

className="
w-14
h-14
rounded-2xl
bg-[#BFDBF7]
flex
items-center
justify-center
"

>


<HistoryIcon

size={28}

className="text-[#1F7A8C]"

/>


</div>






<div>


<h1

className="
text-4xl
font-bold
dark:text-white
"

>

Analysis History

</h1>



<p className="text-gray-500 mt-2">

Your saved startup analyses.

</p>


</div>


</div>











<div

className="
bg-white
dark:bg-gray-900
border
rounded-2xl
p-4
flex
items-center
gap-3
"

>


<Search className="text-gray-400"/>




<input


value={search}


onChange={(e)=>setSearch(e.target.value)}


placeholder="Search analysis..."


className="
w-full
outline-none
bg-transparent
dark:text-white
"

/>


</div>









{

loading &&

<div className="text-center py-20">

Loading history...

</div>

}








{

!loading && filteredAnalyses.length===0 &&


<div className="text-center py-20 text-gray-500">


<h2 className="text-2xl font-bold">

No saved analysis

</h2>



<p className="mt-2">

Create your first startup analysis.

</p>


</div>


}









<div className="space-y-6">


{


filteredAnalyses.map((item)=>{


const info=getIdeaInfo(item.idea);



return(


<div

key={item.id}

className="
bg-white
dark:bg-gray-900
border
rounded-3xl
p-7
shadow-sm
"

>



<div className="flex items-center gap-4">



<div

className="
w-14
h-14
rounded-2xl
bg-[#BFDBF7]
flex
items-center
justify-center
text-[#1F7A8C]
"

>


{info.icon}


</div>






<div>


<h2

className="
text-2xl
font-bold
dark:text-white
"

>

{info.name}

</h2>


<p

className="
text-sm
text-gray-500
dark:text-gray-400
"

>

Startup Analysis

</p>


</div>



</div>






<p className="text-gray-500 mt-4 line-clamp-2">

{item.idea}

</p>

<div

className="
grid
md:grid-cols-3
gap-5
mt-7
"

>


<StatCard

icon={<BarChart3/>}

title="AI Score"

value={`${item.confidence || 0}/100`}

/>




<StatCard

icon={<ShieldCheck/>}

title="SWOT"

value="Completed"

/>




<StatCard

icon={<Presentation/>}

title="Pitch"

value="Generated"

/>


</div>









<div

className="
flex
gap-4
mt-7
items-center
justify-end
"

>



<Link


to={`/report/${item.id}`}


title="View Report"


className="
w-12
h-12
rounded-full
bg-[#1F7A8C]
text-white
flex
items-center
justify-center
shadow-lg
hover:bg-[#022B3A]
transition
"

>


<Eye size={22}/>


</Link>








<button


onClick={()=>downloadPDF(item)}


title="Download AI Report PDF"


className="
w-12
h-12
rounded-full
bg-[#022B3A]
text-white
flex
items-center
justify-center
shadow-lg
hover:bg-[#1F7A8C]
transition
"

>


<Download size={22}/>


</button>









<button


onClick={()=>deleteAnalysis(item.id)}


title="Delete Analysis"


className="
w-12
h-12
rounded-full
bg-red-50
text-red-500
flex
items-center
justify-center
shadow-lg
hover:bg-red-500
hover:text-white
transition
"

>


<Trash2 size={22}/>


</button>



</div>








</div>


);


})


}


</div>


</div>


</DashboardLayout>


);


}










function StatCard({icon,title,value}){


return(


<div

className="
bg-gray-50
dark:bg-gray-800
rounded-2xl
p-5
"

>


<div className="text-[#1F7A8C]">

{icon}

</div>





<p className="text-gray-500 mt-3">

{title}

</p>






<h3

className="
text-2xl
font-bold
dark:text-white
"

>

{value}

</h3>




</div>


);


}







export default History;