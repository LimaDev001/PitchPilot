import { useEffect, useState } from "react";

import {
  Camera,
  Mail,
  Edit3,
  Save,
  Briefcase,
  Sparkles,
  Bot,
  Rocket,
  Brain,
  Target,
  Zap,
  Lightbulb,
  Code2,
  Globe,
  Star,
  Cpu,
  BarChart3
} from "lucide-react";

import { motion } from "framer-motion";

import DashboardLayout from "../Dashboard/DashboardLayout";

import { supabase } from "../../lib/supabase";



function Profile(){



const [editing,setEditing] = useState(false);

const [message,setMessage] = useState("");



const [profile,setProfile] = useState({

name:"",
email:"",
role:"",
image:""

});






function validateEmail(email){

const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


return regex.test(email);

}







useEffect(()=>{

loadProfile();

},[]);









async function loadProfile(){


const {
data:{
user
}

}=await supabase.auth.getUser();




if(!user) return;





setProfile({

name:user.user_metadata?.name || "User",

email:user.email || "",

role:user.user_metadata?.role || "Startup Creator",

image:user.user_metadata?.image || ""

});


}









function handleChange(e){


setProfile({

...profile,

[e.target.name]:e.target.value

});


}









async function uploadImage(e){


const file=e.target.files[0];


if(!file) return;





if(!file.type.startsWith("image/")){


setMessage(
"Please upload an image file."
);


return;


}







const {
data:{
user
}

}=await supabase.auth.getUser();




if(!user) return;







const fileName =
`${user.id}-${Date.now()}`;







const {error}=await supabase.storage

.from("profile-images")

.upload(fileName,file);







if(error){


setMessage(error.message);


return;


}








const {data}=supabase.storage

.from("profile-images")

.getPublicUrl(fileName);







setProfile({

...profile,

image:data.publicUrl

});







setMessage(
"✨ Profile image updated"
);







setTimeout(()=>{


setMessage("");

},2500);



}

async function saveProfile(){



if(!validateEmail(profile.email)){


setMessage(
"Please enter a valid email address."
);


return;


}







const {error}=await supabase.auth.updateUser({


data:{


name:profile.name,

role:profile.role,

image:profile.image


}


});







if(error){


setMessage(error.message);


return;


}







setEditing(false);



setMessage(
"🚀 Profile saved successfully"
);







setTimeout(()=>{


setMessage("");


},2500);



}









return(


<DashboardLayout>



<div

className="
h-screen
w-full
relative
overflow-hidden
flex
items-center
justify-center
px-5
pb-8
"

>









{/* BACKGROUND ICONS */}





<motion.div

animate={{

y:[0,30,0],

rotate:[0,20,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
top-10
left-8
text-[#1F7A8C]
opacity-20
"

>

<Bot size={65}/>

</motion.div>









<motion.div

animate={{

y:[0,-25,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

className="
absolute
top-20
right-8
text-[#BFDBF7]
opacity-40
"

>

<Sparkles size={75}/>

</motion.div>









<motion.div

animate={{

y:[0,25,0]

}}

transition={{

duration:9,

repeat:Infinity

}}

className="
absolute
bottom-10
left-10
text-[#1F7A8C]
opacity-20
"

>

<Rocket size={75}/>

</motion.div>









<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:6,

repeat:Infinity

}}

className="
absolute
top-32
left-1/4
text-yellow-400
opacity-20
"

>

<Lightbulb size={55}/>

</motion.div>









<motion.div

animate={{

y:[0,20,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

className="
absolute
bottom-10
right-5
text-purple-400
opacity-20
"

>

<Brain size={65}/>

</motion.div>









<motion.div

animate={{

y:[0,-20,0],

rotate:[0,15,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
top-16
right-24
text-[#1F7A8C]
opacity-20
"

>

<Target size={60}/>

</motion.div>









<motion.div

animate={{

y:[0,25,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
bottom-24
left-8
text-green-400
opacity-20
"

>

<Code2 size={55}/>

</motion.div>

<motion.div

animate={{

y:[0,-25,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

className="
absolute
top-40
right-4
text-blue-400
opacity-20
"

>

<Globe size={60}/>

</motion.div>









<motion.div

animate={{

y:[0,20,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

className="
absolute
top-20
left-1/2
text-yellow-300
opacity-20
"

>

<Star size={50}/>

</motion.div>









<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
bottom-16
right-24
text-pink-400
opacity-20
"

>

<Cpu size={55}/>

</motion.div>









<motion.div

animate={{

y:[0,-25,0]

}}

transition={{

duration:8,

repeat:Infinity

}}

className="
absolute
top-1/2
left-6
text-[#BFDBF7]
opacity-30
"

>

<BarChart3 size={60}/>

</motion.div>









{/* PROFILE CARD */}





<motion.div

initial={{

opacity:0,

y:40

}}

animate={{

opacity:1,

y:0

}}

transition={{

duration:.5

}}



className="
relative
z-10
w-full
max-w-lg
max-h-[90vh]
overflow-hidden
rounded-3xl
bg-white/80
dark:bg-gray-900/80
backdrop-blur-xl
shadow-2xl
border
border-white/40
dark:border-gray-700
"

>









<div

className="
h-20
bg-gradient-to-r
from-[#022B3A]
via-[#1F7A8C]
to-[#BFDBF7]
"

>

</div>









<div

className="
p-6
text-center
"

>









<div

className="
relative
-mt-16
mb-4
"

>









<div

className="
w-28
h-28
mx-auto
rounded-full
overflow-hidden
border-8
border-white
dark:border-gray-900
bg-[#1F7A8C]
flex
items-center
justify-center
text-white
text-4xl
font-bold
shadow-xl
"

>





{

profile.image

?


<img

src={profile.image}

alt="profile"

className="
w-full
h-full
object-cover
"

/>


:


profile.name?.charAt(0).toUpperCase()


}



</div>









{

editing && (


<label

className="
absolute
bottom-0
right-[38%]
bg-white
text-[#1F7A8C]
p-3
rounded-full
shadow-xl
cursor-pointer
"

>

<Camera size={18}/>



<input

type="file"

accept="image/*"

onChange={uploadImage}

className="hidden"

/>



</label>


)

}







</div>









{

message && (


<motion.div

initial={{

opacity:0

}}

animate={{

opacity:1

}}

className="
mb-4
rounded-xl
bg-[#1F7A8C]/10
text-[#1F7A8C]
py-2
text-sm
font-semibold
"

>

{message}


</motion.div>


)

}









{

editing

?


<div

className="
space-y-3
"

>







<input

name="name"

value={profile.name}

onChange={handleChange}

placeholder="Your name"

className="
w-full
p-3
rounded-xl
border
dark:bg-gray-800
dark:text-white
outline-none
"

/>







<input

name="role"

value={profile.role}

onChange={handleChange}

placeholder="Your role"

className="
w-full
p-3
rounded-xl
border
dark:bg-gray-800
dark:text-white
outline-none
"

/>






</div>



:


<>


<h1

className="
text-3xl
font-bold
dark:text-white
"

>

{profile.name}

</h1>







<div

className="
inline-flex
items-center
gap-2
mt-3
px-5
py-2
rounded-full
bg-[#BFDBF7]
text-[#022B3A]
font-semibold
"

>

<Briefcase size={18}/>

{profile.role}

</div>




</>


}









<div

className="
mt-5
p-3
rounded-2xl
bg-gray-100
dark:bg-gray-800
flex
items-center
gap-3
text-left
"

>





<Mail

size={20}

className="text-[#1F7A8C]"

/>







<div>


<p

className="
text-xs
text-gray-400
"

>

Email

</p>






<p

className="
text-sm
font-medium
dark:text-white
break-all
"

>

{profile.email}

</p>





</div>







</div>









<button



onClick={

editing

?

saveProfile

:

()=>setEditing(true)

}





className="
mt-5
w-full
py-3
rounded-2xl
bg-[#1F7A8C]
hover:bg-[#022B3A]
text-white
font-bold
flex
items-center
justify-center
gap-2
transition
shadow-lg
hover:scale-[1.02]
"

>







{

editing

?


<>

<Save size={20}/>

Save Changes

</>



:


<>

<Edit3 size={20}/>

Edit Profile

</>


}






</button>







</div>







</motion.div>







</div>







</DashboardLayout>


);


}





export default Profile;