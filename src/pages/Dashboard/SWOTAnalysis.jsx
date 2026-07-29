import {
  ShieldCheck,
  AlertTriangle,
  Rocket,
  Target,
} from "lucide-react";

import { motion } from "framer-motion";


function SWOTAnalysis({ analysis }) {


  if (!analysis) return null;



  const swotData = [

    {
      title: "Strengths",
      icon: ShieldCheck,
      color: "text-[#1F7A8C]",
      bg: "bg-[#BFDBF7]",
      items: analysis.strengths,
    },


    {
      title: "Weaknesses",
      icon: AlertTriangle,
      color: "text-[#1F7A8C]",
      bg: "bg-[#E1E5F2]",
      items: analysis.weaknesses,
    },


    {
      title: "Opportunities",
      icon: Rocket,
      color: "text-[#1F7A8C]",
      bg: "bg-[#BFDBF7]",
      items: analysis.opportunities,
    },


    {
      title: "Threats",
      icon: Target,
      color: "text-[#1F7A8C]",
      bg: "bg-[#E1E5F2]",
      items: analysis.threats,
    },


  ];






  return (


    <section className="mb-10 w-full max-w-full overflow-hidden">





      {/* Header */}


      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.5
        }}

        className="mb-6"

      >


        <h3

          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#022B3A]
            dark:text-white
            break-words
          "

        >

          SWOT Analysis


        </h3>




        <p

          className="
            text-gray-500
            dark:text-gray-400
            mt-2
            text-sm
            sm:text-base
            break-words
          "

        >

          AI-generated overview of your startup position.


        </p>



      </motion.div>









      {/* Cards */}



      <div

        className="
          grid
          grid-cols-1
          gap-5
          w-full
          max-w-full
        "

      >





        {
          swotData.map((item,index)=>{


            const Icon = item.icon;



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
                  delay:index*.1
                }}


                className="
                  w-full
                  max-w-full
                  overflow-hidden
                  bg-white
                  dark:bg-gray-900
                  border
                  border-[#E1E5F2]
                  dark:border-gray-700
                  rounded-3xl
                  p-4
                  sm:p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition
                  duration-300
                "

              >







                <div

                  className="
                    flex
                    items-center
                    gap-3
                    mb-5
                  "

                >




                  <div

                    className={`

                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-2xl

                      ${item.bg}

                      flex
                      items-center
                      justify-center
                      flex-shrink-0

                    `}

                  >


                    <Icon

                      size={26}

                      className={item.color}

                    />


                  </div>





                  <h4

                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      text-[#022B3A]
                      dark:text-white
                      break-words
                    "

                  >

                    {item.title}


                  </h4>





                </div>









                <ul className="space-y-3 w-full">


                  {
                    item.items?.map((point,i)=>(


                      <li

                        key={i}

                        className="
                          text-gray-600
                          dark:text-gray-300
                          flex
                          gap-3
                          leading-relaxed
                          break-words
                          overflow-wrap-anywhere
                          text-sm
                          sm:text-base
                        "

                      >


                        <span className="
                          text-[#1F7A8C]
                          font-bold
                          flex-shrink-0
                        ">

                          ✓

                        </span>


                        <span className="break-words">

                          {point}

                        </span>


                      </li>


                    ))

                  }



                </ul>





              </motion.div>



            );


          })


        }







      </div>







    </section>


  );


}



export default SWOTAnalysis;