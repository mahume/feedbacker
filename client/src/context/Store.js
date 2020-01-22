import React, { createContext, useState } from "react";

export const IsLoggedInContext = createContext(false);
export const SurveyContext = createContext({});

const Store = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </IsLoggedInContext.Provider>
  )
}

export default Store;