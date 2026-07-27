import {
  Presentation,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";



function InvestorPitchCard({ analysis }) {


  const [copied, setCopied] = useState(false);



  if (!analysis) return null;





  const copyPitch = () => {


    navigator.clipboard.writeText(analysis.pitch);


    setCopied(true);



    setTimeout(()=>{

      setCopied(false);

    },2000);


  };







  return (


    <section className="mb-10">



      <motion.div


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



        className="
          rounded-3xl
          p-8
          shadow-xl
          overflow-hidden
          relative
          bg-gradient-to-br
          from-[#022B3A]
          via-[#1F7A8C]
          to-[#022B3A]
          text-white
        "


      >





        {/* Glow */}


        <div

          className="
            absolute
            -right-20
            -top-20
            w-64
            h-64
            rounded-full
            bg-[#BFDBF7]/20
            blur-3xl
          "

        />







        <div className="relative">





          {/* Header */}



          <div className="flex items-center gap-4 mb-8">


            <div

              className="
                w-14
                h-14
                rounded-2xl
                bg-[#BFDBF7]
                flex
                items-center
                justify-center
              "

            >


              <Presentation

                size={30}

                className="text-[#022B3A]"

              />


            </div>





            <div>


              <h3 className="text-2xl font-bold">

                Investor Pitch Generator

              </h3>



              <p className="text-white/80">

                AI-generated investor-ready pitch.

              </p>


            </div>



          </div>









          {/* Pitch Box */}



          <div

            className="
              bg-white/10
              border
              border-white/20
              rounded-3xl
              p-6
              backdrop-blur-md
            "

          >




            <div className="flex items-center gap-3 mb-5">



              <Sparkles

                size={24}

                className="text-[#BFDBF7]"

              />



              <h4 className="text-lg font-bold">

                Pitch Summary

              </h4>


            </div>






            <p

              className="
                text-white/90
                leading-relaxed
              "

            >

              {analysis.pitch}


            </p>





          </div>









          {/* Copy Button */}



          <motion.button


            whileHover={{
              scale:1.05
            }}


            whileTap={{
              scale:.97
            }}



            onClick={copyPitch}



            className="
              mt-8
              bg-white
              text-[#022B3A]
              px-8
              py-4
              rounded-2xl
              font-semibold
              flex
              items-center
              gap-3
              shadow-lg
              transition
            "


          >



            {

              copied

              ?

              <Check size={20}/>

              :

              <Copy size={20}/>


            }



            {

              copied

              ?

              "Copied!"

              :

              "Copy Investor Pitch"


            }



          </motion.button>





        </div>




      </motion.div>



    </section>


  );

}



export default InvestorPitchCard;