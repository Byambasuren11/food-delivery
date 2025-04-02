"use client";
import { useState, createContext, useContext, useEffect } from "react";

type userContextType = {
  email: string;
  addrress: string;
};

const UserContext = createContext<userContextType>({} as userContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType>({} as userContextType);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const user1 = localStorage.getItem("user");
    if (user1) {
      const user = JSON.parse(user1);
    }
    setLoading(false);
    setUser(user!);
  }, []);

  return (
    <UserContext.Provider
      value={{ email: user?.email, addrress: user?.addrress }}
    >
      {loading ? <div>Loading</div> : children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    console.log("hohho");
  }
  return context;
};
