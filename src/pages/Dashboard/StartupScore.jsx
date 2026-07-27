import { TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


function StartupScore({ analysis }) {


  if (!analysis) return null;


  const score = analysis.score;



  let message = "Needs Improvement";


  if (score >= 80) {

    message = "Excellent Opportunity";

  }

  else if (score >= 60) {

    message = "Strong Potential";

  }

  else if (score >= 40) {

    message = "Promising Idea";

  }






  return (


    <section className="mb-10 w-full">


      <motion.div


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



        className="

          bg-white

          dark:bg-gray-900

          border

          border-gray-200

          dark:border-gray-700

          rounded-3xl

          p-4

          md:p-8

          shadow-sm

          w-full

        "


      >







{/* Header */}


        <div

          className="

            flex

            items-center

            gap-3

            mb-8

          "

        >




          <div


            className="

              w-10

              h-10

              md:w-12

              md:h-12


              rounded-2xl


              bg-[#E1E5F2]


              flex

              items-center

              justify-center

            "


          >



            <Sparkles

              size={25}

              className="text-[#1F7A8C]"

            />



          </div>






          <div>



            <h3


              className="

                text-lg

                md:text-xl


                font-bold


                text-[#022B3A]


                dark:text-white


              "


            >


              Startup Potential Score



            </h3>






            <p


              className="

                text-sm


                text-gray-500


                dark:text-gray-400


              "


            >


              AI evaluation of your startup idea.



            </p>





          </div>




        </div>









        {/* Main Content */}


        <div


          className="

            flex

            flex-col


            md:flex-row


            items-center


            md:items-start


            gap-6


            md:gap-10


          "


        >







{/* Score Circle */}



          <motion.div


            whileHover={{

              scale:1.05

            }}



            className="


              w-32

              h-32


              md:w-44


              md:h-44



              rounded-full



              bg-[#BFDBF7]



              flex


              flex-col


              items-center


              justify-center



              shadow-inner



              flex-shrink-0



            "


          >




            <h2


              className="


                text-4xl


                md:text-5xl



                font-bold



                text-[#022B3A]



              "


            >



              {score}



            </h2>





            <span


              className="

                text-gray-600

              "


            >


              /100



            </span>




          </motion.div>

{/* Result Content */}


          <div


            className="

              flex-1

              w-full

              text-center

              md:text-left

            "


          >







            <div


              className="


                flex


                items-center



                justify-center



                md:justify-start



                gap-3



                mb-4



              "


            >





              <TrendingUp


                size={28}


                className="text-[#1F7A8C]"


              />







              <h4


                className="


                  text-xl


                  md:text-2xl



                  font-bold



                  text-[#022B3A]



                  dark:text-white



                "


              >


                {message}



              </h4>






            </div>









            <p


              className="


                text-sm


                md:text-lg



                text-gray-500



                dark:text-gray-400



                leading-relaxed



              "


            >



              PitchPilot AI analyzed your startup idea
              based on market demand, scalability,
              competition, and investment potential.



            </p>












            {/* Progress Bar */}





            <div className="mt-6">






              <div


                className="


                  w-full



                  h-3



                  rounded-full



                  bg-[#E1E5F2]



                  overflow-hidden



                "


              >






                <motion.div



                  initial={{


                    width:0


                  }}



                  animate={{


                    width:`${score}%`


                  }}



                  transition={{


                    duration:1


                  }}



                  className="


                    h-full



                    bg-[#1F7A8C]



                    rounded-full



                  "



                />






              </div>







            </div>







          </div>









        </div>








      </motion.div>







    </section>





  );

}





export default StartupScore;