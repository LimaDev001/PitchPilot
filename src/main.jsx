import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import "./styles/global.css";

import App from "./App.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";



createRoot(document.getElementById("root")).render(

  <StrictMode>


    <ThemeProvider>


      <AuthProvider>


        <App />


      </AuthProvider>


    </ThemeProvider>


  </StrictMode>

);