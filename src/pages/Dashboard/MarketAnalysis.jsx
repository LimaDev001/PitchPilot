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


    <section className="mb-10 w-full">





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

        bg-white
        dark:bg-gray-900

        border
        border-gray-200
        dark:border-gray-700

        rounded-3xl

        p-6
        sm:p-8

        shadow-sm

        "


      >






        <h3

          className="

          text-3xl

          font-bold

          text-[#022B3A]
          dark:text-white

          mb-6

          "

        >

          Market Opportunity Analysis


        </h3>









        <div

          className="

          grid

          grid-cols-1
          md:grid-cols-2

          gap-6

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

                  duration:.4,
                  delay:index * .1

                }}



                className="


                w-full

                p-6

                rounded-2xl

                bg-[#F5F7FA]

                dark:bg-gray-800

                "



              >









                <div

                  className="

                  flex

                  items-center

                  gap-3

                  mb-4

                  "

                >





                  <div

                    className="

                    w-12

                    h-12

                    rounded-xl

                    bg-[#BFDBF7]

                    flex

                    items-center

                    justify-center

                    "

                  >



                    <Icon

                      size={24}

                      className="text-[#1F7A8C]"

                    />



                  </div>









                  <h4

                    className="

                    text-xl

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