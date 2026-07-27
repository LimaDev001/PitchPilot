import { Send } from "lucide-react";
import { Link } from "react-router-dom";


function Logo() {

  return (

    <Link

      to="/"

      className="
        flex
        items-center
        gap-1.5
      "

    >


      {/* Icon */}

      <div

        className="
          w-7
          h-7
          rounded-lg
          bg-[#1F7A8C]
          flex
          items-center
          justify-center
          shadow-sm
        "

      >

        <Send

          size={14}

          className="text-white"

        />

      </div>





      {/* Desktop Logo Text */}

      <span

        className="
          hidden
          sm:block
          text-lg
          font-bold
          text-[#022B3A]
          dark:text-white
          tracking-tight
        "

      >

        PitchPilot

      </span>





      {/* Mobile Logo */}

      <span

        className="
          block
          sm:hidden
          text-base
          font-bold
          text-[#022B3A]
          dark:text-white
        "

      >

        PP

      </span>



    </Link>

  );

}


export default Logo;