import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://gameofsolapi.onrender.com/auth/user", {
      credentials: "include", // Allows sending cookies
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  const login = () => {
    window.location.href = "https://gameofsolapi.onrender.com/auth/discord";
  };

  const logout = () => {
    fetch("https://gameofsolapi.onrender.com/auth/logout", {
      credentials: "include",
    }).then(() => {
      setUser(null);
      window.location.href = "/";
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use authentication
export const useAuth = () => useContext(AuthContext);
