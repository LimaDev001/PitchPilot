import Logo from "./Logo";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";


function Footer() {


  return (

    <footer

      className="
      bg-black
      text-white
      py-10
      px-6
      "

    >


      <motion.div

        className="
        max-w-7xl
        mx-auto
        "

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
          duration:0.6
        }}

      >



        {/* Main Footer */}


        <div

          className="
          flex
          flex-col
          items-center
          text-center
          gap-5
          "

        >




          {/* Logo */}


          <div

            className="
            text-white
            [&_*]:text-white
            "

          >

            <Logo />

          </div>







          {/* Description */}


          <p

            className="
            text-gray-300
            max-w-md
            text-sm
            leading-relaxed
            "

          >

            PitchPilot is an AI startup coach that helps founders
            validate ideas, analyze opportunities, and create
            better startup pitches.

          </p>





        </div>









        {/* Bottom */}


        <div

          className="
          border-t
          border-[#1F7A8C]/20
          mt-8
          pt-5
          text-center
          "

        >


          <p

            className="
            text-gray-400
            text-sm
            flex
            items-center
            justify-center
            gap-1
            "

          >

            © 2026 PitchPilot. Powered by Lima

            <Rocket

              size={16}

              className="
              text-[#1F7A8C]
              "

            />

          </p>



        </div>






      </motion.div>



    </footer>

  );

}


export default Footer;