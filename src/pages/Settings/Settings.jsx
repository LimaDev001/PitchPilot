import {
  Palette,
  User,
  Lightbulb,
  Database,
  ShieldCheck,
  Sparkles,
  Moon,
  Sun,
  Mail
} from "lucide-react";

import { useEffect, useState } from "react";

import DashboardLayout from "../Dashboard/DashboardLayout";

import { useTheme } from "../../context/ThemeContext";

import { supabase } from "../../lib/supabase";

import { motion } from "framer-motion";



function Settings(){


const {darkMode,toggleTheme}=useTheme();


const [user,setUser]=useState({

email:""

});



const [settings,setSettings]=useState({

autoSave:true

});





useEffect(()=>{

loadSettings();

loadUser();

},[]);






async function loadUser(){


const {

data:{user}

}=await supabase.auth.getUser();



if(!user) return;



setUser({

email:user.email

});


}







function loadSettings(){


const saved = JSON.parse(

localStorage.getItem("pitchpilot-settings")

);



if(saved){

setSettings(saved);

}


}







function updateSetting(name,value){


const updatedSettings={

...settings,

[name]:value

};



setSettings(updatedSettings);



localStorage.setItem(

"pitchpilot-settings",

JSON.stringify(updatedSettings)

);


}







return(


<DashboardLayout>


<div

className="
w-full
max-w-6xl
mx-auto
space-y-8
"

>



{/* HEADER */}


<div>


<div

className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-[#BFDBF7]
text-[#022B3A]
font-semibold
text-sm
"

>

<Sparkles size={16}/>

PitchPilot Control

</div>





<h1

className="
mt-5
text-4xl
font-bold
text-[#022B3A]
dark:text-white
"

>

Settings

</h1>




<p

className="
mt-2
text-gray-500
dark:text-gray-400
"

>

Manage your PitchPilot workspace and preferences.

</p>



</div>








<div

className="
grid
md:grid-cols-2
gap-5
"

>








{/* APPEARANCE */}



<SettingCard>


<IconBox>

<Palette/>

</IconBox>



<h2>

Appearance

</h2>



<p>

Customize PitchPilot look.

</p>




<div

className="
mt-auto
pt-6
"

>


<div

className="
flex
items-center
justify-between
bg-gray-50
dark:bg-gray-800
rounded-2xl
p-4
"

>


<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-10
h-10
rounded-xl
bg-[#BFDBF7]
flex
items-center
justify-center
text-[#1F7A8C]
"

>


{

darkMode

?

<Moon size={22}/>

:

<Sun size={22}/>

}


</div>




<div>


<p className="font-semibold dark:text-white">

{

darkMode

?

"Dark Mode"

:

"Light Mode"

}

</p>



<p className="text-sm text-gray-500 dark:text-gray-400">

Theme preference

</p>



</div>


</div>






<button

onClick={toggleTheme}

className={`

w-14
h-7
rounded-full
transition
flex
items-center

${

darkMode

?

"bg-[#1F7A8C]"

:

"bg-gray-300"

}

`}

>


<div

className={`

w-5
h-5
bg-white
rounded-full
transition

${

darkMode

?

"translate-x-8"

:

"translate-x-1"

}

`}

/>


</button>



</div>


</div>



</SettingCard>









{/* WORKSPACE */}



<SettingCard>


<IconBox>

<Lightbulb/>

</IconBox>



<h2>

Workspace

</h2>



<p>

Control PitchPilot features.

</p>






<div

className="
mt-auto
pt-6
"

>


<ToggleRow

title="Auto Save Analysis"

value={settings.autoSave}

setValue={()=>


updateSetting(

"autoSave",

!settings.autoSave

)


}

/>



</div>


</SettingCard>









{/* ACCOUNT */}



<SettingCard>


<IconBox>

<User/>

</IconBox>



<h2>

Account

</h2>



<p>

Your account information.

</p>





<div

className="
mt-auto
pt-6
"

>


<div

className="
bg-gray-50
dark:bg-gray-800
rounded-xl
p-4
flex
items-center
gap-3
dark:text-white
"

>


<Mail

size={22}

className="text-[#1F7A8C]"

/>




<div>


<p className="
text-sm
text-gray-500
dark:text-gray-400
">

Email Address

</p>



<p className="font-semibold">

{user.email}

</p>



</div>


</div>


</div>



</SettingCard>









{/* DATA PRIVACY */}



<SettingCard>


<IconBox>

<Database/>

</IconBox>



<h2>

Data Privacy

</h2>



<p>

Your startup data protection.

</p>





<div

className="
mt-auto
pt-6
"

>


<div

className="
bg-gray-50
dark:bg-gray-800
rounded-xl
p-4
flex
items-center
gap-3
dark:text-white
"

>


<ShieldCheck

size={22}

className="text-[#1F7A8C]"

/>




<div>


<p className="font-semibold">

Secure AI Analysis

</p>



<p className="
text-sm
text-gray-500
dark:text-gray-400
">

Protected workspace

</p>



</div>



</div>



</div>



</SettingCard>









</div>





</div>


</DashboardLayout>


);


}







function SettingCard({children}){


return(


<motion.div

whileHover={{

y:-3

}}


className="

bg-white

dark:bg-gray-900

border

border-gray-200

dark:border-gray-700

rounded-3xl

p-6

shadow-sm

transition

min-h-[260px]

flex

flex-col

"

>


{children}


</motion.div>


);


}







function IconBox({children}){


return(


<div

className="

w-12

h-12

rounded-2xl

bg-[#BFDBF7]

flex

items-center

justify-center

text-[#1F7A8C]

mb-5

"

>


{children}


</div>


);


}







function ToggleRow({

title,

value,

setValue

}){


return(


<div

className="
flex
justify-between
items-center
bg-gray-50
dark:bg-gray-800
rounded-xl
p-4
"

>


<span className="dark:text-white font-medium">

{title}

</span>





<button

onClick={setValue}

className={`

w-12
h-6
rounded-full
transition

${

value

?

"bg-[#1F7A8C]"

:

"bg-gray-300"

}

`

}

>


<div

className={`

w-4
h-4
bg-white
rounded-full
transition

${

value

?

"translate-x-7"

:

"translate-x-1"

}

`}

/>


</button>



</div>


);


}




export default Settings;