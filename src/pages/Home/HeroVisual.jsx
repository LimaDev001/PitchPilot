import { Sparkles, CheckCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import AITyping from "../../components/common/AITyping";


function HeroVisual() {

  const { darkMode } = useTheme();


  return (
    <div className="relative animate-float flex justify-center">


      {/* Main AI Card */}

      <div
        className={`

          rounded-3xl
          shadow-2xl
          border

          p-6

          w-[330px]
          sm:w-[360px]

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
                size={22}
              />

            </div>



            <div>


              <h3
                className={`
                  text-lg
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
                  text-xs

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
              text-xs
              font-medium
            "
          >

            Ready

          </span>



        </div>








        {/* Analysis Cards */}


        <div className="space-y-4">



          {[

            ["SWOT Analysis", "Completed"],
            ["Market Opportunity", "High Potential"],
            ["Investor Pitch", "Generated"]

          ].map((item,index)=>(


            <div
              key={index}

              className={`

                p-4

                rounded-2xl

                flex
                justify-between
                items-center


                ${
                  darkMode
                  ? "bg-[#1F7A8C]/20"
                  :
                  index === 1
                  ? "bg-[#BFDBF7]"
                  : "bg-[#E1E5F2]"
                }

              `}
            >


              <div>

                <p
                  className={`

                    text-xs

                    ${
                      darkMode
                      ? "text-gray-300"
                      : "text-gray-500"
                    }

                  `}
                >

                  {item[0]}

                </p>


                <p className="font-semibold text-[#1F7A8C] text-sm">

                  {item[1]}

                </p>


              </div>


              <CheckCircle
                size={20}
                className="text-[#1F7A8C]"
              />


            </div>


          ))}


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

              text-xs

              ${
                darkMode
                ? "text-gray-300"
                : "text-gray-500"
              }

            `}
          >

            AI Assistant

          </p>



          <div className="text-sm overflow-hidden">

            <AITyping />

          </div>


        </div>



      </div>









      {/* Floating Icon */}


      <div
        className="
          absolute
          -top-5
          -right-2
          bg-[#1F7A8C]
          text-white
          w-12
          h-12
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