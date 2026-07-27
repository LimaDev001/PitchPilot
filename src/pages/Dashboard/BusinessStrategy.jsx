import { BriefcaseBusiness, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";


function BusinessStrategy({ analysis }) {


  if (!analysis?.businessStrategy) return null;


  const data = analysis.businessStrategy;



  const cards = [

    {
      title: "Business Model",
      icon: BriefcaseBusiness,
      text: data.businessModel
    },


    {
      title: "Monetization",
      icon: DollarSign,
      text: data.monetization
    },


    {
      title: "Growth Strategy",
      icon: TrendingUp,
      text: data.growthStrategy
    }

  ];





  return (


    <section className="mb-10">


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
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-700
        rounded-3xl
        p-8
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

          Business Strategy Generator


        </h3>






        <div

          className="
          grid
          md:grid-cols-3
          gap-6
          "

        >


          {
            cards.map((item,index)=>{


              const Icon = item.icon;



              return (


                <motion.div


                  key={index}


                  whileHover={{
                    y:-5
                  }}



                  className="
                  p-6
                  rounded-2xl
                  bg-[#F5F7FA]
                  dark:bg-gray-800
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
                    mb-4
                    "

                  >

                    <Icon

                      size={24}

                      className="text-[#1F7A8C]"

                    />


                  </div>





                  <h4

                    className="
                    font-bold
                    text-lg
                    text-[#022B3A]
                    dark:text-white
                    mb-3
                    "

                  >

                    {item.title}


                  </h4>





                  <p

                    className="
                    text-gray-600
                    dark:text-gray-300
                    leading-relaxed
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


export default BusinessStrategy;