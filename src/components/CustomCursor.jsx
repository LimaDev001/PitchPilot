import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";


function CustomCursor(){


  const [position,setPosition] = useState({

    x:0,

    y:0

  });


  const [show,setShow] = useState(false);


  const { darkMode } = useTheme();





  useEffect(()=>{



    function move(e){


      setPosition({

        x:e.clientX,

        y:e.clientY

      });


      setShow(true);


    }





    function mouseLeave(){


      setShow(false);


    }





    function mouseEnter(){


      setShow(true);


    }







    document.addEventListener(

      "mousemove",

      move

    );



    document.addEventListener(

      "mouseleave",

      mouseLeave

    );



    document.addEventListener(

      "mouseenter",

      mouseEnter

    );







    return()=>{


      document.removeEventListener(

        "mousemove",

        move

      );


      document.removeEventListener(

        "mouseleave",

        mouseLeave

      );


      document.removeEventListener(

        "mouseenter",

        mouseEnter

      );


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

        pointer-events-none

        z-[999999]

        "


        style={{

          left:position.x,

          top:position.y,

          transform:"translate(-50%, -50%)"

        }}



      >


        <Send


          size={18}


          strokeWidth={2.5}


          className={`

          drop-shadow-lg


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