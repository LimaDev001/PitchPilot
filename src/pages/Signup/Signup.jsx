import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { supabase } from "../../lib/supabase";
import { useState } from "react";


function Signup(){


const navigate = useNavigate();

const { darkMode } = useTheme();


const [error,setError] = useState("");

const [message,setMessage] = useState("");

const [loading,setLoading] = useState(false);






function validateEmail(email){

const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


return regex.test(email);

}



async function handleGoogleSignup(){

const {error}=await supabase.auth.signInWithOAuth({

provider:"google",

options:{
redirectTo: window.location.origin + "/dashboard"
}

});


if(error){

setError(error.message);

}

}



async function handleSignup(e){


e.preventDefault();


setError("");

setMessage("");



const name =
e.target.name.value.trim();



const email =
e.target.email.value
.trim()
.toLowerCase();



const password =
e.target.password.value;






if(!validateEmail(email)){


setError(
"Please enter a valid email address."
);


return;


}






if(password.length < 6){


setError(
"Password must be at least 6 characters."
);


return;


}






setLoading(true);







const role =
email === "limarahimzai@gmail.com"

?

"Founder"

:

"User";





const {data,error}=await supabase.auth.signUp({


email,

password,


options:{


data:{


name,

role,

skills:"React • AI • Web Development",

image:""


}


}


});






if(error){


setError(error.message);

setLoading(false);

return;


}



if(data.user){


const {error:profileError}=await supabase

.from("profiles")

.upsert({


id:data.user.id,

name,

email,

role,

skills:"React • AI • Web Development"


});





if(profileError){

console.log(profileError.message);

}



}






setMessage(
"🚀 Welcome to PitchPilot! Your account is ready."
);



setTimeout(()=>{


navigate("/dashboard");


},1500);




setLoading(false);



}

return (


<section


className={`

min-h-screen
flex
items-center
justify-center
px-6
py-10


${
darkMode

?

"bg-[#022B3A]"

:

"bg-[#F5F7FA]"

}


`}


>




<div


className="

max-w-5xl
w-full
grid
lg:grid-cols-[4.5fr_5.5fr]
gap-12
items-stretch

"


>





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

duration:.8

}}



className={`

rounded-3xl
shadow-xl
border
p-4
max-w-md
w-full
justify-self-center


${
darkMode

?

"bg-white/10 border-white/20"

:

"bg-white border-gray-200"

}

`}


>





<div


className={`

inline-flex
items-center
gap-2
px-4
py-2
rounded-full
mb-5


${
darkMode

?

"bg-white/10 text-[#BFDBF7]"

:

"bg-[#ECFEFF] text-[#1F7A8C]"

}

`}


>


<Sparkles size={18}/>

Join PitchPilot


</div>








<h1


className={`

text-3xl
font-bold


${
darkMode

?

"text-white"

:

"text-[#022B3A]"

}

`}


>


Create your account


</h1>









<p


className={`

mt-3


${
darkMode

?

"text-gray-300"

:

"text-gray-500"

}

`}


>


Start validating your startup ideas with AI.


</p>






<form


onSubmit={handleSignup}

className="mt-7 space-y-5"


>






<div>

<label className="block mb-2 font-medium dark:text-gray-200">

Full Name

</label>


<input

name="name"

type="text"

placeholder="Your name"

required

className="

w-full
rounded-xl
px-4
py-3
border
outline-none
bg-white
text-[#022B3A]

"

/>

</div>







<div>

<label className="block mb-2 font-medium dark:text-gray-200">

Email

</label>


<input

name="email"

type="email"

placeholder="you@example.com"

required

className="

w-full
rounded-xl
px-4
py-3
border
outline-none
bg-white
text-[#022B3A]

"

/>

</div>







<div>

<label className="block mb-2 font-medium dark:text-gray-200">

Password

</label>


<input

name="password"

type="password"

placeholder="••••••••"

required

className="

w-full
rounded-xl
px-4
py-3
border
outline-none
bg-white
text-[#022B3A]

"

/>

</div>







{

error && (

<div

className="

bg-red-500/10
text-red-500
rounded-xl
p-3
text-sm
font-medium

"

>

{error}

</div>

)

}









{

message && (

<div

className="

bg-[#1F7A8C]/10
text-[#1F7A8C]
rounded-xl
p-3
text-sm
font-semibold

"

>

{message}

</div>

)

}









<motion.button


whileHover={{

scale:1.03

}}


whileTap={{


scale:.97

}}


disabled={loading}


type="submit"


className="

w-full
bg-[#1F7A8C]
text-white
py-3
rounded-xl
font-semibold
hover:bg-[#164E63]
transition
disabled:opacity-50

"


>


{

loading

?

"Creating account..."

:

"Create Account"

}


</motion.button>



<button

type="button"

onClick={handleGoogleSignup}

className="

w-full
mt-4
border
py-3
rounded-xl
font-semibold
transition
flex
items-center
justify-center
gap-3
dark:border-white/30
dark:text-white
hover:bg-gray-100
dark:hover:bg-white/10

"

>

<svg
width="20"
height="20"
viewBox="0 0 24 24"
>

<path
fill="#4285F4"
d="M21.35 12.23c0-.68-.06-1.34-.17-1.98H12v3.75h5.23a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.92-4.2 2.92-7.16z"
/>

<path
fill="#34A853"
d="M12 21.5c2.63 0 4.84-.87 6.46-2.36l-3.14-2.45c-.87.58-1.98.92-3.32.92-2.55 0-4.71-1.72-5.48-4.03H3.28v2.53A9.75 9.75 0 0 0 12 21.5z"
/>

<path
fill="#FBBC05"
d="M6.52 13.58a5.86 5.86 0 0 1 0-3.16V7.89H3.28a9.5 9.5 0 0 0 0 8.22l3.24-2.53z"
/>

<path
fill="#EA4335"
d="M12 6.39c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.5 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.72 5.39l3.24 2.53C7.29 8.11 9.45 6.39 12 6.39z"
/>

</svg>

Continue with Google

</button>




</form>






<p className="text-center mt-6 text-gray-500">


Already have an account?



<Link

to="/login"

className="

text-[#1F7A8C]
font-semibold
ml-2
hover:underline

"

>


Log In


</Link>


</p>







</motion.div>









{/* AI CARD */}



<motion.div


animate={{

y:[0,-8,0]

}}


transition={{

duration:4,

repeat:Infinity

}}


className="hidden lg:flex"


>


<div


className="

bg-black
rounded-3xl
p-8
text-white
shadow-2xl
w-full
flex
flex-col
justify-center
">


<Rocket size={48} className="text-[#1F7A8C]"/>



<h2 className="text-4xl font-bold mt-6 ">

Build smarter

<br/>

startups with AI.

</h2>





<p className="text-gray-300 mt-5">

Validate ideas, analyze markets,
and create investor-ready pitches.

</p>







<div className="mt-8 space-y-4">


<div className="flex items-center gap-3">

<ShieldCheck className="text-[#1F7A8C]"/>

AI startup validation

</div>



<div className="flex items-center gap-3">

<ShieldCheck className="text-[#1F7A8C]"/>

Market insights

</div>



<div className="flex items-center gap-3">

<ShieldCheck className="text-[#1F7A8C]"/>

Investor pitches

</div>


</div>







</div>


</motion.div>








</div>






</section>


);


}



export default Signup;