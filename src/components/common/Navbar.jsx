import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Logo from "./Logo";


function Navbar() {

  const { darkMode, toggleTheme } = useTheme();


  return (

    <nav

      className={`

        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[92%]
        md:w-[88%]
        max-w-6xl
        backdrop-blur-md
        rounded-2xl
        shadow-sm
        z-50
        border

        ${
          darkMode
          ?
          "bg-[#022B3A]/90 border-white/10"
          :
          "bg-white/80 border-[#E1E5F2]"
        }

      `}

    >


      <div

        className="

          flex
          items-center
          justify-between
          px-3
          sm:px-4
          md:px-6
          py-2.5

        "

      >





        {/* LOGO */}

        <Logo />








        {/* NAV LINKS */}

        <div

          className="

            flex
            items-center
            gap-2
            sm:gap-4
            md:gap-6
            text-xs
            sm:text-sm

          "

        >



          <Link

            to="/"

            className="

              text-gray-700
              dark:text-white
              hover:text-[#1F7A8C]
              transition

            "

          >

            Home

          </Link>






          <a

            href="/#features"

            className="

              text-gray-700
              dark:text-white
              hover:text-[#1F7A8C]
              transition

            "

          >

            Features

          </a>







          <Link

            to="/dashboard"

            className="

              text-gray-700
              dark:text-white
              hover:text-[#1F7A8C]
              transition

            "

          >

            Dashboard

          </Link>



        </div>









        {/* RIGHT SIDE */}


        <div

          className="

            flex
            items-center
            gap-2
            md:gap-4

          "

        >




          {/* THEME BUTTON */}


          <button

            onClick={toggleTheme}

            className={`

              w-7
              h-7
              rounded-lg
              border
              flex
              items-center
              justify-center
              transition


              ${
                darkMode
                ?
                "border-white/20 text-white hover:bg-white/10"
                :
                "border-[#E1E5F2] text-[#022B3A] hover:bg-[#F5F7FA]"
              }


            `}

          >

            {

              darkMode

              ?

              <Sun size={14}/>

              :

              <Moon size={14}/>

            }


          </button>









          {/* LOGIN */}


          <Link

            to="/login"

            className="

              text-xs
              sm:text-sm
              text-gray-700
              dark:text-white
              hover:text-[#1F7A8C]
              transition

            "

          >

            Login

          </Link>









          {/* SIGN UP */}


          <Link

            to="/signup"

            className="

              bg-[#1F7A8C]
              text-white
              text-xs
              sm:text-sm
              px-3
              py-1.5
              rounded-lg
              whitespace-nowrap
              hover:bg-[#022B3A]
              transition

            "

          >

            Sign Up

          </Link>



        </div>




      </div>


    </nav>


  );

}


export default Navbar;