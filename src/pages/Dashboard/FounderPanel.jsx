import { useEffect, useState } from "react";

import {
  Users,
  Search,
  RefreshCw,
  Trash2,
  Mail
} from "lucide-react";

import { motion } from "framer-motion";

import { supabase } from "../../lib/supabase";



function FounderPanel(){


const [users,setUsers] = useState([]);

const [loading,setLoading] = useState(false);

const [search,setSearch] = useState("");







async function getUsers(){


setLoading(true);



const {data,error}=await supabase

.from("profiles")

.select("*")

.order("created_at",{ascending:false});





if(error){

console.log(error.message);

setLoading(false);

return;

}



setUsers(data || []);


setLoading(false);


}









useEffect(()=>{


getUsers();


},[]);









async function deleteUser(id){


const confirmDelete =
window.confirm(
"Delete this user?"
);



if(!confirmDelete) return;




const {error}=await supabase

.from("profiles")

.delete()

.eq("id",id);




if(error){

alert(error.message);

return;

}



getUsers();



}









const filteredUsers = users.filter((user)=>

user.name
?.toLowerCase()
.includes(search.toLowerCase())

||

user.email
?.toLowerCase()
.includes(search.toLowerCase())


);









return(


<div className="space-y-8">





{/* Header */}



<div>


<h1

className="
text-3xl
font-bold
text-[#022B3A]
dark:text-white
"

>

Founder Control Panel 🚀

</h1>



<p

className="
text-gray-500
dark:text-gray-400
mt-2
"

>

Manage your PitchPilot users and platform activity.

</p>



</div>










{/* Stats */}



<div

className="
grid
md:grid-cols-3
gap-6
"

>





<div

className="
bg-white
dark:bg-gray-900
rounded-3xl
p-6
shadow
border
border-gray-200
dark:border-gray-700
"

>

<Users className="text-[#1F7A8C]"/>


<p className="
text-gray-500
mt-4
">

Total Users

</p>


<h2 className="
text-4xl
font-bold
mt-2
dark:text-white
">

{users.length}

</h2>



</div>








<div

className="
bg-white
dark:bg-gray-900
rounded-3xl
p-6
shadow
border
border-gray-200
dark:border-gray-700
"

>


<p className="
text-gray-500
">

Platform

</p>


<h2 className="
text-4xl
font-bold
mt-2
text-[#1F7A8C]
">

AI

</h2>


</div>









<div

className="
bg-white
dark:bg-gray-900
rounded-3xl
p-6
shadow
border
border-gray-200
dark:border-gray-700
"

>


<p className="
text-gray-500
">

Status

</p>


<h2 className="
text-4xl
font-bold
mt-2
text-green-500
">

Online

</h2>


</div>






</div>









{/* Users Section */}



<div

className="
bg-white
dark:bg-gray-900
rounded-3xl
p-8
border
border-gray-200
dark:border-gray-700
"

>






<div className="
flex
flex-col
md:flex-row
justify-between
gap-4
mb-6
">


<h2 className="
text-2xl
font-bold
dark:text-white
">

Users

</h2>





<div className="
flex
gap-3
">


<div className="
relative
">


<Search

size={18}

className="
absolute
left-3
top-3
text-gray-400
"

/>


<input

placeholder="Search users"

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
pl-10
px-4
py-2
rounded-xl
border
outline-none
"

/>


</div>







<button

onClick={getUsers}

className="
p-3
rounded-xl
bg-[#1F7A8C]
text-white
"

>


<RefreshCw size={18}/>


</button>




</div>



</div>









{/* User Cards */}




<div className="space-y-4">



{

loading ?


<p>
Loading users...
</p>


:


filteredUsers.map((user)=>(


<motion.div


key={user.id}


initial={{
opacity:0,
y:10
}}


animate={{
opacity:1,
y:0
}}



className="
flex
items-center
justify-between
bg-gray-50
dark:bg-white/5
rounded-2xl
p-5
"


>




<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-full
bg-[#1F7A8C]
text-white
flex
items-center
justify-center
font-bold
">

{

user.name
?.charAt(0)
}

</div>





<div>


<h3 className="
font-semibold
dark:text-white
">

{user.name}

</h3>



<p className="
text-sm
text-gray-500
flex
items-center
gap-2
">

<Mail size={14}/>

{user.email}

</p>


<p className="
text-xs
text-[#1F7A8C]
mt-1
">

{user.role}

</p>



</div>


</div>







<button

onClick={()=>deleteUser(user.id)}

className="
p-3
rounded-xl
text-red-500
hover:bg-red-100
dark:hover:bg-red-500/10
"


>

<Trash2 size={20}/>


</button>





</motion.div>



))


}



</div>







</div>







</div>


);


}



export default FounderPanel;