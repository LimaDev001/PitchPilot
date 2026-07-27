import { Sparkles, ArrowRight, Rocket, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


function HeroCard() {


  const navigate = useNavigate();


  const [name,setName] = useState("Founder");




  useEffect(()=>{


    async function getUser(){


      const { data } = await supabase.auth.getUser();



      if(data.user){


        const email = data.user.email;


        const userName =
        data.user.user_metadata?.name;




        if(email === "limarahimzai@gmail.com"){


          setName("Founder");


        }else if(userName){


          setName(userName);


        }


      }


    }



    getUser();


  },[]);







  return (


    <motion.section


      initial={{
        opacity:0,
        y:30
      }}


      animate={{
        opacity:1,
        y:0
      }}


      transition={{
        duration:.6
      }}


      className="mb-10"


    >





      <div


      className="

      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-[#022B3A]
      via-[#1F7A8C]
      to-[#0F4C5C]
      p-10
      text-white
      shadow-2xl

      "


      >







        {/* Floating background */}


        <motion.div


        animate={{

          y:[0,20,0]

        }}


        transition={{

          duration:6,

          repeat:Infinity

        }}


        className="

        absolute
        -right-20
        -top-20
        h-56
        w-56
        rounded-full
        bg-[#BFDBF7]/20
        blur-3xl

        "


        />







        <motion.div


        animate={{

          y:[0,-15,0],

          rotate:[0,8,0]

        }}


        transition={{

          duration:5,

          repeat:Infinity

        }}


        className="

        absolute
        right-10
        bottom-5
        opacity-20

        "


        >

          <Rocket size={90}/>


        </motion.div>









        <div


        className="

        relative
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-8

        "


        >






          <div className="max-w-2xl">






            <div


            className="

            inline-flex
            items-center
            gap-2
            bg-white/10
            border
            border-white/20
            px-4
            py-2
            rounded-full
            mb-6

            "


            >


              <Sparkles size={18}/>


              <span className="text-sm font-medium">

                AI Startup Coach

              </span>


            </div>









            <h2


            className="

            text-4xl
            font-bold
            leading-tight

            "


            >





              <div className="flex items-center gap-3">


                <span>

                  Hi, {name}

                </span>





                {/* Modern waving hand icon */}


                <motion.div


                animate={{

                  rotate:[0,20,0]

                }}


                transition={{

                  duration:1.5,

                  repeat:Infinity

                }}


                >


                  <Hand

                    size={34}

                    className="text-[#BFDBF7]"

                  />


                </motion.div>




              </div>






              <br/>


              Ready to build your next big idea?



            </h2>









            <p


            className="

            mt-5
            text-[#E1E5F2]
            text-lg
            leading-relaxed

            "


            >


              PitchPilot helps you validate startup ideas,
              discover opportunities, analyze risks,
              and create investor-ready strategies with AI.



            </p>








          </div>









          <motion.button


          whileHover={{

            scale:1.05

          }}


          whileTap={{

            scale:.95

          }}



          onClick={()=>navigate("/new-analysis")}



          className="

          bg-white
          text-[#022B3A]
          px-8
          py-4
          rounded-2xl
          font-semibold
          flex
          items-center
          gap-3
          shadow-xl
          transition

          "


          >


            Start Analysis


            <ArrowRight size={20}/>



          </motion.button>







        </div>






      </div>






    </motion.section>


  );

}



export default HeroCard;