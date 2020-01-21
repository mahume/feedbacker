import React, { createContext, useState } from "react";

export const Dummy = createContext(null);

const Store = ({ children }) => {
  const [dummy, setDummy] = useState(null);

  return (
    <Dummy.Provider value={[dummy, setDummy]}>
      {children}
    </Dummy.Provider>
  )
}

export default Store;