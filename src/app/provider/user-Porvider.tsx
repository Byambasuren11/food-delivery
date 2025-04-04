"use client";
import { useRouter } from "next/navigation";
import { useState, createContext, useContext, useEffect } from "react";

type userContextType = {
  email: string;
  addrress: string;
  onClick1: () => void
};

const UserContext = createContext<userContextType>({} as userContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userContextType>({} as userContextType);
  // const [loading, setLoading] = useState(false);
  const router=useRouter();
  const onClick1 = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
    }
    router.push("/Login");
  };
  useEffect(() => {
    const user1 = localStorage.getItem("user");
    if (user1) {
      const user = JSON.parse(user1);

      setUser(user!);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ email: user?.email, addrress: user?.addrress , onClick1:onClick1}}
    >
      {children}
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
