import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import HeroVisual from "./HeroVisual";


function Hero() {


  const { darkMode } = useTheme();



  return (

    <section

      className={`

        relative
        overflow-hidden
        min-h-screen
        flex
        items-center

        pt-36
        pb-16

        transition-colors
        duration-300


        ${
          darkMode

          ?

          "bg-[#022B3A]"

          :

          "bg-gradient-to-br from-white via-[#E1E5F2] to-[#BFDBF7]"

        }

      `}

    >





      {/* Background Glow */}



      <div

        className="

          absolute
          -top-32
          -left-32
          w-96
          h-96
          bg-[#1F7A8C]/20
          rounded-full
          blur-3xl

        "

      />





      <div

        className="

          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-[#BFDBF7]/40
          rounded-full
          blur-3xl

        "

      />









      <div

        className="

          max-w-7xl
          mx-auto
          w-full
          px-6

        "

      >







        <div

          className="

            grid
            lg:grid-cols-[60%_40%]
            gap-14
            items-center
            justify-items-center

          "

        >







          {/* TEXT */}



          <motion.div


            className="

              flex
              flex-col
              items-center
              justify-center
              text-center
              w-full
              lg:-translate-x-8

            "


            initial={{
              opacity:0,
              y:40
            }}


            animate={{
              opacity:1,
              y:0
            }}


            transition={{
              duration:.7
            }}

          >







            {/* Badge */}



            <div

              className={`


                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                mb-8



                ${
                  darkMode

                  ?

                  "bg-white/10 border-white/20"

                  :

                  "bg-white border-[#E1E5F2]"

                }


              `}

            >



              <Sparkles

                size={18}

                className="text-[#1F7A8C]"

              />




              <span

                className={`


                  font-medium



                  ${
                    darkMode

                    ?

                    "text-white"

                    :

                    "text-[#022B3A]"

                  }


                `}

              >

                AI Startup Validation Platform


              </span>



            </div>









            {/* Heading */}



            <h1

              className={`


                text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                leading-tight
                max-w-3xl



                ${
                  darkMode

                  ?

                  "text-white"

                  :

                  "text-[#022B3A]"

                }


              `}

            >


              Validate Your Startup



              <span

                className="

                  block
                  text-[#1F7A8C]

                "

              >

                Ideas With AI


              </span>


            </h1>









            {/* Description */}



            <p

              className={`


                mt-6
                text-lg
                leading-8
                max-w-xl



                ${
                  darkMode

                  ?

                  "text-[#E1E5F2]"

                  :

                  "text-[#022B3A]/70"

                }


              `}

            >

              PitchPilot helps founders analyze ideas,
              discover opportunities, understand risks,
              and create investor-ready pitches using AI.


            </p>









            {/* CTA */}



            <div

              className="

                flex
                justify-center
                mt-8

              "

            >



              <Link

                to="/new-analysis"


                className="


                  flex
                  items-center
                  gap-2

                  bg-[#1F7A8C]

                  hover:bg-[#022B3A]

                  text-white

                  px-8
                  py-4

                  rounded-2xl

                  font-semibold

                  shadow-lg

                  transition

                "

              >


                Start Analysis


                <ArrowRight size={18}/>


              </Link>



            </div>







          </motion.div>









          {/* AI CARD */}




          <motion.div


            className="

              flex
              justify-center
              items-center
              w-full

            "


            initial={{

              opacity:0,

              scale:.9

            }}


            animate={{

              opacity:1,

              scale:1

            }}


            transition={{

              duration:.8

            }}


          >


            <HeroVisual />


          </motion.div>






        </div>






      </div>






    </section>


  );

}



export default Hero;