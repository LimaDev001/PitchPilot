import {
  User,
  Palette,
  Bell,
  Bot,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

import DashboardLayout from "../Dashboard/DashboardLayout";
import { useTheme } from "../../context/ThemeContext";



function Settings() {


  const { darkMode, toggleTheme } = useTheme();

  const [notifications, setNotifications] = useState(true);



  return (


    <DashboardLayout>


      <div>





        {/* Header */}


        <div className="mb-8">


          <h1
            className="
            text-4xl
            font-bold
            text-[#022B3A]
            dark:text-white
            "
          >

            Settings

          </h1>



          <p
            className="
            text-gray-500
            dark:text-gray-400
            mt-2
            "
          >

            Manage your PitchPilot preferences and account settings.

          </p>


        </div>









        <div className="grid md:grid-cols-2 gap-6">







          {/* Profile */}



          <div
            className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-3xl
            p-6
            shadow-sm
            hover:shadow-lg
            transition
            "
          >


            <div className="flex items-center gap-3 mb-4">


              <User
                className="text-[#1F7A8C]"
                size={28}
              />


              <h2
                className="
                text-xl
                font-semibold
                dark:text-white
                "
              >

                Profile

              </h2>


            </div>





            <p className="text-gray-500 dark:text-gray-400">


              Manage your personal information and startup profile.


            </p>






            <Link
              to="/profile?edit=true"
              className="
              inline-flex
              items-center
              gap-2
              mt-5
              px-5
              py-3
              rounded-xl
              bg-[#1F7A8C]
              text-white
              font-medium
              hover:bg-[#022B3A]
              transition
              "
            >


              <User size={18}/>


              Edit Profile


            </Link>



          </div>













          {/* Appearance */}



          <div
            className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-3xl
            p-6
            shadow-sm
            hover:shadow-lg
            transition
            "
          >




            <div className="flex items-center gap-3 mb-4">


              <Palette
                className="text-[#1F7A8C]"
                size={28}
              />



              <h2
                className="
                text-xl
                font-semibold
                dark:text-white
                "
              >

                Appearance

              </h2>


            </div>







            <p className="text-gray-500 dark:text-gray-400">


              Customize how PitchPilot looks.


            </p>







            <div className="mt-5 flex justify-between items-center">


              <span className="dark:text-white font-medium">


                {darkMode ? "Dark Mode" : "Light Mode"}


              </span>







              <button

                onClick={toggleTheme}

                className={`
                w-12
                h-6
                rounded-full
                transition
                ${
                  darkMode
                  ? "bg-[#1F7A8C]"
                  : "bg-gray-300"
                }
                `}
              >



                <span

                  className={`
                  block
                  w-4
                  h-4
                  bg-white
                  rounded-full
                  transition
                  ${
                    darkMode
                    ? "translate-x-7"
                    : "translate-x-1"
                  }
                  `}
                />


              </button>




            </div>



          </div>













          {/* AI Preferences */}



          <div
            className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-3xl
            p-6
            shadow-sm
            hover:shadow-lg
            transition
            "
          >



            <div className="flex items-center gap-3 mb-4">


              <Bot
                className="text-[#1F7A8C]"
                size={28}
              />



              <h2
                className="
                text-xl
                font-semibold
                dark:text-white
                "
              >

                AI Preferences

              </h2>


            </div>







            <p className="text-gray-500 dark:text-gray-400">


              Control AI analysis settings.


            </p>







            <div
              className="
              mt-5
              bg-gray-100
              dark:bg-gray-800
              rounded-xl
              p-4
              dark:text-white
              "
            >


              AI Model:

              <span className="font-bold ml-2">


                GPT-4o Mini


              </span>


            </div>



          </div>













          {/* Notifications */}



          <div
            className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-3xl
            p-6
            shadow-sm
            hover:shadow-lg
            transition
            "
          >



            <div className="flex items-center gap-3 mb-4">


              <Bell
                className="text-[#1F7A8C]"
                size={28}
              />



              <h2
                className="
                text-xl
                font-semibold
                dark:text-white
                "
              >

                Notifications

              </h2>


            </div>







            <p className="text-gray-500 dark:text-gray-400">


              Choose when PitchPilot sends updates.


            </p>







            <div
              className="
              mt-5
              flex
              justify-between
              items-center
              "
            >



              <div className="flex items-center gap-3 dark:text-white">


                <Mail
                  size={20}
                  className="text-[#1F7A8C]"
                />


                Email Updates


              </div>







              <button

                onClick={() => setNotifications(!notifications)}

                className={`
                w-12
                h-6
                rounded-full
                transition
                ${
                  notifications
                  ? "bg-[#1F7A8C]"
                  : "bg-gray-300"
                }
                `}
              >


                <div

                  className={`
                  w-4
                  h-4
                  bg-white
                  rounded-full
                  transition
                  ${
                    notifications
                    ? "translate-x-7"
                    : "translate-x-1"
                  }
                  `}
                />


              </button>



            </div>




          </div>








        </div>





      </div>



    </DashboardLayout>

  );

}



export default Settings;