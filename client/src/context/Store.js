import React, { createContext, useState } from "react";

export const IsLoggedInContext = createContext(null);
export const SurveyContext = createContext({});

const Store = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </IsLoggedInContext.Provider>
  )
}

export default Store;