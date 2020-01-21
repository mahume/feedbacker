import React, { createContext, useState } from "react";

export const AuthContext = createContext("Nope");
export const SurveyContext = createContext({});

const Store = ({ children }) => {
  const [auth, setAuth] = useState("Nope");

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export default Store;