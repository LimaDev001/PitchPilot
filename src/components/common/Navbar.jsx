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
        w-[90%]
        max-w-6xl
        backdrop-blur-md
        rounded-2xl
        shadow-sm
        z-50
        border
        transition
        duration-300


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
          px-6
          py-4

        "

      >







        {/* Left Side */}



        <div className="flex items-center gap-8">








          {/* Logo */}



          <Link

            to="/"

            className="
              hover:scale-105
              transition
              duration-300
            "

          >

            <Logo />

          </Link>









          {/* Navigation Links */}



          <div

            className="

              hidden
              md:flex
              items-center
              gap-7
              font-medium

            "

          >







            {/* Home */}



            <Link

              to="/"

              className={`


                transition


                ${
                  darkMode

                  ?

                  "text-gray-200 hover:text-[#1F7A8C]"

                  :

                  "text-gray-600 hover:text-[#1F7A8C]"

                }


              `}

            >

              Home

            </Link>









            {/* Features */}



            <a

              href="/#features"

              className={`


                transition


                ${
                  darkMode

                  ?

                  "text-gray-200 hover:text-[#1F7A8C]"

                  :

                  "text-gray-600 hover:text-[#1F7A8C]"

                }


              `}

            >

              Features

            </a>









            {/* Dashboard */}



            <Link

              to="/dashboard"

              className={`


                transition


                ${
                  darkMode

                  ?

                  "text-gray-200 hover:text-[#1F7A8C]"

                  :

                  "text-gray-600 hover:text-[#1F7A8C]"

                }


              `}

            >

              Dashboard

            </Link>







          </div>







        </div>












        {/* Right Side */}



        <div

          className="

            flex
            items-center
            gap-4

          "

        >







          {/* Theme Button */}



          <button

            onClick={toggleTheme}

            className={`


              w-10
              h-10
              rounded-xl
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

              <Sun size={20}/>

              :

              <Moon size={20}/>

            }


          </button>









          {/* Login */}



          <Link

            to="/login"

            className={`


              font-medium
              transition



              ${
                darkMode

                ?

                "text-gray-200 hover:text-[#1F7A8C]"

                :

                "text-gray-600 hover:text-[#1F7A8C]"

              }


            `}

          >

            Login

          </Link>









          {/* Signup */}



          <Link

            to="/signup"

            className="


              bg-[#1F7A8C]
              text-white
              px-5
              py-2.5
              rounded-xl
              font-medium
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