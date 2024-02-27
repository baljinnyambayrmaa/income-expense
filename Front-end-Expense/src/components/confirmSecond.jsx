import Image from "next/image";
import { PiCoinsFill } from "react-icons/pi";

export const ConfirmSecond = (props) => {
  const { stage = 2, nextHandle } = props;
  return (
    <div className="flex flex-col items-center h-full justify-start mt-[40px] gap-[100px]">
      <div className="flex flex-col items-center gap-[48px]">
        <Image src={"/Frame 3.png"} width={100} height={50} alt="logo" />
        <div className="w-[240px]">
          <ul className="steps text-[14px] w-full">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center w-[384px] gap-[32px]">
        <div className="flex flex-col items-center gap-[16px] w-full ">
          <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center ">
            <PiCoinsFill color="white" size={40} />
          </div>
          <h1 className="text-[24px] text-[#0F172A]">
            Set up your cash Balance
          </h1>
          <input
            type="text"
            placeholder="Email"
            className="w-full bg-slate-100 h-[48px] rounded-xl"
          />
          <p className="text-[12px] text-gray-500">
            How much cash do you have in your wallet?{" "}
          </p>
          <button
            className="btn bg-[#0166FF]  text-white  w-full rounded-[20px]"
            onClick={nextHandle}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
