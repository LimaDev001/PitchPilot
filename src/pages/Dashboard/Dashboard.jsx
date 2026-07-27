import { useEffect, useState } from "react";

import DashboardLayout from "./DashboardLayout";
import HeroCard from "./HeroCard";
import QuickStats from "./QuickStats";
import FounderPanel from "./FounderPanel";

import { supabase } from "../../lib/supabase";



function Dashboard() {


  const [isFounder,setIsFounder] = useState(false);



  useEffect(()=>{


    async function checkFounder(){


      const {data}=await supabase.auth.getUser();



      if(
        data.user?.user_metadata?.role === "Founder"
      ){

        setIsFounder(true);

      }


    }



    checkFounder();


  },[]);






  return (


    <DashboardLayout>



      <HeroCard />

      <QuickStats />





      <div

        className="
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-700
        rounded-3xl
        p-8
        mt-10
        "

      >


        <h2

          className="
          text-2xl
          font-bold
          text-[#0F172A]
          dark:text-white
          "

        >

          Recent Analyses

        </h2>




        <p

          className="
          text-gray-500
          dark:text-gray-400
          mt-2
          "

        >

          Your previous startup ideas and AI reports will appear here.

        </p>



      </div>









      {/* Founder Only Section */}



      {
        isFounder && (


          <div

            id="founder-panel"

            className="mt-10"

          >


            <FounderPanel />


          </div>


        )
      }





    </DashboardLayout>


  );

}



export default Dashboard;