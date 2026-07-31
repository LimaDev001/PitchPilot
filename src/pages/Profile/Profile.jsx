import {
  useEffect,
  useState
} from "react";


import {
  UserCircle,
  Camera,
  Mail,
  Calendar,
  GraduationCap,
  Briefcase,
  Edit3,
  Save,
  Shield,
  Sparkles
} from "lucide-react";


import { motion } from "framer-motion";


import DashboardLayout from "../Dashboard/DashboardLayout";


import { supabase } from "../../lib/supabase";





function Profile(){


const [editing,setEditing] = useState(false);

const [message,setMessage] = useState("");



const [profile,setProfile] = useState({

firstName:"",
lastName:"",
email:"",
dateOfBirth:"",
age:"",
education:"",
occupation:"",
role:"",
image:""

});







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





const meta = user.user_metadata || {};





setProfile({

firstName:
meta.firstName ||
meta.name ||
"",


lastName:
meta.lastName ||
"",


email:
user.email ||
"",


dateOfBirth:
meta.dateOfBirth ||
"",


age:
meta.age ||
"",


education:
meta.education ||
"",


occupation:
meta.occupation ||
"",


role:
meta.role ||
"User",


image:
meta.image ||
""

});


}









function handleChange(e){


setProfile({

...profile,

[e.target.name]:e.target.value

});


}









async function uploadImage(e){


const file = e.target.files[0];


if(!file) return;





if(!file.type.startsWith("image/")){


setMessage("Please upload an image");


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





setMessage("Profile image updated");



}

async function saveProfile(){


const {error}=await supabase.auth.updateUser({

data:{


firstName:profile.firstName,


lastName:profile.lastName,


dateOfBirth:profile.dateOfBirth,


age:profile.age,


education:profile.education,


occupation:profile.occupation,


role:profile.role,


image:profile.image


}


});





if(error){


setMessage(error.message);


return;


}





setEditing(false);


setMessage("Profile saved successfully");



setTimeout(()=>{

setMessage("");

},2500);



}









return(


<DashboardLayout>




<div

className="

w-full

max-w-6xl

mx-auto

space-y-10

px-2

md:px-0

"

>





{/* HEADER */}



<div>


<div className="

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

mb-4

">


<Sparkles size={16}/>


PitchPilot Profile


</div>





<h1 className="

text-4xl

font-bold

text-[#022B3A]

dark:text-white

">


Account Settings


</h1>





<p className="

mt-2

text-gray-500

dark:text-gray-400

">


Manage your PitchPilot account information.


</p>


</div>









{/* PROFILE CARD */}



<motion.div


initial={{

opacity:0,

y:30

}}



animate={{

opacity:1,

y:0

}}



transition={{

duration:.5

}}



className="

bg-white

dark:bg-gray-900

border

border-gray-200

dark:border-gray-700

rounded-3xl

p-8

shadow-sm

"

>




<div className="

flex

items-center

gap-4

mb-8

">



<div className="

w-14

h-14

rounded-2xl

bg-[#BFDBF7]

flex

items-center

justify-center

">


<UserCircle

size={32}

className="text-[#1F7A8C]"

/>


</div>







<div>


<h2 className="

text-2xl

font-bold

text-[#022B3A]

dark:text-white

">


My Profile


</h2>




<p className="

text-gray-500

dark:text-gray-400

">


Personal information and account details


</p>



</div>


</div>









{/* PROFILE IMAGE */}



<div className="

flex

justify-center

mb-8

">



<div className="relative">



<div className="

w-32

h-32

rounded-full

overflow-hidden

bg-[#1F7A8C]

text-white

flex

items-center

justify-center

text-4xl

font-bold

shadow-lg

">



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


profile.firstName

?.charAt(0)

.toUpperCase()



}



</div>







{

editing && (



<label className="

absolute

bottom-0

right-0

bg-white

dark:bg-gray-800

text-[#1F7A8C]

p-3

rounded-full

shadow-lg

cursor-pointer

">



<Camera size={20}/>




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

mb-6

rounded-xl

bg-[#1F7A8C]/10

text-[#1F7A8C]

py-3

text-center

font-semibold

"


>


{message}


</motion.div>



)

}

<div className="

grid

md:grid-cols-2

gap-5

">







<input

name="firstName"

value={profile.firstName}

onChange={handleChange}

disabled={!editing}

placeholder="First Name"

className="

p-4

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"

/>







<input

name="lastName"

value={profile.lastName}

onChange={handleChange}

disabled={!editing}

placeholder="Last Name"

className="

p-4

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"

/>









<div className="relative">


<Mail

size={20}

className="

absolute

left-4

top-4

text-[#1F7A8C]

"

/>


<input

value={profile.email}

disabled

className="

w-full

p-4

pl-12

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

"

/>


</div>









<div className="relative">


<Calendar

size={20}

className="

absolute

left-4

top-4

text-[#1F7A8C]

"

/>



<input

name="dateOfBirth"

type="date"

value={profile.dateOfBirth || ""}

onChange={(e)=>

setProfile({

...profile,

dateOfBirth:e.target.value

})

}

disabled={!editing}

className="

w-full

p-4

pl-12

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

cursor-pointer

"

/>



</div>









<input

name="age"

value={profile.age}

onChange={handleChange}

disabled={!editing}

placeholder="Age"

className="

p-4

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"

/>









<div className="relative">


<GraduationCap

size={20}

className="

absolute

left-4

top-4

text-[#1F7A8C]

"

/>




<input

name="education"

value={profile.education}

onChange={handleChange}

disabled={!editing}

placeholder="Education"

className="

w-full

p-4

pl-12

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"

/>



</div>









<div className="relative">



<Briefcase

size={20}

className="

absolute

left-4

top-4

text-[#1F7A8C]

"

/>




<select

name="occupation"

value={profile.occupation}

onChange={handleChange}

disabled={!editing}


className="

w-full

p-4

pl-12

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"


>


<option value="">

Occupation

</option>


<option value="Student">

Student

</option>


<option value="Worker">

Worker

</option>


<option value="Teacher">

Teacher

</option>


<option value="Other">

Other

</option>


</select>



</div>









<div className="relative">


<Shield

size={20}

className="

absolute

left-4

top-4

text-[#1F7A8C]

"

/>



<input

name="role"

value={profile.role}

onChange={handleChange}

disabled={!editing}

placeholder="Role"

className="

w-full

p-4

pl-12

rounded-2xl

border

border-gray-200

dark:border-gray-700

dark:bg-gray-800

dark:text-white

outline-none

"

/>



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

mt-8

w-full

py-4

rounded-2xl

bg-[#1F7A8C]

hover:bg-[#022B3A]

text-white

font-bold

flex

items-center

justify-center

gap-3

transition

shadow-lg

"

>



{


editing

?


<>

<Save size={20}/>

Save Profile

</>



:


<>

<Edit3 size={20}/>

Edit Profile

</>


}



</button>









</motion.div>








</div>





</DashboardLayout>


);


}



export default Profile;