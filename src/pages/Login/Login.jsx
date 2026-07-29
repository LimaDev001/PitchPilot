import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { supabase } from "../../lib/supabase";


function Login(){


const navigate = useNavigate();

const { darkMode } = useTheme();



const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);







async function handleLogin(e){


e.preventDefault();


setError("");





if(password.length < 6){


setError(
"Password must be at least 6 characters."
);


return;


}







setLoading(true);








const {data,error}=await supabase.auth.signInWithPassword({


email:email.trim().toLowerCase(),


password


});







if(error){


setError(
"Invalid email or password."
);


setLoading(false);


return;


}









if(!data.user.email_confirmed_at){


setError(
"Please confirm your email before logging in."
);


await supabase.auth.signOut();


setLoading(false);


return;


}







setLoading(false);



navigate("/dashboard");



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
transition-colors
duration-300


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






{/* LOGIN CARD */}




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
p-8
max-w-lg
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


Welcome Back


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

Login to your account

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

Continue building smarter startups with AI.

</p>





<form

onSubmit={handleLogin}

className="mt-7 space-y-5"

>





<div>

<label className="block mb-2 font-medium dark:text-gray-200">

Email

</label>



<input


type="email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


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
dark:bg-white/10
dark:text-white

"


/>



</div>







<div>


<label className="block mb-2 font-medium dark:text-gray-200">

Password

</label>





<input


type="password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


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
dark:bg-white/10
dark:text-white

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

"

>

{error}


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

"Logging in..."

:

"Login"

}



</motion.button>



</form>







<p

className={`

text-center
mt-6


${
darkMode

?

"text-gray-300"

:

"text-gray-500"

}

`}

>


Don't have an account?



<Link

to="/signup"

className="

text-[#1F7A8C]
font-semibold
ml-2
hover:underline

"

>

Sign Up

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

"


>


<Rocket

size={48}

className="text-[#1F7A8C]"

/>







<h2 className="text-4xl font-bold mt-6">

Welcome back.

<br/>

Continue your startup journey.

</h2>









<p

className="text-gray-300 mt-5"

>

Continue analyzing startup ideas,
discovering opportunities, and creating
investor-ready pitches with AI.

</p>




<div className="mt-8 space-y-4">





<div className="flex items-center gap-3">


<ShieldCheck

className="text-[#1F7A8C]"

/>


Access your saved analyses


</div>








<div className="flex items-center gap-3">


<ShieldCheck

className="text-[#1F7A8C]"

/>


Track startup progress


</div>









<div className="flex items-center gap-3">


<ShieldCheck

className="text-[#1F7A8C]"

/>


Generate better pitches


</div>







</div>







</div>



</motion.div>









</div>


</section>


);


}



export default Login;