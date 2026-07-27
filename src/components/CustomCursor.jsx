import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";


function CustomCursor(){


const target = useRef({
  x:0,
  y:0
});


const [position,setPosition] = useState({
  x:0,
  y:0
});


const [show,setShow] = useState(false);


const { darkMode } = useTheme();






useEffect(()=>{


function move(e){


target.current = {

x:e.clientX,

y:e.clientY

};


setShow(true);


}





window.addEventListener(
"mousemove",
move
);






let animation;



function animate(){


setPosition(prev=>({


x:
prev.x +
(target.current.x - prev.x) * 0.9,


y:
prev.y +
(target.current.y - prev.y) * 0.9


}));


animation = requestAnimationFrame(
animate
);


}






animate();







return()=>{


window.removeEventListener(
"mousemove",
move
);


cancelAnimationFrame(animation);


};



},[]);







if(!show) return null;








return(


<>


<style>

{`

*{

cursor:none !important;

}

`}

</style>









<div


className="

fixed

z-[9999]

pointer-events-none

"



style={{


left:position.x,

top:position.y


}}



>


<Send


size={18}


strokeWidth={2.5}


className={`

drop-shadow-lg


transition-colors

duration-300


${

darkMode

?

"text-[#BFDBF7]"

:

"text-[#022B3A]"

}

`}



style={{


transform:"rotate(-90deg)"


}}



/>


</div>







</>


);


}



export default CustomCursor;