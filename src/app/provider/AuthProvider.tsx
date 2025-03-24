"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token!);
  const router = useRouter(); // useNavigate replaces useHistory in React Router v6

  useEffect(() => {
    if (!token || isExpired) {
      router.push("/Login"); // Redirect to login page if no token or token is expired
    }
  }, [token, isExpired]);

  // if (isExpired) {
  //   return <div>Your session has expired. Please log in again.</div>;
  // }

  // if (!decodedToken) {
  //   return <div>Invalid token. Please log in again.</div>;
  // }

  return children;
};

export default AuthProvider;
