import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  History as HistoryIcon,
  Trash2,
  Eye,
  Download,
  Search,
  BarChart3,
  ShieldCheck,
  Presentation,
  Rocket,
  Gamepad2,
  UtensilsCrossed,
  ShoppingCart,
  Wallet,
  HeartPulse,
  GraduationCap,
  Plane,
  Bot,
  Music,
  Camera,
  Car,
  Dumbbell,
  Building2,
  Users,
  X,
  AlertTriangle
} from "lucide-react";

import DashboardLayout from "../Dashboard/DashboardLayout";
import { supabase } from "../../lib/supabase";
import { generatePDF } from "../../utils/generatePDF";


function History() {


  const [analyses, setAnalyses] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  const [deleting, setDeleting] = useState(false);



  useEffect(() => {

    loadHistory();

  }, []);





  async function loadHistory() {


    try {


      const {

        data: {
          user
        }

      } = await supabase.auth.getUser();




      if (!user) {

        setLoading(false);

        return;

      }





      const { data, error } = await supabase

        .from("analyses")

        .select("*")

        .eq("user_id", user.id)

        .order(

          "created_at",

          {

            ascending: false

          }

        );




      if (error) {

        console.error(error);

        setLoading(false);

        return;

      }




      setAnalyses(data || []);

      setLoading(false);



    }


    catch (error) {

      console.log(error);

      setLoading(false);

    }


  }







  function getIdeaInfo(idea) {


    const text = idea?.toLowerCase() || "";



    if (
      text.includes("game") ||
      text.includes("gaming") ||
      text.includes("player") ||
      text.includes("tournament") ||
      text.includes("action")
    )

      return {

        name: "Gaming App",

        icon: <Gamepad2 size={26} />

      };




    if (
      text.includes("food") ||
      text.includes("cook") ||
      text.includes("recipe") ||
      text.includes("restaurant") ||
      text.includes("meal")
    )

      return {

        name: "Food Platform",

        icon: <UtensilsCrossed size={26} />

      };






    if (
      text.includes("shop") ||
      text.includes("store") ||
      text.includes("marketplace") ||
      text.includes("ecommerce") ||
      text.includes("buy") ||
      text.includes("sell")
    )

      return {

        name: "E-Commerce App",

        icon: <ShoppingCart size={26} />

      };






    if (
      text.includes("doctor") ||
      text.includes("hospital") ||
      text.includes("health") ||
      text.includes("medical") ||
      text.includes("patient")
    )

      return {

        name: "Healthcare App",

        icon: <HeartPulse size={26} />

      };






    if (
      text.includes("money") ||
      text.includes("finance") ||
      text.includes("bank") ||
      text.includes("payment")
    )

      return {

        name: "Finance App",

        icon: <Wallet size={26} />

      };







    if (
      text.includes("school") ||
      text.includes("student") ||
      text.includes("education") ||
      text.includes("learn") ||
      text.includes("learning") ||
      text.includes("scholarship")
    )

      return {

        name: "Education Platform",

        icon: <GraduationCap size={26} />

      };







    if (
      text.includes("travel") ||
      text.includes("trip") ||
      text.includes("hotel")
    )

      return {

        name: "Travel App",

        icon: <Plane size={26} />

      };







    if (
      text.includes("ai") ||
      text.includes("artificial intelligence") ||
      text.includes("assistant")
    )

      return {

        name: "AI Tool",

        icon: <Bot size={26} />

      };







    if (
      text.includes("music") ||
      text.includes("song") ||
      text.includes("audio")
    )

      return {

        name: "Music App",

        icon: <Music size={26} />

      };







    if (
      text.includes("photo") ||
      text.includes("camera") ||
      text.includes("image")
    )

      return {

        name: "Photography App",

        icon: <Camera size={26} />

      };







    if (
      text.includes("car") ||
      text.includes("vehicle") ||
      text.includes("transport")
    )

      return {

        name: "Vehicle Service",

        icon: <Car size={26} />

      };







    if (
      text.includes("fitness") ||
      text.includes("gym") ||
      text.includes("workout") ||
      text.includes("coach")
    )

      return {

        name: "Fitness App",

        icon: <Dumbbell size={26} />

      };







    if (
      text.includes("business") ||
      text.includes("company") ||
      text.includes("startup") ||
      text.includes("market")
    )

      return {

        name: "Business Platform",

        icon: <Building2 size={26} />

      };







    if (
      text.includes("social") ||
      text.includes("community") ||
      text.includes("chat")
    )

      return {

        name: "Social Platform",

        icon: <Users size={26} />

      };





    return {

      name: "Startup Idea",

      icon: <Rocket size={26} />

    };


  }






  function openDeleteModal(item) {

    setSelectedAnalysis(item);

  }





  function closeDeleteModal() {

    if (deleting) return;

    setSelectedAnalysis(null);

  }






  async function deleteAnalysis() {


    if (!selectedAnalysis) return;



    setDeleting(true);



    try {


      const {

        data: {
          user
        }

      } = await supabase.auth.getUser();





      if (!user) {

        alert("User not found");

        setDeleting(false);

        return;

      }






      const { error } = await supabase

        .from("analyses")

        .delete()

        .eq("id", selectedAnalysis.id)

        .eq("user_id", user.id);





      if (error) {

        alert(error.message);

        setDeleting(false);

        return;

      }





      setAnalyses((old) =>

        old.filter(

          (item) => item.id !== selectedAnalysis.id

        )

      );



      setSelectedAnalysis(null);



    }


    catch (error) {

      console.log(error);

      alert("Delete failed");

    }


    finally {

      setDeleting(false);

    }


  }








  function downloadPDF(item) {


    let swot = {};

    let market = {};

    let strategy = {};

    let risks = [];

    let recommendations = [];



    try {

      swot = JSON.parse(item.swot_report || "{}");

    }

    catch { }



    try {

      market = JSON.parse(item.market_analysis || "{}");

    }

    catch { }



    try {

      strategy = JSON.parse(item.business_strategy || "{}");

    }

    catch { }



    try {

      risks = JSON.parse(item.risks || "[]");

    }

    catch { }



    try {

      recommendations = JSON.parse(item.recommendations || "[]");

    }

    catch { }





    const savedAnalysis = {


      score: item.confidence || 0,


      strengths: swot.strengths || [],


      weaknesses: swot.weaknesses || [],


      opportunities: swot.opportunities || [],


      threats: swot.threats || [],


      marketAnalysis: market,


      businessStrategy: strategy,


      risks: risks,


      recommendations: recommendations,


      pitch: item.investor_pitch || ""


    };





    generatePDF(

      savedAnalysis,

      item.idea

    );


  }








  const filteredAnalyses = analyses.filter(item =>


    item.idea

      ?.toLowerCase()

      .includes(

        search.toLowerCase()

      )


  );






  return (


    <DashboardLayout>


      <div className="space-y-8">




        <div className="flex items-center gap-4">


          <div

            className="
              w-14
              h-14
              rounded-2xl
              bg-[#BFDBF7]
              flex
              items-center
              justify-center
            "

          >


            <HistoryIcon

              size={28}

              className="text-[#1F7A8C]"

            />


          </div>





          <div>


            <h1

              className="
                text-4xl
                font-bold
                dark:text-white
              "

            >

              Analysis History

            </h1>



            <p className="text-gray-500 mt-2">

              Your saved startup analyses.

            </p>


          </div>


        </div>








        <div

          className="
            bg-white
            dark:bg-gray-900
            border
            rounded-2xl
            p-4
            flex
            items-center
            gap-3
          "

        >


          <Search className="text-gray-400" />




          <input

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            placeholder="Search analysis..."

            className="
              w-full
              outline-none
              bg-transparent
              dark:text-white
            "

          />


        </div>








        {

          loading &&

          <div className="text-center py-20">

            Loading history...

          </div>

        }








        {

          !loading && filteredAnalyses.length === 0 &&


          <div className="text-center py-20 text-gray-500">


            <h2 className="text-2xl font-bold">

              No saved analysis

            </h2>



            <p className="mt-2">

              Create your first startup analysis.

            </p>


          </div>


        }








        <div className="space-y-6">


          {


            filteredAnalyses.map((item) => {


              const info = getIdeaInfo(item.idea);



              return (


                <div

                  key={item.id}

                  className="
                    bg-white
                    dark:bg-gray-900
                    border
                    rounded-3xl
                    p-7
                    shadow-sm
                  "

                >



                  <div className="flex items-center gap-4">



                    <div

                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-[#BFDBF7]
                        flex
                        items-center
                        justify-center
                        text-[#1F7A8C]
                      "

                    >


                      {info.icon}


                    </div>






                    <div>


                      <h2

                        className="
                          text-2xl
                          font-bold
                          dark:text-white
                        "

                      >

                        {info.name}

                      </h2>


                      <p

                        className="
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "

                      >

                        Startup Analysis

                      </p>


                    </div>



                  </div>






                  <p className="text-gray-500 mt-4 line-clamp-2">

                    {item.idea}

                  </p>






                  <div

                    className="
                      grid
                      md:grid-cols-3
                      gap-5
                      mt-7
                    "

                  >


                    <StatCard

                      icon={<BarChart3 />}

                      title="AI Score"

                      value={`${item.confidence || 0}/100`}

                    />




                    <StatCard

                      icon={<ShieldCheck />}

                      title="SWOT"

                      value="Completed"

                    />




                    <StatCard

                      icon={<Presentation />}

                      title="Pitch"

                      value="Generated"

                    />


                  </div>








                  <div

                    className="
                      flex
                      gap-4
                      mt-7
                      items-center
                      justify-end
                    "

                  >



                    <Link

                      to={`/report/${item.id}`}

                      title="View Report"

                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#1F7A8C]
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        hover:bg-[#022B3A]
                        transition
                      "

                    >


                      <Eye size={22} />


                    </Link>








                    <button

                      onClick={() => downloadPDF(item)}

                      title="Download AI Report PDF"

                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#022B3A]
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        hover:bg-[#1F7A8C]
                        transition
                      "

                    >


                      <Download size={22} />


                    </button>








                    <button

                      onClick={() => openDeleteModal(item)}

                      title="Delete Analysis"

                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-red-50
                        text-red-500
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        hover:bg-red-500
                        hover:text-white
                        transition
                      "

                    >


                      <Trash2 size={22} />


                    </button>



                  </div>





                </div>


              );


            })


          }


        </div>


      </div>






      {/* DELETE CONFIRMATION MODAL */}

      {

        selectedAnalysis &&

        <div

          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            p-4
            bg-black/50
            backdrop-blur-sm
          "

          onClick={closeDeleteModal}

        >


          <div

            onClick={(e) => e.stopPropagation()}

            className="
              relative
              w-full
              max-w-md
              bg-white
              dark:bg-[#0B1F2A]
              rounded-3xl
              border
              border-gray-200
              dark:border-white/10
              shadow-2xl
              p-7
              animate-in
              fade-in
              zoom-in
              duration-200
            "

          >



            {/* CLOSE BUTTON */}

            <button

              onClick={closeDeleteModal}

              disabled={deleting}

              className="
                absolute
                top-5
                right-5
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-700
                dark:hover:text-white
                hover:bg-gray-100
                dark:hover:bg-white/10
                transition
              "

            >

              <X size={20} />

            </button>






            {/* WARNING ICON */}

            <div

              className="
                w-16
                h-16
                rounded-2xl
                bg-red-500/10
                text-red-500
                flex
                items-center
                justify-center
                mb-6
              "

            >

              <AlertTriangle size={30} />

            </div>






            <h2

              className="
                text-2xl
                font-bold
                text-[#022B3A]
                dark:text-white
              "

            >

              Delete Analysis?

            </h2>






            <p

              className="
                mt-3
                text-gray-500
                dark:text-gray-400
                leading-relaxed
              "

            >

              This analysis will be permanently removed from your history.
              This action cannot be undone.

            </p>






            {/* IDEA PREVIEW */}

            <div

              className="
                mt-5
                p-4
                rounded-2xl
                bg-gray-50
                dark:bg-white/5
                border
                border-gray-100
                dark:border-white/10
              "

            >

              <p className="text-xs text-gray-400 mb-1">

                You're deleting

              </p>


              <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-2">

                {selectedAnalysis.idea}

              </p>


            </div>






            {/* BUTTONS */}

            <div className="flex gap-3 mt-7">


              <button

                onClick={closeDeleteModal}

                disabled={deleting}

                className="
                  flex-1
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-white/10
                  text-gray-700
                  dark:text-gray-200
                  font-semibold
                  hover:bg-gray-50
                  dark:hover:bg-white/5
                  transition
                  disabled:opacity-50
                "

              >

                Cancel

              </button>






              <button

                onClick={deleteAnalysis}

                disabled={deleting}

                className="
                  flex-1
                  py-3
                  rounded-xl
                  bg-red-500
                  text-white
                  font-semibold
                  hover:bg-red-600
                  transition
                  disabled:opacity-60
                  flex
                  items-center
                  justify-center
                  gap-2
                "

              >

                <Trash2 size={18} />

                {

                  deleting

                    ? "Deleting..."

                    : "Delete"

                }

              </button>


            </div>



          </div>


        </div>

      }


    </DashboardLayout>


  );


}







function StatCard({ icon, title, value }) {


  return (


    <div

      className="
        bg-gray-50
        dark:bg-gray-800
        rounded-2xl
        p-5
      "

    >


      <div className="text-[#1F7A8C]">

        {icon}

      </div>





      <p className="text-gray-500 mt-3">

        {title}

      </p>






      <h3

        className="
          text-2xl
          font-bold
          dark:text-white
        "

      >

        {value}

      </h3>



    </div>


  );


}





export default History;