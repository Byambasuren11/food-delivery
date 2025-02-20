"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const ThirdStep = (props) => {
  const { setStep } = props;
  const [email, setEmail] = useState();
  const [password, setPassword]=useState();

  const onClick=()=>{
    
  }

  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  const passwordChanged=(e)=>{
setPassword(e.target.value)
  }
  return (
    <div className="w-2/5 h-1/3 flex flex-col gap-6">
      <div className="border w-fit rounded-8">
        <ChevronLeft />
      </div>
      <div>
        <h3 className="text-black text-lg">Log In</h3>
        <p>Log in to enjoy your favorite dishes</p>
      </div>
      <div>
        <Input placeholder="Enter your email adress" onChange={emailChanged} />
      </div>
      <div>
        <Input placeholder="Password" onChange={passwordChanged}/>
      </div>
      <Button className="bg-gray-400" onClick={onClick}>Let's go</Button>
      <p className="text-center mt-2">
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  );
};
export default ThirdStep;
