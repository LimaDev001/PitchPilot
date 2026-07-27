import {
  Rocket,
  Brain,
  Target,
  BarChart3,
  Presentation,
} from "lucide-react";

import DashboardLayout from "../Dashboard/DashboardLayout";


function Education(){


const lessons = [


{
icon: Rocket,

title:"Startup Basics",

description:
"Learn what startups are, how founders find problems, and how ideas become real businesses.",

video:
"https://www.youtube.com/embed/g1WG4D0Aiek"

},



{
icon: Brain,

title:"SWOT Analysis",

description:
"Learn how to analyze strengths, weaknesses, opportunities, and threats for a startup idea.",

video:
"https://www.youtube.com/embed/JXXHqM6RzZQ"

},




{
icon: Target,

title:"Idea Validation",

description:
"Learn how founders test ideas and understand if a product solves a real problem.",

video:
"https://www.youtube.com/embed/M7zvDBnMgPQ"

},





{
icon: BarChart3,

title:"Market Research",

description:
"Understand customers, competitors, and how to discover market opportunities.",

video:
"https://www.youtube.com/embed/CqaFYgRGDmo"

},





{
icon: Presentation,

title:"Pitch Building",

description:
"Learn how to create a strong startup pitch and explain your idea to investors.",

video:
"https://www.youtube.com/embed/Tk-RdCFSrKU"

}


];





return (

<DashboardLayout>


<div className="space-y-10">





<div>


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

<Presentation

size={35}

className="text-[#1F7A8C]"

/>

</div>




<h1

className="
text-4xl
font-bold
mt-5
text-[#022B3A]
dark:text-white
"

>

PitchPilot Education 🚀

</h1>




<p

className="
mt-3
text-gray-500
dark:text-gray-400
"

>

Learn startup skills with simple explanations and practical videos.

</p>



</div>







<div

className="
grid
md:grid-cols-2
gap-8
"

>


{

lessons.map((lesson,index)=>{


const Icon = lesson.icon;



return(


<div

key={index}

className="
bg-white
dark:bg-gray-900
border
rounded-3xl
p-7
shadow-sm
"

>



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

<Icon

size={30}

className="text-[#1F7A8C]"

/>

</div>







<h2

className="
text-2xl
font-bold
mt-5
dark:text-white
"

>

{lesson.title}

</h2>







<p

className="
mt-3
text-gray-500
dark:text-gray-400
"

>

{lesson.description}

</p>







<div

className="
mt-6
aspect-video
rounded-2xl
overflow-hidden
"

>


<iframe

src={lesson.video}

title={lesson.title}

className="
w-full
h-full
"

allow="
accelerometer;
autoplay;
clipboard-write;
encrypted-media;
gyroscope;
picture-in-picture
"

allowFullScreen

/>


</div>





</div>


)


})


}



</div>





</div>


</DashboardLayout>

);


}


export default Education;