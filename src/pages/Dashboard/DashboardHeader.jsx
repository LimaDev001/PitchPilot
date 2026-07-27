import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


function DashboardHeader() {


  const [name, setName] = useState("Founder");



  useEffect(() => {


    async function getUser() {


      const { data } = await supabase.auth.getUser();



      if (data.user) {


        const email = data.user.email;

        const userName =
          data.user.user_metadata?.name;



        if (email === "limarahimzai@gmail.com") {


          setName("Founder");


        } else if (userName) {


          setName(userName);


        }


      }


    }



    getUser();


  }, []);







  return (


    <motion.div


      initial={{
        opacity: 0,
        y: 20
      }}


      animate={{
        opacity: 1,
        y: 0
      }}


      transition={{
        duration: 0.5
      }}



      className="
      flex
      items-center
      justify-between
      mb-10
      "


    >





      <div>


        <h1


          className="
          text-4xl
          font-bold
          text-[#022B3A]
          dark:text-white
          "


        >

          Hi, {name} 👋


        </h1>





        <p


          className="
          text-gray-500
          dark:text-[#E1E5F2]
          mt-3
          text-lg
          max-w-2xl
          "


        >

          Your AI startup command center is ready.


        </p>





      </div>









      <Link


        to="/new-analysis"


        className="

        hidden
        md:flex
        items-center
        gap-2
        bg-[#1F7A8C]
        text-white
        px-6
        py-3
        rounded-2xl
        font-semibold
        hover:bg-[#022B3A]
        transition
        shadow-lg
        hover:scale-105

        "


      >



        <Plus size={20}/>


        New Analysis



      </Link>






    </motion.div>


  );


}



export default DashboardHeader;