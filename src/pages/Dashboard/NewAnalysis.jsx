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


      <div>



        {/* Header */}


        <div className="mb-10">


          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#1F7A8C]/10
            text-[#1F7A8C]
            font-medium
            mb-5
            "
          >

            🚀 Startup Intelligence

          </div>





          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            dark:text-white
            "
          >

            Analyze Your Startup Idea

          </h1>





          <p
            className="
            mt-3
            text-lg
            text-gray-500
            dark:text-gray-400
            max-w-3xl
            "
          >

            Describe your startup idea and let PitchPilot AI validate your
            concept, generate SWOT analysis, analyze market opportunities,
            create business strategies, evaluate risks, and build an
            investor-ready pitch.

          </p>


        </div>







        {/* Idea Input */}


        <IdeaForm

          startupIdea={startupIdea}

          setStartupIdea={setStartupIdea}

          setAnalysis={setAnalysis}

        />








        {/* AI Results */}


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









        {/* Actions */}



        {
          analysis && (

            <div

              className="
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-5
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
                bg-[#1F7A8C]
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                shadow-lg
                hover:bg-[#022B3A]
                transition
                "

              >

                📄 Download AI Report PDF


              </button>






              <SaveAnalysis

                startupIdea={startupIdea}

                analysis={analysis}

              />




            </div>

          )
        }




      </div>


    </DashboardLayout>

  );

}



export default NewAnalysis;