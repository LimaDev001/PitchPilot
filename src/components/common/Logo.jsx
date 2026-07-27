import { Send } from "lucide-react";
import { Link } from "react-router-dom";


function Logo() {


  return (

    <Link

      to="/"

      className="
        flex
        items-center
        gap-3
      "

    >





      {/* Logo Icon */}


      <div

        className="
          w-11
          h-11
          rounded-2xl
          bg-[#1F7A8C]
          flex
          items-center
          justify-center
          shadow-lg
        "

      >


        <Send

          size={24}

          className="
            text-white
          "

        />


      </div>








      {/* Logo Text */}


      <span

        className="
          text-2xl
          font-bold
          text-[#022B3A]
          dark:text-white
          tracking-tight
        "

      >

        PitchPilot


      </span>





    </Link>


  );

}


export default Logo;