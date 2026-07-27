import {
  Brain,
  BarChart3,
  Briefcase,
  Presentation,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";


const features = [

  {
    icon: Brain,
    title: "AI Idea Analysis",
    description:
      "Understand your startup idea, target audience, and business potential.",
  },

  {
    icon: BarChart3,
    title: "SWOT Analysis",
    description:
      "Generate strengths, weaknesses, opportunities, and threats instantly.",
  },

  {
    icon: Briefcase,
    title: "Business Strategy",
    description:
      "Receive AI-powered business models and monetization suggestions.",
  },

  {
    icon: Presentation,
    title: "Investor Pitch",
    description:
      "Create a clear, professional pitch ready to present to investors.",
  },

];





function Features() {


  const { darkMode } = useTheme();




  return (

    <section

      id="features"

      className={`

        pt-40
        pb-28
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

          className="text-center mb-16"


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

            Features

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

            Everything you need to validate your startup


          </h2>








          <p

            className={`

              text-lg
              mt-6
              max-w-3xl
              mx-auto


              ${
                darkMode

                ?

                "text-gray-300"

                :

                "text-gray-500"

              }


            `}

          >

            PitchPilot combines AI with startup strategy
            to help founders make smarter decisions
            before investing time and money.


          </p>






        </motion.div>









        {/* Feature Cards */}




        <div

          className="

            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8

          "

        >







          {
            features.map((feature,index)=>{


              const Icon = feature.icon;




              return (


                <motion.div



                  key={index}




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

                    delay:index * .1

                  }}




                  className={`



                    rounded-3xl

                    p-8

                    border

                    transition

                    duration-300

                    hover:-translate-y-2

                    hover:shadow-xl




                    ${
                      darkMode

                      ?

                      "bg-white/10 border-white/20"

                      :

                      "bg-[#F8FAFC] border-[#E1E5F2]"

                    }



                  `}



                >







                  {/* Icon Background */}





                  <div

                    className={`


                      w-16

                      h-16

                      rounded-2xl

                      flex

                      items-center

                      justify-center

                      mb-6




                      ${
                        darkMode

                        ?

                        "bg-white/10"

                        :

                        "bg-[#BFDBF7]"

                      }



                    `}

                  >





                    <Icon

                      size={32}

                      className="text-[#1F7A8C]"

                    />





                  </div>









                  {/* Title */}





                  <h3

                    className={`



                      text-2xl

                      font-bold

                      mb-4




                      ${
                        darkMode

                        ?

                        "text-white"

                        :

                        "text-[#022B3A]"

                      }



                    `}

                  >


                    {feature.title}


                  </h3>









                  {/* Description */}





                  <p

                    className={`



                      leading-relaxed




                      ${
                        darkMode

                        ?

                        "text-gray-300"

                        :

                        "text-gray-500"

                      }



                    `}

                  >


                    {feature.description}


                  </p>







                </motion.div>



              );


            })
          }





        </div>







      </div>






    </section>


  );

}



export default Features;