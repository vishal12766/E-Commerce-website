import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("gelato_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      localStorage.setItem("gelato_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("gelato_user");
    }
  }, [user]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
          credentials: "include",
        });

        if (response.status === 401) {
          setUser(null);
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      checkUser();
    } else {
      setLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      /* ignore */
    }
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout, isAuthenticated: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export default UserContext;
