import {
  CheckCircle,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";



const benefits = [

  "Validate ideas before investing time and money.",

  "Discover market opportunities with AI insights.",

  "Reduce startup risks before development.",

  "Generate investor-ready startup pitches.",

];





function WhyPitchPilot() {


  const { darkMode } = useTheme();



  return (

    <section

      className={`

        py-24
        px-6
        transition-colors
        duration-300


        ${
          darkMode
          ? "bg-[#022B3A]"
          : "bg-white"
        }


      `}

    >






      <div

        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[6fr_4fr]
          gap-12
          items-center
        "

      >







        {/* Left */}



        <motion.div


          className="
            flex
            flex-col
            items-center
            text-center
          "



          initial={{
            opacity:0,
            x:-50
          }}


          whileInView={{
            opacity:1,
            x:0
          }}


          viewport={{
            once:true
          }}


          transition={{
            duration:.6
          }}


        >






          <p

            className="
              text-[#1F7A8C]
              font-semibold
              uppercase
              tracking-widest
            "

          >

            Why PitchPilot


          </p>









          <h2

            className={`

              text-4xl
              md:text-5xl
              font-bold
              mt-4
              leading-tight


              ${
                darkMode
                ? "text-white"
                : "text-[#022B3A]"
              }


            `}

          >

            Build with confidence,
            <br />
            not with guesswork.


          </h2>









          <p

            className={`

              text-lg
              mt-6
              max-w-xl


              ${
                darkMode
                ? "text-gray-300"
                : "text-gray-500"
              }


            `}

          >

            PitchPilot helps founders validate ideas before
            writing code or spending money, making smarter
            startup decisions with AI.


          </p>









          {/* Benefits */}



          <div className="mt-10 space-y-5 text-left">



            {
              benefits.map((item,index)=>(


                <motion.div


                  key={index}


                  className="
                    flex
                    items-start
                    gap-4
                  "


                  initial={{
                    opacity:0,
                    x:-20
                  }}


                  whileInView={{
                    opacity:1,
                    x:0
                  }}


                  viewport={{
                    once:true
                  }}


                  transition={{
                    delay:index*.1
                  }}


                >



                  <CheckCircle

                    className="
                      text-[#1F7A8C]
                      mt-1
                    "

                    size={24}

                  />





                  <p

                    className={`

                      text-lg


                      ${
                        darkMode
                        ? "text-gray-200"
                        : "text-gray-700"
                      }


                    `}

                  >

                    {item}


                  </p>




                </motion.div>


              ))
            }



          </div>





        </motion.div>













        {/* Score Card */}





        <motion.div


          className="
            flex
            justify-center
          "



          initial={{
            opacity:0,
            x:50
          }}


          whileInView={{
            opacity:1,
            x:0
          }}


          viewport={{
            once:true
          }}


          transition={{
            duration:.6
          }}


        >






          <div


            className={`

              rounded-3xl
              p-10
              w-[380px]
              shadow-2xl


              ${
                darkMode
                ? "bg-white/10 border border-white/20"
                : "bg-[#022B3A]"
              }


            `}


          >







            <div className="flex items-center gap-3 mb-8">


              <TrendingUp

                size={32}

                className="text-[#BFDBF7]"

              />


              <h3 className="text-2xl font-bold text-white">

                Startup Score

              </h3>


            </div>









            <div>



              <p className="text-gray-300">

                AI Confidence

              </p>



              <h2

                className="
                  text-5xl
                  font-bold
                  text-[#BFDBF7]
                  mt-2
                "

              >

                95%

              </h2>



            </div>









            <div

              className="
                border-t
                border-white/20
                mt-8
                pt-6
                space-y-4
                text-white
              "

            >



              <div className="flex justify-between">

                <span className="text-gray-300">

                  Market Potential

                </span>

                <span>

                  High

                </span>

              </div>





              <div className="flex justify-between">


                <span className="text-gray-300">

                  Risk Level

                </span>


                <span>

                  Medium

                </span>


              </div>






              <div className="flex justify-between">


                <span className="text-gray-300">

                  Investor Ready

                </span>


                <span className="text-[#BFDBF7]">

                  ✓

                </span>


              </div>





            </div>






          </div>





        </motion.div>








      </div>




    </section>

  );


}



export default WhyPitchPilot;