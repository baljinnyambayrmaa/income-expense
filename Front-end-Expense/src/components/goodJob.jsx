import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";

export const GoodJob = () => {
  return (
    <div className="flex flex-col items-center h-full justify-start mt-[40px] gap-[100px]">
      <div className="flex flex-col items-center gap-[48px]">
        <Image src={"/Frame 3.png"} width={100} height={50} alt="logo" />
        <div className="w-[240px]">
          <ul className="steps text-[14px] w-full">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center w-[384px] gap-[32px]">
        <div className="flex flex-col items-center gap-[16px] w-full text-center ">
          <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center ">
            <MdOutlineDone color="white" size={40} />
          </div>
          <h1 className="text-[24px] text-[#0F172A]">Good Job!</h1>
          <p className="text-[12px] text-gray-500">
            Your very first account has been created. Now continue to dashboard
            and start tracking{" "}
          </p>
          <button className="btn bg-[#0166FF]  text-white  w-full rounded-[20px]">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
