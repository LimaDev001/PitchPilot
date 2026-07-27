import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";


function RiskAnalysis({ analysis }) {


  if (!analysis?.risks) return null;



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




        <div className="
          flex
          items-center
          gap-4
          mb-6
        ">



          <div

            className="
            w-14
            h-14
            rounded-2xl
            bg-[#E1E5F2]
            flex
            items-center
            justify-center
            "

          >

            <AlertTriangle

              size={28}

              className="text-[#1F7A8C]"

            />


          </div>





          <div>


            <h3

              className="
              text-3xl
              font-bold
              text-[#022B3A]
              dark:text-white
              "

            >

              Risk Evaluation


            </h3>



            <p

              className="
              text-gray-500
              dark:text-gray-400
              "

            >

              AI identified challenges your startup may face.

            </p>



          </div>



        </div>







        <div className="space-y-4">


          {

            analysis.risks.map((risk,index)=>(


              <motion.div


                key={index}


                whileHover={{
                  x:5
                }}


                className="
                flex
                gap-4
                items-start
                p-5
                rounded-2xl
                bg-[#F5F7FA]
                dark:bg-gray-800
                "


              >



                <span

                  className="
                  w-8
                  h-8
                  rounded-full
                  bg-[#1F7A8C]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  flex-shrink-0
                  "

                >

                  !

                </span>





                <p

                  className="
                  text-gray-600
                  dark:text-gray-300
                  leading-relaxed
                  "

                >

                  {risk}


                </p>




              </motion.div>


            ))

          }


        </div>




      </motion.div>


    </section>


  );


}


export default RiskAnalysis;