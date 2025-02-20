"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const SecondStep = (props) => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error,setError]=useState({});
  const passwordPattern=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  const { setStep } = props;
  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChanged = (e) => {
    setConfirmPassword(e.target.value);
  };

  const previousPage=()=>{
    setStep(1)
  }

  const onClick = () => {
    if(password.search(passwordPattern)==-1){
        setError((prev) => ({ ...prev, password: "Weak password. Use numbers and symbols" }));
    }
    else{
        setError((prev) => ({ ...prev, password: "" }));
    }
    if(password!==confirmPassword){
        setError((prev) => ({ ...prev, confirmPassword: "Those password didn't match, Try again" }));
    }
    else{
        setError((prev) => ({ ...prev, confirmPassword: "" }));
    }
    if(error.password=="" && error.confirmPassword==""){
        setStep(3)
    }
  };

  return (
    <div className="w-2/5 h-1/3 flex flex-col gap-6">
      <div className="border w-fit rounded-8" onClick={previousPage}>
        <ChevronLeft />
      </div>
      <div>
        <h3 className="text-black text-lg">Create a strong password</h3>
        <p>Create a strong password with letters, numbers</p>
      </div>
      <div>
        <Input placeholder="Password" onChange={passwordChanged} />
        {error.password? (
                  <div className="text-red-500">{error.password}</div>
                ) : (
                    <></>)}
      </div>
      <div>
        <Input placeholder="Confirm" onChange={confirmPasswordChanged} />
        {error.confirmPassword? (
                  <div className="text-red-500">{error.confirmPassword}</div>
                ) : (
                    <></>)}
      </div>
      <Button className="bg-gray-400" onClick={onClick}>
        Let's go
      </Button>
      <p className="text-center mt-2">
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};
export default SecondStep;
