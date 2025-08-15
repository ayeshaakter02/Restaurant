import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [IsAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken, IsAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
