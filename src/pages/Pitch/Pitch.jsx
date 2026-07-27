import {
  Rocket,
  Target,
  Lightbulb,
  DollarSign,
  Users,
  Trophy,
  FileText,
} from "lucide-react";

import DashboardLayout from "../Dashboard/DashboardLayout";

function Pitch() {
  return (
    <DashboardLayout>
      <div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">

          <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 flex items-center justify-center">
            <Rocket
              size={30}
              className="text-[#0F766E]"
            />
          </div>

          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              Investor Pitch
            </h1>

            <p className="text-gray-500 mt-2">
              Create a professional investor-ready pitch with AI.
            </p>

          </div>

        </div>





        {/* Startup Name */}

        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8">

          <h2 className="text-3xl font-bold text-[#0F766E]">
            Your Startup Name
          </h2>

          <p className="text-gray-500 mt-3">
            A short and powerful one-line pitch will appear here.
          </p>

        </div>





        {/* Pitch Sections */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Problem
              </h3>
            </div>

            <p className="text-gray-500">
              The AI will describe the problem your startup solves.
            </p>

          </div>





          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Solution
              </h3>
            </div>

            <p className="text-gray-500">
              AI will explain your startup solution.
            </p>

          </div>





          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Target Market
              </h3>
            </div>

            <p className="text-gray-500">
              Your ideal customers will appear here.
            </p>

          </div>





          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Business Model
              </h3>
            </div>

            <p className="text-gray-500">
              AI will explain how your startup makes money.
            </p>

          </div>





          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Competitive Advantage
              </h3>
            </div>

            <p className="text-gray-500">
              Your unique strengths compared to competitors.
            </p>

          </div>





          <div className="bg-white rounded-2xl border border-gray-200 p-6">

            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#0F766E]" />
              <h3 className="text-xl font-semibold">
                Funding Ask
              </h3>
            </div>

            <p className="text-gray-500">
              Suggested investment amount and funding purpose.
            </p>

          </div>

        </div>





        {/* Button */}

        <div className="mt-10">

          <button
            className="
              bg-[#0F766E]
              text-white
              px-8
              py-3
              rounded-xl
              font-medium
              hover:bg-[#115E59]
              hover:scale-105
              transition
            "
          >
            Generate Investor Pitch
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Pitch;