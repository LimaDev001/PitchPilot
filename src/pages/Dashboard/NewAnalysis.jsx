import {
  useState,
  useRef
} from "react";


import DashboardLayout from "./DashboardLayout";


import IdeaForm from "./IdeaForm";
import StartupScore from "./StartupScore";
import SWOTAnalysis from "./SWOTAnalysis";
import MarketAnalysis from "./MarketAnalysis";
import BusinessStrategy from "./BusinessStrategy";
import RiskAnalysis from "./RiskAnalysis";
import Recommendations from "./Recommendations";
import InvestorPitchCard from "./InvestorPitchCard";
import SaveAnalysis from "./SaveAnalysis";


import {
  FileText
} from "lucide-react";


import {
  motion
} from "framer-motion";


import {
  generatePDF
} from "../../utils/generatePDF";





function NewAnalysis(){



const [startupIdea,setStartupIdea] = useState("");

const [analysis,setAnalysis] = useState(null);


const saveRef = useRef(null);

const autoSaved = useRef(false);









function isAutoSaveEnabled(){



const settings = JSON.parse(

localStorage.getItem("pitchpilot-settings")

);



return settings?.autoSave ?? true;


}









async function handleAnalysis(result){



setAnalysis(result);



// reset auto save

autoSaved.current = false;






if(isAutoSaveEnabled()){



setTimeout(async()=>{



if(
saveRef.current &&
!autoSaved.current
){


const success = await saveRef.current.saveAnalysis();



if(success){

autoSaved.current = true;

console.log(
"Auto saved successfully"
);


}



}



},1200);





}



}










return(


<DashboardLayout>


<div className="w-full max-w-6xl mx-auto overflow-hidden">







<div className="mb-8 text-left">


<div

className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-[#1F7A8C]/10
text-[#1F7A8C]
font-medium
text-sm
mb-5
"

>

🚀 Startup Intelligence

</div>








<h1

className="
text-4xl
font-bold
text-gray-800
dark:text-white
"

>

Analyze Your Startup Idea

</h1>








<p

className="
mt-3
max-w-3xl
text-gray-500
dark:text-gray-400
"

>

Describe your startup idea and let PitchPilot AI validate your concept,
generate SWOT analysis, market insights, business strategies,
risk analysis and investor-ready pitches.

</p>



</div>









<IdeaForm


startupIdea={startupIdea}


setStartupIdea={setStartupIdea}


setAnalysis={handleAnalysis}


/>











<div

className="
mt-8
space-y-6
"

>


<StartupScore analysis={analysis}/>


<SWOTAnalysis analysis={analysis}/>


<MarketAnalysis analysis={analysis}/>


<BusinessStrategy analysis={analysis}/>


<RiskAnalysis analysis={analysis}/>


<Recommendations analysis={analysis}/>


<InvestorPitchCard analysis={analysis}/>


</div>












{

analysis && (



<div

className="
flex
justify-center
items-center
gap-5
mt-10
mb-10
"

>







<motion.button


whileHover={{
scale:1.08
}}


whileTap={{
scale:.95
}}




onClick={()=>


generatePDF(

analysis,

startupIdea

)


}



title="Download AI Report"



className="
w-12
h-12
rounded-full
bg-[#1F7A8C]
hover:bg-[#022B3A]
text-white
flex
items-center
justify-center
shadow-lg
transition
"

>


<FileText size={24}/>


</motion.button>









<SaveAnalysis


ref={saveRef}


startupIdea={startupIdea}


analysis={analysis}


/>









</div>


)



}







</div>


</DashboardLayout>


);


}



export default NewAnalysis;