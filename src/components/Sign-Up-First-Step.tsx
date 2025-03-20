"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const FirstStep = (props) => {
  const [email, setEmail] = useState();
  const [error, setError] = useState({});
  const { setStep } = props;
  setStep(1);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onClick = () => {
    if (email.search(emailPattern) === -1 && email.length == 0) {
      setError((prev) => ({
        ...prev,
        email: "Invalid email. Use a format like example@gmail.com ",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
      setStep(2);
    }
  };
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="w-2/5 h-1/3 flex flex-col gap-6">
      <div>
        <h3 className="text-black text-lg">Create your account</h3>
        <p>Sign up to explore your favorite dishes</p>
      </div>
      <div>
        <Input placeholder="Enter your email address" onChange={emailChanged} />
        {error.email ? (
          <div className="text-red-500">{error.email}</div>
        ) : (
          <></>
        )}
      </div>
      <Button className="bg-gray-400" onClick={onClick}>
        Let's go
      </Button>
      <p className="text-center mt-2">
        Already have an account? <a href="Login">Log in</a>
      </p>
    </div>
  );
};
export default FirstStep;
