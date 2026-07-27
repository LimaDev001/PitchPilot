import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";

import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/common/SplashScreen";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import CustomCursor from "./components/CustomCursor";


// Pages

import Home from "./pages/Home/Home";

import Dashboard from "./pages/Dashboard/Dashboard";
import NewAnalysis from "./pages/Dashboard/NewAnalysis";

import History from "./pages/History/History";
import Report from "./pages/Report/Report";

import Profile from "./pages/Profile/Profile";

import Settings from "./pages/Settings/Settings";


import Education from "./pages/Education/Education";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";





function App(){


  const { darkMode } = useTheme();


  const [loading,setLoading] = useState(true);




  useEffect(()=>{


    const timer = setTimeout(()=>{

      setLoading(false);

    },2500);



    return ()=>clearTimeout(timer);


  },[]);






  if(loading){

    return <SplashScreen />;

  }







  return (


    <div className={darkMode ? "dark" : ""}>


      <BrowserRouter>


        <CustomCursor />



        <ScrollToTop />



        <Routes>





          {/* HOME */}

          <Route

            path="/"

            element={<Home />}

          />




          {/* DASHBOARD */}

          <Route

            path="/dashboard"

            element={

              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>

            }

          />




          {/* NEW ANALYSIS */}

          <Route

            path="/new-analysis"

            element={

              <ProtectedRoute>

                <NewAnalysis />

              </ProtectedRoute>

            }

          />





          {/* HISTORY */}

          <Route

            path="/history"

            element={

              <ProtectedRoute>

                <History />

              </ProtectedRoute>

            }

          />





          {/* REPORT */}

          <Route

            path="/report/:id"

            element={

              <ProtectedRoute>

                <Report />

              </ProtectedRoute>

            }

          />







          {/* PROFILE */}

          <Route

            path="/profile"

            element={

              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>

            }

          />







          {/* SETTINGS */}

          <Route

            path="/settings"

            element={

              <ProtectedRoute>

                <Settings />

              </ProtectedRoute>

            }

          />







          {/* EDUCATION */}

          <Route

            path="/education"

            element={<Education />}

          />





          {/* LOGIN */}

          <Route

            path="/login"

            element={<Login />}

          />





          {/* SIGNUP */}

          <Route

            path="/signup"

            element={<Signup />}

          />





          {/* NOT FOUND */}

          <Route

            path="*"

            element={<Home />}

          />





        </Routes>



      </BrowserRouter>


    </div>


  );


}



export default App;