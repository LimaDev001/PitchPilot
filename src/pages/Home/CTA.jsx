import { Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";


function CTA() {


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

          "bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7]"

        }


      `}

    >





      <motion.div


        className="

          max-w-5xl
          mx-auto
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
          duration:.7
        }}


      >









        {/* Icon */}



        <div

          className="

            flex
            justify-center
            mb-6

          "

        >



          <div

            className="

              bg-[#1F7A8C]
              text-white
              p-4
              rounded-2xl
              shadow-lg

            "

          >

            <Rocket size={32}/>


          </div>


        </div>









        {/* Title */}



        <h2


          className={`


            text-4xl
            md:text-5xl
            font-bold



            ${
              darkMode

              ?

              "text-white"

              :

              "text-[#022B3A]"

            }


          `}


        >

          Ready to launch your startup idea?


        </h2>









        {/* Description */}



        <p


          className={`


            text-lg
            mt-6
            max-w-2xl
            mx-auto



            ${
              darkMode

              ?

              "text-[#E1E5F2]"

              :

              "text-[#022B3A]/70"

            }


          `}


        >

          Validate your idea, discover opportunities,
          and create investor-ready pitches with AI.


        </p>









        {/* Button */}



        <Link

          to="/new-analysis"


          className="


            mt-10
            inline-flex
            items-center
            gap-2

            bg-[#1F7A8C]

            hover:bg-[#022B3A]

            text-white

            px-8
            py-4

            rounded-2xl

            text-lg

            font-semibold

            transition

            shadow-lg

            hover:scale-105


          "


        >

          Start Your Analysis


          <ArrowRight size={20}/>


        </Link>






      </motion.div>






    </section>


  );

}


export default CTA;