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
} from "lucide-react";

import DashboardLayout from "../Dashboard/DashboardLayout";
import { supabase } from "../../lib/supabase";

import { generatePDF } from "../../utils/generatePDF";



function History(){


const [analyses,setAnalyses]=useState([]);

const [search,setSearch]=useState("");

const [loading,setLoading]=useState(true);







useEffect(()=>{

loadHistory();

},[]);








async function loadHistory(){


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

.order("created_at",{ascending:false});





if(error){

console.log(error.message);

setLoading(false);

return;

}





setAnalyses(data || []);

setLoading(false);



}









async function deleteAnalysis(id){


const {error}=await supabase

.from("analyses")

.delete()

.eq("id",id);





if(error){

alert(error.message);

return;

}





setAnalyses(

analyses.filter(

item=>item.id!==id

)

);



}









function downloadPDF(item){


let swot = {};

try{

swot = JSON.parse(item.swot_report || "{}");

}

catch{

swot={};

}



let market = {};

try{

market = JSON.parse(item.market_analysis || "{}");

}

catch{

market={};

}



let strategy = {};

try{

strategy = JSON.parse(item.business_strategy || "{}");

}

catch{

strategy={};

}



let risks = [];

try{

risks = JSON.parse(item.risks || "[]");

}

catch{

risks=[];

}



let recommendations = [];

try{

recommendations = JSON.parse(item.recommendations || "[]");

}

catch{

recommendations=[];

}







const savedAnalysis = {


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

filteredAnalyses.map((item)=>(


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








<div className="flex justify-between">


<div>


<div className="flex items-center gap-3">


<Rocket

className="text-[#1F7A8C]"

/>



<h2

className="
text-2xl
font-bold
dark:text-white
"

>


{item.idea}


</h2>


</div>






<p className="text-gray-500 mt-3">


Saved analysis report


</p>



</div>







<button


onClick={()=>deleteAnalysis(item.id)}


className="
p-3
rounded-xl
bg-red-50
text-red-500
"


>


<Trash2 size={18}/>


</button>





</div>









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









<div className="flex gap-4 mt-7">


<Link


to={`/report/${item.id}`}


className="
flex
items-center
gap-2
bg-[#1F7A8C]
text-white
px-5
py-3
rounded-xl
"


>


<Eye size={18}/>

View Report


</Link>








<button


onClick={()=>downloadPDF(item)}


className="
flex
items-center
gap-2
bg-[#022B3A]
text-white
px-5
py-3
rounded-xl
"


>


<Download size={18}/>


PDF


</button>





</div>









</div>


))


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