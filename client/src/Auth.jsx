import React, { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();

export const useAuth=()=>{
  const isauth=useContext(AuthContext);
  return isauth;
};

export const Auth=(props)=>{
  const [authState,authupdate] = useState(false);

  const loggedin=()=>{
    if(localStorage.getItem('token')){
      authupdate(true);
    }
  }

useEffect(()=>{
  loggedin();
}) 
  return (
  <div>
    <AuthContext.Provider value={{authState,authupdate}}>
    {props.children}
    </AuthContext.Provider>
  </div>
  );
}

