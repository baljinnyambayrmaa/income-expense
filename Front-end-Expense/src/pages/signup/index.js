import { SignUp } from "@/components/SignUp";
import { ConfirmFirst } from "@/components/confirmFirst";
import { ConfirmSecond } from "@/components/confirmSecond";
import { GoodJob } from "@/components/goodJob";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 w-1/2 h-[70%]">
          {step === 0 && <SignUp stage={step} nextHandle={handleNext} />}
          {step === 1 && <ConfirmFirst stage={step} nextHandle={handleNext} />}
          {step === 2 && <ConfirmSecond stage={step} nextHandle={handleNext} />}
          {step === 3 && <GoodJob stage={step} nextHandle={handleNext} />}
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]"></div>
    </div>
  );
}
