import React, { useState } from "react";
import { createContext } from "react";

//authcontext init
export const Authenticate = createContext();
// export const AuthContext = createContext(null);

const AuthContext = ({ children }) => {
  //auth data default false
  const [IsAuth, setIsAuth] = useState(false);

  return (
    <Authenticate.Provider value={{ IsAuth, setAuth: setIsAuth }}>
      {children}
    </Authenticate.Provider>
  );
};

export default AuthContext;
