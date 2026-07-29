import { useState } from "react";

import DashboardLayout from "./DashboardLayout";

import IdeaForm from "./IdeaForm";
import StartupScore from "./StartupScore";
import SWOTAnalysis from "./SWOTAnalysis";
import MarketAnalysis from "./MarketAnalysis";
import BusinessStrategy from "./BusinessStrategy";
import RiskAnalysis from "./RiskAnalysis";
import Recommendations from "./Recommendations";
import InvestorPitchCard from "./InvestorPitchCard";
import SaveAnalysis from "./SaveAnalysis";

import { generatePDF } from "../../utils/generatePDF";



function NewAnalysis() {


  const [startupIdea, setStartupIdea] = useState("");

  const [analysis, setAnalysis] = useState(null);



  return (


    <DashboardLayout>


      <div className="w-full max-w-6xl mx-auto overflow-hidden">


        {/* Page Header */}


        <div className="mb-8 text-left">


          <div

            className="
            inline-flex
            items-center
            gap-2
            px-3
            py-2
            md:px-4
            rounded-full
            bg-[#1F7A8C]/10
            text-[#1F7A8C]
            font-medium
            text-sm
            mb-5
            "

          >

            🚀 Startup Intelligence

          </div>





          <h1

            className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-gray-800
            dark:text-white
            break-words
            "

          >

            Analyze Your Startup Idea

          </h1>





          <p

            className="
            mt-3
            max-w-3xl
            text-sm
            md:text-lg
            text-gray-500
            dark:text-gray-400
            break-words
            "

          >

            Describe your startup idea and let PitchPilot AI validate your
            concept, generate SWOT analysis, analyze market opportunities,
            create business strategies, evaluate risks, and build an
            investor-ready pitch.

          </p>


        </div>





        {/* Idea Form */}


        <div className="w-full overflow-hidden">


          <IdeaForm

            startupIdea={startupIdea}

            setStartupIdea={setStartupIdea}

            setAnalysis={setAnalysis}

          />


        </div>





        {/* AI Results */}


        <div

          className="
          w-full
          mt-8
          space-y-6
          overflow-hidden
          "

        >


          <StartupScore

            analysis={analysis}

          />





          <SWOTAnalysis

            analysis={analysis}

          />





          <MarketAnalysis

            analysis={analysis}

          />





          <BusinessStrategy

            analysis={analysis}

          />





          <RiskAnalysis

            analysis={analysis}

          />





          <Recommendations

            analysis={analysis}

          />





          <InvestorPitchCard

            analysis={analysis}

          />



        </div>

                {/* Bottom Actions */}


        {
          analysis && (

            <div

              className="
              w-full
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-5
              mt-10
              mb-10
              "

            >





              <button


                onClick={()=>


                  generatePDF(

                    analysis,

                    startupIdea

                  )


                }



                className="

                w-full

                sm:w-[280px]

                h-[64px]


                bg-[#1F7A8C]

                text-white


                rounded-2xl


                font-bold


                text-base


                shadow-lg


                hover:bg-[#022B3A]


                transition


                flex

                items-center

                justify-center


                "

              >

                📄 Download AI Report PDF


              </button>









              <div

                className="
                w-full
                sm:w-[280px]
                "

              >


                <SaveAnalysis


                  startupIdea={startupIdea}


                  analysis={analysis}


                />


              </div>





            </div>


          )
        }




      </div>


    </DashboardLayout>


  );


}


export default NewAnalysis;