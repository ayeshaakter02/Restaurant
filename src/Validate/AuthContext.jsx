import React, { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

//authcontext init
export const Authenticate = createContext();

// start context
export const Context = createContext({
  isAuthenticated: false,
  user: null,
});
export const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsAuthenticated(true);
        setUser(currentUser);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};
// end context

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
