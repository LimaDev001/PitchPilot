import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  LayoutDashboard,
  Sparkles,
  History,
  Settings,
  User,
  LogOut,
  BookOpen,
  Shield
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "../../components/common/Logo";
import { supabase } from "../../lib/supabase";


function Sidebar(){

  const location = useLocation();
  const navigate = useNavigate();

  const [isFounder,setIsFounder] = useState(false);
  const [dashboardOpen,setDashboardOpen] = useState(false);

  const [profile,setProfile] = useState({
    name:"User",
    role:"User",
    image:""
  });



  useEffect(()=>{

    async function loadUser(){

      const {data}=await supabase.auth.getUser();

      if(!data.user) return;


      const user=data.user;


      setProfile({

        name:
        user.user_metadata?.name ||
        user.email?.split("@")[0],


        role:
        user.user_metadata?.role ||
        "User",


        image:
        user.user_metadata?.image ||
        ""

      });



      if(user.user_metadata?.role==="Founder"){

        setIsFounder(true);

      }

    }


    loadUser();

  },[]);





  const menu=[

    {
      name:"Dashboard",
      icon:LayoutDashboard,
      path:"/dashboard",
      dropdown:true
    },

    {
      name:"New Analysis",
      icon:Sparkles,
      path:"/new-analysis"
    },

    {
      name:"History",
      icon:History,
      path:"/history"
    },

    {
      name:"Profile",
      icon:User,
      path:"/profile"
    },

    {
      name:"Settings",
      icon:Settings,
      path:"/settings"
    },

    {
      name:"Education",
      icon:BookOpen,
      path:"/education"
    }

  ];




  async function handleLogout(){

    await supabase.auth.signOut();

    navigate("/");

  }

    return (

<aside

className="

w-64

min-h-screen


bg-white

dark:bg-[#071E2D]


border-r


border-[#D9EAF2]


dark:border-[#1F7A8C]/30


px-5

py-8


pt-20

md:pt-8


flex

flex-col


transition-colors


duration-300

"

>


<div className="mb-10">


<Logo />


<p className="

text-sm

mt-2


text-gray-500


dark:text-[#BFDBF7]

">

AI Startup Coach

</p>


</div>








<nav className="space-y-2">


{

menu.map((item)=>{


const Icon=item.icon;



return(


<div key={item.name}>


<motion.button


whileHover={{

x:5

}}



onClick={()=>{


if(item.dropdown){


setDashboardOpen(!dashboardOpen);


navigate("/dashboard");


}


else{


navigate(item.path);


}


}}



className={`


w-full


flex


items-center


gap-3


px-4


py-3


rounded-2xl


font-medium


transition-all



${

location.pathname===item.path


?


"bg-[#1F7A8C] text-white shadow-lg"


:


"text-[#022B3A] dark:text-[#EAF6FF] hover:bg-[#BFDBF7] dark:hover:bg-[#1F7A8C]/20"


}



`}


>



<Icon size={21}/>


<span>

{item.name}

</span>



</motion.button>






{

item.dropdown && dashboardOpen && isFounder && (


<motion.button


initial={{

opacity:0,

x:-10

}}


animate={{

opacity:1,

x:0

}}



onClick={()=>{


document

.getElementById("founder-panel")

?.scrollIntoView({

behavior:"smooth"

});


}}



className="


ml-8


mt-2


w-[85%]


flex


items-center


gap-3


px-4


py-2


rounded-xl


text-sm


text-[#1F7A8C]


hover:bg-[#BFDBF7]


dark:text-[#BFDBF7]


dark:hover:bg-[#1F7A8C]/20


"


>


<Shield size={18}/>


Founder Control Panel


</motion.button>


)


}




</div>


)


})


}



</nav>

<div className="

mt-auto

pt-6


border-t


border-[#D9EAF2]


dark:border-[#1F7A8C]/30

">






<div className="

flex

items-center

gap-3

">





{

profile.image


?


<img

src={profile.image}

alt="profile"

className="

w-11

h-11

rounded-full

object-cover

"

/>



:


<div className="

w-11

h-11

rounded-full


bg-[#1F7A8C]


text-white


flex


items-center


justify-center


font-bold

">


{

profile.name

?.charAt(0)

.toUpperCase()

}


</div>


}








<div>


<p className="

font-semibold


text-[#022B3A]


dark:text-white

">


{profile.name}


</p>




<p className="

text-sm


text-gray-500


dark:text-[#BFDBF7]

">


{profile.role}


</p>



</div>


</div>









<button


onClick={handleLogout}



className="


mt-6


w-full


flex


items-center


gap-3


px-4


py-3


rounded-2xl



text-[#1F7A8C]


hover:bg-[#BFDBF7]


dark:hover:bg-[#1F7A8C]/20



transition



font-medium


"


>


<LogOut size={20}/>


Logout


</button>







</div>



</aside>


  );


}



export default Sidebar;