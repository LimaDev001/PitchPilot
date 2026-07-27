import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


function ProtectedRoute({ children }) {


  const [session, setSession] = useState(null);

  const [loading, setLoading] = useState(true);





  useEffect(()=>{


    async function checkSession(){


      const {
        data
      } = await supabase.auth.getSession();



      setSession(
        data.session
      );


      setLoading(false);


    }




    checkSession();





    const {
      data: listener
    } = supabase.auth.onAuthStateChange(
      
      (_event, session)=>{

        setSession(session);

      }

    );




    return ()=>{

      listener.subscription.unsubscribe();

    };



  },[]);








  if(loading){


    return (

      <div className="min-h-screen flex items-center justify-center">

        Loading...

      </div>

    );


  }







  if(!session){


    return <Navigate to="/login" replace />;


  }






  return children;



}



export default ProtectedRoute;