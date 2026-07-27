import { Sparkles, CheckCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import AITyping from "../../components/common/AITyping";


function HeroVisual() {

  const { darkMode } = useTheme();


  return (
    <div className="relative animate-float">


      {/* Main AI Card */}

      <div
        className={`
          rounded-3xl
          shadow-2xl
          border
          p-8
          w-[380px]
          transition-colors
          duration-300

          ${
            darkMode
            ? "bg-[#022B3A] border-gray-700"
            : "bg-white border-[#E1E5F2]"
          }

        `}
      >


        {/* Header */}

        <div className="flex items-center justify-between mb-8">


          <div className="flex items-center gap-3">


            <div className="bg-[#BFDBF7] p-3 rounded-2xl">

              <Sparkles
                className="text-[#1F7A8C]"
                size={24}
              />

            </div>



            <div>


              <h3
                className={`
                  text-xl
                  font-bold

                  ${
                    darkMode
                    ? "text-white"
                    : "text-[#022B3A]"
                  }

                `}
              >

                AI Analysis

              </h3>



              <p
                className={`
                  text-sm

                  ${
                    darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                  }

                `}
              >

                Startup Evaluation

              </p>


            </div>


          </div>





          <span
            className="
              bg-[#BFDBF7]
              text-[#022B3A]
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
            "
          >

            Ready

          </span>



        </div>








        {/* Analysis Cards */}


        <div className="space-y-4">



          {/* SWOT */}


          <div
            className={`
              p-5
              rounded-2xl
              flex
              justify-between
              items-center

              ${
                darkMode
                ? "bg-[#1F7A8C]/20"
                : "bg-[#E1E5F2]"
              }

            `}
          >


            <div>

              <p
                className={`
                  text-sm

                  ${
                    darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                  }

                `}
              >

                SWOT Analysis

              </p>


              <p className="font-semibold text-[#1F7A8C]">

                Completed

              </p>


            </div>


            <CheckCircle className="text-[#1F7A8C]"/>


          </div>







          {/* Market */}


          <div
            className={`
              p-5
              rounded-2xl
              flex
              justify-between
              items-center

              ${
                darkMode
                ? "bg-[#1F7A8C]/20"
                : "bg-[#BFDBF7]"
              }

            `}
          >


            <div>

              <p
                className={`
                  text-sm

                  ${
                    darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                  }

                `}
              >

                Market Opportunity

              </p>


              <p className="font-semibold text-[#1F7A8C]">

                High Potential

              </p>


            </div>


            <CheckCircle className="text-[#1F7A8C]"/>


          </div>







          {/* Pitch */}


          <div
            className={`
              p-5
              rounded-2xl
              flex
              justify-between
              items-center

              ${
                darkMode
                ? "bg-[#1F7A8C]/20"
                : "bg-[#E1E5F2]"
              }

            `}
          >


            <div>

              <p
                className={`
                  text-sm

                  ${
                    darkMode
                    ? "text-gray-300"
                    : "text-gray-500"
                  }

                `}
              >

                Investor Pitch

              </p>


              <p className="font-semibold text-[#1F7A8C]">

                Generated

              </p>


            </div>


            <CheckCircle className="text-[#1F7A8C]"/>


          </div>




        </div>









        {/* AI Message */}


        <div
          className={`
            mt-6
            rounded-2xl
            p-4

            ${
              darkMode
              ? "bg-[#022B3A]"
              : "bg-[#F8FAFC]"
            }

          `}
        >


          <p
            className={`
              text-sm

              ${
                darkMode
                ? "text-gray-300"
                : "text-gray-500"
              }

            `}
          >

            AI Assistant

          </p>



          <AITyping />


        </div>



      </div>








      {/* Floating Icon */}


      <div
        className="
          absolute
          -top-6
          -right-6
          bg-[#1F7A8C]
          text-white
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shadow-xl
        "
      >

        ✦

      </div>



    </div>
  );
}


export default HeroVisual;