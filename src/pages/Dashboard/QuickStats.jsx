import {
  Lightbulb,
  ShieldCheck,
  Presentation,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";



function QuickStats() {


  const [stats, setStats] = useState([

    {
      icon: Lightbulb,
      title: "Ideas Analyzed",
      value: "0",
      color: "text-[#1F7A8C]",
      bg: "bg-[#BFDBF7]",
    },


    {
      icon: ShieldCheck,
      title: "SWOT Reports",
      value: "0",
      color: "text-[#022B3A]",
      bg: "bg-[#E1E5F2]",
    },


    {
      icon: Presentation,
      title: "Investor Pitches",
      value: "0",
      color: "text-[#1F7A8C]",
      bg: "bg-[#BFDBF7]",
    },


    {
      icon: TrendingUp,
      title: "AI Confidence",
      value: "0%",
      color: "text-[#022B3A]",
      bg: "bg-[#E1E5F2]",
    },

  ]);







  useEffect(() => {


    async function loadStats() {



      const { data:userData, error:userError } =
      await supabase.auth.getUser();




      if(userError){

        console.log(
          "USER ERROR:",
          userError.message
        );

        return;

      }






      if(!userData.user){

        console.log("NO USER LOGGED IN");

        return;

      }







      const { data, error } = await supabase

      .from("analyses")

      .select("*")

      .eq(
        "user_id",
        userData.user.id
      );






      if(error){


        console.log(
          "SUPABASE ERROR:",
          error.message
        );


        return;


      }






      // DEBUG

      console.log(
        "CURRENT USER:",
        userData.user
      );


      console.log(
        "ANALYSES DATA:",
        data
      );







      const total = data.length;







      const swotCount = data.filter(

        (item)=>
        item.swot_report &&
        item.swot_report.length > 0

      ).length;








      const pitchCount = data.filter(

        (item)=>
        item.investor_pitch &&
        item.investor_pitch.length > 0

      ).length;








      let confidence = 0;






      if(total > 0){



        const sum = data.reduce(

          (total,item)=>

          total + Number(item.confidence || 0),

          0

        );



        confidence =
        Math.round(sum / total);


      }








      setStats([


        {
          icon:Lightbulb,
          title:"Ideas Analyzed",
          value:total,
          color:"text-[#1F7A8C]",
          bg:"bg-[#BFDBF7]",
        },



        {
          icon:ShieldCheck,
          title:"SWOT Reports",
          value:swotCount,
          color:"text-[#022B3A]",
          bg:"bg-[#E1E5F2]",
        },




        {
          icon:Presentation,
          title:"Investor Pitches",
          value:pitchCount,
          color:"text-[#1F7A8C]",
          bg:"bg-[#BFDBF7]",
        },




        {
          icon:TrendingUp,
          title:"AI Confidence",
          value:`${confidence}%`,
          color:"text-[#022B3A]",
          bg:"bg-[#E1E5F2]",
        },


      ]);



    }






    loadStats();



  }, []);









  return (


    <section className="mb-10">


      <div

      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6
      "

      >



      {
        stats.map((stat,index)=>{


          const Icon = stat.icon;



          return(



            <motion.div


            key={index}


            initial={{
              opacity:0,
              y:20
            }}


            animate={{
              opacity:1,
              y:0
            }}


            transition={{
              duration:.4,
              delay:index * .1
            }}



            whileHover={{
              y:-6
            }}



            className="
            bg-white
            dark:bg-[#022B3A]
            rounded-3xl
            border
            border-[#E1E5F2]
            dark:border-white/10
            p-6
            shadow-sm
            hover:shadow-xl
            transition
            "


            >




              <div

              className={`

              w-14
              h-14
              rounded-2xl
              ${stat.bg}
              flex
              items-center
              justify-center
              mb-5

              `}

              >


              <Icon

              size={28}

              className={stat.color}

              />


              </div>







              <p

              className="
              text-gray-500
              dark:text-[#E1E5F2]
              text-sm
              "

              >

              {stat.title}


              </p>







              <h3

              className="
              text-3xl
              font-bold
              mt-2
              text-[#022B3A]
              dark:text-white
              "

              >

              {stat.value}


              </h3>





            </motion.div>



          );


        })
      }



      </div>



    </section>


  );


}



export default QuickStats;