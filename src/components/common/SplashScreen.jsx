import { motion } from "framer-motion";


function SplashScreen() {

  return (

    <div
      className="
      fixed
      inset-0
      bg-[#022B3A]
      flex
      flex-col
      items-center
      justify-center
      z-50
      "
    >


      <motion.img

        src="/pitchpilot.png"

        alt="PitchPilot"

        className="
        w-32
        h-32
        object-contain
        "

        initial={{
          scale:0,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        transition={{
          duration:0.8
        }}

      />



      <motion.h1

        className="
        text-white
        text-4xl
        font-bold
        mt-6
        "

        initial={{
          opacity:0,
          y:20
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:0.4
        }}

      >

        PitchPilot

      </motion.h1>



      <p className="
      text-[#BFDBF7]
      mt-3
      ">

        AI Startup Coach

      </p>



    </div>

  );

}


export default SplashScreen;