import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


function DashboardLayout({ children }) {

  const [open, setOpen] = useState(false);


  return (

    <div
      className="
        min-h-screen
        flex
        bg-[#F5F7FA]
        dark:bg-[#022B3A]
        transition-colors
        duration-300
      "
    >



      {/* Mobile Button */}

      <button

        onClick={()=>setOpen(!open)}

        className="
          lg:hidden
          fixed
          top-5
          left-5
          z-[60]
          w-12
          h-12
          rounded-2xl
          bg-[#1F7A8C]
          text-white
          flex
          items-center
          justify-center
          shadow-lg
        "

      >

        {
          open
          ?
          <X size={24}/>
          :
          <Menu size={24}/>
        }

      </button>






      {/* Desktop Sidebar */}

      <aside

        className="
          hidden
          lg:block
          fixed
          top-0
          left-0
          h-screen
          z-40
        "

      >

        <Sidebar />

      </aside>








      {/* Mobile Sidebar */}

      <AnimatePresence>

      {
        open && (

          <motion.aside

            initial={{
              x:-300
            }}

            animate={{
              x:0
            }}

            exit={{
              x:-300
            }}

            transition={{
              duration:.3
            }}

            className="
              fixed
              top-0
              left-0
              h-screen
              z-50
              lg:hidden
            "

          >

            <Sidebar />

          </motion.aside>

        )
      }

      </AnimatePresence>







      {/* Overlay */}

      {
        open && (

          <div

            onClick={()=>setOpen(false)}

            className="
              fixed
              inset-0
              bg-[#022B3A]/50
              backdrop-blur-sm
              z-40
              lg:hidden
            "

          />

        )
      }







      {/* Content */}

      <main

        className="
          flex-1
          lg:ml-64
          min-h-screen
          p-6
          lg:p-10
          pt-20
          lg:pt-10
        "

      >

        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.5
          }}

        >

          {children}

        </motion.div>


      </main>



    </div>

  );

}


export default DashboardLayout;