import { createContext, useContext, useState } from "react";


// Create Context
const AuthContext = createContext();


// Provider
export function AuthProvider({ children }) {


  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });



  function signup(userData) {

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


    setUser(userData);

  }




  function login(email, password) {


    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );


    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {


      setUser(savedUser);

      return true;

    }


    return false;

  }




  function logout() {

    localStorage.removeItem("user");

    setUser(null);

  }





  return (

    <AuthContext.Provider

      value={{
        user,
        signup,
        login,
        logout
      }}

    >

      {children}

    </AuthContext.Provider>

  );

}




// Hook
export function useAuth(){

  return useContext(AuthContext);

}