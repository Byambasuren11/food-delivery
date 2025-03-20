"use client";
import { useState } from "react";
import FirstStep from "./Sign-Up-First-Step";
import SecondStep from "./Sign-Up-Second-Step";
import ThirdStep from "../app/Login/page";

const CreateAccount = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="flex w-full justify-between h-screen">
        <div className="w-2/5 h-full flex justify-center items-center text-gray-500 text-sm">
          {step == 1 ? <FirstStep setStep={setStep} /> : <></>}
          {step == 2 ? <SecondStep setStep={setStep} /> : <></>}
        </div>
        <div className="w-3/5 h-screen">
          <img src="./bicycle.png" />
        </div>
      </div>
    </>
  );
};
export default CreateAccount;
