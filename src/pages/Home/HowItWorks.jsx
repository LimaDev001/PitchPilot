import {
  Lightbulb,
  Brain,
  BarChart3,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";


const steps = [

  {
    icon: Lightbulb,
    title: "Share Your Idea",
    description:
      "Describe your startup idea in a few sentences.",
  },

  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "PitchPilot analyzes your idea, audience, and business potential.",
  },

  {
    icon: BarChart3,
    title: "Business Insights",
    description:
      "Receive SWOT analysis, market opportunities, and strategy recommendations.",
  },

  {
    icon: Rocket,
    title: "Launch Your Pitch",
    description:
      "Generate an investor-ready pitch and present with confidence.",
  },

];




function HowItWorks() {


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

          ?

          "bg-[#022B3A]"

          :

          "bg-white"

        }


      `}

    >





      <div className="max-w-7xl mx-auto">






        {/* Heading */}


        <motion.div

          className="text-center mb-20"


          initial={{
            opacity:0,
            y:40
          }}


          whileInView={{
            opacity:1,
            y:0
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

            How It Works

          </p>







          <h2

            className={`


              text-4xl
              md:text-5xl
              font-bold
              mt-4


              ${
                darkMode

                ?

                "text-white"

                :

                "text-[#022B3A]"

              }


            `}

          >

            Four simple steps to build with confidence


          </h2>








          <p

            className={`


              text-lg
              max-w-3xl
              mx-auto
              mt-6


              ${
                darkMode

                ?

                "text-[#E1E5F2]"

                :

                "text-[#022B3A]/70"

              }


            `}

          >

            From a simple idea to an investor-ready pitch,
            PitchPilot guides founders through startup validation.


          </p>



        </motion.div>









        {/* Steps */}



        <div

          className="
            grid
            md:grid-cols-4
            gap-10
            relative
          "

        >







          {steps.map((step,index)=>{


            const Icon = step.icon;



            return (


              <motion.div


                key={index}


                className="
                  relative
                  text-center
                "



                initial={{
                  opacity:0,
                  y:40
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  duration:.5,
                  delay:index * .15
                }}


              >









                {/* Line */}



                {index !== steps.length - 1 && (


                  <div


                    className={`


                      hidden
                      md:block
                      absolute
                      top-10
                      left-1/2
                      w-full
                      h-[2px]
                      -z-10


                      ${
                        darkMode

                        ?

                        "bg-[#BFDBF7]/30"

                        :

                        "bg-[#BFDBF7]"

                      }


                    `}


                  />


                )}









                {/* Icon */}



                <div


                  className={`


                    w-20
                    h-20
                    mx-auto
                    rounded-full
                    border-4
                    border-[#1F7A8C]
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    transition
                    hover:scale-110


                    ${
                      darkMode

                      ?

                      "bg-[#1F7A8C]/20"

                      :

                      "bg-white"

                    }


                  `}


                >


                  <Icon

                    size={34}

                    className="
                      text-[#1F7A8C]
                    "

                  />


                </div>









                {/* Step Number */}



                <div className="mt-5">


                  <span

                    className="
                      text-sm
                      font-bold
                      text-[#1F7A8C]
                    "

                  >

                    Step {index + 1}

                  </span>


                </div>









                {/* Title */}



                <h3


                  className={`


                    text-xl
                    font-bold
                    mt-3


                    ${
                      darkMode

                      ?

                      "text-white"

                      :

                      "text-[#022B3A]"

                    }


                  `}


                >

                  {step.title}


                </h3>









                {/* Description */}



                <p


                  className={`


                    mt-4
                    leading-relaxed
                    px-3


                    ${
                      darkMode

                      ?

                      "text-[#E1E5F2]"

                      :

                      "text-[#022B3A]/70"

                    }


                  `}


                >

                  {step.description}


                </p>






              </motion.div>


            );


          })}



        </div>





      </div>


    </section>

  );

}



export default HowItWorks;