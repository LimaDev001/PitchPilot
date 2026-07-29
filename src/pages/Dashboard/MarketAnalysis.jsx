import { Target, TrendingUp, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";


function MarketAnalysis({ analysis }) {


  if (!analysis?.marketAnalysis) return null;


  const data = analysis.marketAnalysis;


  const cards = [

    {
      title: "Target Users",
      icon: Users,
      text: data.targetUsers
    },

    {
      title: "Market Demand",
      icon: TrendingUp,
      text: data.marketDemand
    },

    {
      title: "Competitors",
      icon: Building2,
      text: data.competitors?.join(", ")
    },

    {
      title: "Growth Opportunity",
      icon: Target,
      text: data.growthOpportunity
    }

  ];





  return (

    <section

      className="
        mb-10
        w-full
        flex
        justify-center
      "

    >



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



        className="

          w-full
          max-w-5xl
          mx-auto

          bg-white
          dark:bg-gray-900

          border
          border-gray-200
          dark:border-gray-700

          rounded-3xl

          p-4
          sm:p-6
          md:p-8

          shadow-sm

        "


      >





        <h3

          className="

            text-2xl
            sm:text-3xl

            font-bold

            text-[#022B3A]
            dark:text-white

            mb-6

            text-center

          "

        >

          Market Opportunity Analysis


        </h3>









        <div

          className="

            grid

            grid-cols-1
            md:grid-cols-2

            gap-5

            w-full

            justify-items-center

          "

        >



        {

          cards.map((item,index)=>{


            const Icon = item.icon;



            return (



              <motion.div


                key={index}



                initial={{

                  opacity:0,
                  y:20

                }}



                whileInView={{

                  opacity:1,
                  y:0

                }}



                viewport={{

                  once:true

                }}



                transition={{

                  duration:.4

                }}



                className="


                  w-full
                  max-w-md


                  p-4
                  sm:p-5


                  rounded-2xl


                  bg-[#F5F7FA]

                  dark:bg-gray-800


                "


              >






                <div

                  className="

                    flex
                    items-center

                    justify-center

                    gap-3

                    mb-3

                    text-center

                  "

                >



                  <Icon

                    className="
                      text-[#1F7A8C]
                      flex-shrink-0
                    "

                    size={24}

                  />





                  <h4

                    className="

                      font-bold

                      text-[#022B3A]

                      dark:text-white

                    "

                  >

                    {item.title}


                  </h4>




                </div>









                <p

                  className="

                    text-gray-600

                    dark:text-gray-300

                    leading-relaxed

                    text-sm
                    sm:text-base

                    text-center

                    break-words

                  "

                >

                  {item.text || "No information available"}


                </p>





              </motion.div>


            );


          })

        }



        </div>





      </motion.div>




    </section>


  );

}


export default MarketAnalysis;