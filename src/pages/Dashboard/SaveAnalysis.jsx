import { Save, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";


function SaveAnalysis({ startupIdea, analysis }) {


  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);



  async function saveAnalysis(){


    if(!analysis){

      alert("No analysis available.");

      return;

    }



    if(!startupIdea.trim()){

      alert("Please enter a startup idea first.");

      return;

    }



    setLoading(true);



    try{


      const {
        data:{
          user
        }

      } = await supabase.auth.getUser();





      if(!user){

        alert("You must be logged in.");

        setLoading(false);

        return;

      }





      const { error } = await supabase

      .from("analyses")

      .insert({


        user_id:user.id,


        idea:startupIdea,



        swot_report:

          JSON.stringify({

            strengths: analysis.strengths || [],

            weaknesses: analysis.weaknesses || [],

            opportunities: analysis.opportunities || [],

            threats: analysis.threats || []

          }),





        market_analysis:

          JSON.stringify(

            analysis.marketAnalysis || {}

          ),






        business_strategy:

          JSON.stringify(

            analysis.businessStrategy || {}

          ),






        risks:

          JSON.stringify(

            analysis.risks || []

          ),






        recommendations:

          JSON.stringify(

            analysis.recommendations || []

          ),






        investor_pitch:

          analysis.pitch || "",






        confidence:

          Number(

            analysis.score || 0

          )



      });







      if(error){

        console.log(error);

        alert(error.message);

        return;

      }






      setSaved(true);




      setTimeout(()=>{

        setSaved(false);

      },2000);




    }



    catch(error){


      console.log(error);

      alert("Failed to save analysis.");


    }



    finally{


      setLoading(false);


    }


  }








  return (


    <motion.button



      whileHover={{

        scale:1.04

      }}



      whileTap={{

        scale:.97

      }}






      onClick={saveAnalysis}





      disabled={loading}





      className="

      w-full

      h-[64px]


      bg-[#1F7A8C]

      hover:bg-[#022B3A]


      text-white


      rounded-2xl


      font-bold


      text-base


      flex

      items-center

      justify-center


      gap-3


      shadow-lg


      transition


      disabled:opacity-50

      "



    >






      {

        saved

        ?

        <Check size={22}/>

        :

        <Save size={22}/>

      }





      {

        loading

        ?

        "Saving..."

        :

        saved

        ?

        "Saved!"

        :

        "Save Analysis"

      }





    </motion.button>


  );


}


export default SaveAnalysis;