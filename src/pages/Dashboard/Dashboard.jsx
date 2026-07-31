import { useEffect, useState } from "react";

import DashboardLayout from "./DashboardLayout";
import HeroCard from "./HeroCard";
import QuickStats from "./QuickStats";
import FounderPanel from "./FounderPanel";

import { supabase } from "../../lib/supabase";



function Dashboard() {


  const [isFounder,setIsFounder] = useState(false);

  const [recentAnalyses,setRecentAnalyses] = useState([]);





  useEffect(()=>{


    async function checkUser(){


      const {data}=await supabase.auth.getUser();



      if(
        data.user?.user_metadata?.role === "Founder"
      ){

        setIsFounder(true);

      }




      if(!data.user) return;




      const { data: analyses, error } = await supabase


        .from("analyses")


        .select("*")


        .eq(
          "user_id",
          data.user.id
        )


        .order(
          "created_at",
          {
            ascending:false
          }
        )


        .limit(5);






      if(error){

        console.log(error);

        return;

      }





      setRecentAnalyses(
        analyses || []
      );



    }




    checkUser();



  },[]);









  return (


    <DashboardLayout>



      <HeroCard />

      <QuickStats />







      {/* Recent Activity */}


      <div

        className="
        bg-white
        dark:bg-gray-900
        border
        border-gray-200
        dark:border-gray-700
        rounded-3xl
        p-6
        sm:p-8
        mt-10
        "

      >




        <h2

          className="
          text-2xl
          font-bold
          text-[#022B3A]
          dark:text-white
          "

        >

          Recent Activity


        </h2>





        <p

          className="
          mt-2
          text-gray-500
          dark:text-gray-400
          "

        >

          Your latest startup analyses and AI reports.


        </p>







        <div className="mt-6 space-y-4">





        {


          recentAnalyses.length > 0 ?



          recentAnalyses.map((item,index)=>(



            <div


              key={index}


              className="
              bg-[#F5F7FA]
              dark:bg-gray-800
              rounded-2xl
              p-5
              flex
              flex-col
              sm:flex-row
              sm:items-center
              justify-between
              gap-4
              "


            >





              <div>


                <h3

                  className="
                  font-bold
                  text-[#022B3A]
                  dark:text-white
                  break-words
                  "

                >

                  {item.idea}


                </h3>





                <p

                  className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mt-1
                  "

                >

                  AI analysis completed


                </p>




              </div>








              <span


                className="
                px-4
                py-2
                rounded-full
                bg-[#BFDBF7]
                text-[#022B3A]
                text-sm
                font-bold
                whitespace-nowrap
                "


              >


                Score {item.confidence || 0}%


              </span>






            </div>



          ))



          :



          <div


            className="
            bg-[#F5F7FA]
            dark:bg-gray-800
            rounded-2xl
            p-6
            text-center
            "


          >


            <p

              className="
              text-gray-500
              dark:text-gray-400
              "

            >

              No analyses yet. Create your first startup analysis 🚀


            </p>


          </div>




        }





        </div>





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