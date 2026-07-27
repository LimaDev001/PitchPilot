import { useState } from "react";

import {
  Sparkles,
  Send,
  Lightbulb,
  Brain,
  BarChart3,
  ShieldCheck,
  Presentation,
} from "lucide-react";

import { motion } from "framer-motion";

import { analyzeStartupIdea } from "../../services/aiService";



function IdeaForm({
  startupIdea,
  setStartupIdea,
  setAnalysis
}) {


  const [loading,setLoading] = useState(false);




  const examples = [

    "AI platform that helps students find scholarships",

    "Smart fitness coach using artificial intelligence",

    "Marketplace for local small businesses",

  ];






  const handleExample = (idea)=>{

    setStartupIdea(idea);

  };







  const handleAnalyze = async()=>{


    if(!startupIdea.trim()) return;



    setLoading(true);



    try{


      const result = await analyzeStartupIdea(startupIdea);


      setAnalysis(result);



    }catch(error){


      console.error(error);

      alert(
        "Something went wrong while analyzing your startup."
      );


    }finally{


      setLoading(false);


    }


  };







  return (


    <motion.section

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.6
      }}

      className="mb-10"

    >




      <div

        className="
        bg-white
        dark:bg-gray-900
        rounded-3xl
        border
        border-gray-200
        dark:border-gray-700
        shadow-lg
        p-8
        transition
        "

      >







        {/* Header */}



        <div className="flex items-center gap-4 mb-7">


          <div

            className="
            w-14
            h-14
            rounded-2xl
            bg-[#E1E5F2]
            dark:bg-[#1F7A8C]/20
            flex
            items-center
            justify-center
            "

          >


            <Sparkles

              size={28}

              className="text-[#1F7A8C]"

            />


          </div>




          <div>


            <h3

              className="
              text-2xl
              font-bold
              text-[#022B3A]
              dark:text-white
              "

            >

              Analyze Your Startup Idea


            </h3>



            <p

              className="
              text-gray-500
              dark:text-gray-400
              "

            >

              Let PitchPilot AI discover your startup potential.


            </p>



          </div>



        </div>








        {/* Examples */}



        <div className="mb-6">


          <div

            className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            dark:text-gray-400
            mb-3
            "

          >

            <Lightbulb size={16}/>

            Try an example:


          </div>





          <div className="flex flex-wrap gap-3">


            {
              examples.map((example,index)=>(


                <button

                  key={index}

                  onClick={()=>handleExample(example)}


                  className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  bg-[#F8FAFC]
                  dark:bg-gray-800
                  text-gray-600
                  dark:text-gray-300
                  border
                  border-gray-200
                  dark:border-gray-700
                  hover:border-[#1F7A8C]
                  transition
                  "

                >

                  {example}


                </button>


              ))
            }


          </div>


        </div>










        {/* Text Area */}



        <textarea


          value={startupIdea}


          onChange={(e)=>setStartupIdea(e.target.value)}


          maxLength={500}


          placeholder="Example: An AI platform that helps students discover scholarships..."


          className="
          w-full
          min-h-[180px]
          resize-none
          rounded-2xl
          border
          border-gray-200
          dark:border-gray-700
          bg-white
          dark:bg-gray-800
          text-[#022B3A]
          dark:text-white
          placeholder-gray-400
          p-5
          outline-none
          focus:ring-2
          focus:ring-[#1F7A8C]
          transition
          "


        />





        <div

          className="
          text-right
          text-sm
          text-gray-400
          mt-2
          "

        >

          {startupIdea.length}/500


        </div>









        {/* Loading */}



        {
          loading && (


            <div

              className="
              mt-6
              p-6
              rounded-2xl
              bg-[#E1E5F2]
              dark:bg-gray-800
              "

            >


              <div className="flex items-center gap-3">


                <Sparkles

                  className="
                  text-[#1F7A8C]
                  animate-spin
                  "

                />


                <h4

                  className="
                  font-semibold
                  text-[#022B3A]
                  dark:text-white
                  "

                >

                  PitchPilot AI is analyzing...


                </h4>


              </div>





              <div className="mt-5 space-y-4">



                <LoadingItem

                  icon={Brain}

                  text="Understanding your startup idea..."

                />


                <LoadingItem

                  icon={BarChart3}

                  text="Calculating startup score..."

                />


                <LoadingItem

                  icon={ShieldCheck}

                  text="Building SWOT analysis..."

                />


                <LoadingItem

                  icon={Presentation}

                  text="Creating investor pitch..."

                />



              </div>


            </div>


          )

        }









        {/* Button */}




        <div className="flex justify-end mt-6">


          <motion.button


            whileHover={{
              scale:1.04
            }}


            whileTap={{
              scale:.97
            }}


            onClick={handleAnalyze}


            disabled={
              !startupIdea.trim() || loading
            }


            className="
            flex
            items-center
            gap-3
            bg-[#1F7A8C]
            disabled:bg-gray-400
            text-white
            px-8
            py-3
            rounded-2xl
            font-semibold
            hover:bg-[#022B3A]
            transition
            shadow-lg
            "

          >


            {
              loading
              ?

              <>
              <Sparkles
                size={18}
                className="animate-spin"
              />
              PitchPilot AI...
              </>

              :

              <>
              Analyze Idea
              <Send size={18}/>
              </>

            }


          </motion.button>


        </div>





      </div>



    </motion.section>


  );

}






function LoadingItem({icon:Icon,text}){


return (

<div

className="
flex
items-center
gap-3
text-gray-600
dark:text-gray-300
"

>

<Icon

size={20}

className="
text-[#1F7A8C]
animate-pulse
"

/>

<span>

{text}

</span>


</div>


);


}





export default IdeaForm;