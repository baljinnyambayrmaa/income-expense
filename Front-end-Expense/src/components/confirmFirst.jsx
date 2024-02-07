import Image from "next/image";
import { FaMoneyBill } from "react-icons/fa";

export const ConfirmFirst = () => {
  return (
    <div className="flex flex-col items-center h-full justify-start mt-[40px] gap-[100px]">
      <div className="flex flex-col items-center gap-[48px]">
        <Image src={"/Frame 3.png"} width={100} height={50} alt="logo" />
        <div>
          <ul className="steps text-[14px] w-[240px]">
            <li className="step step-primary">Currency</li>
            <li className="step">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center w-[384px] gap-[32px]">
        <div className="flex flex-col items-center gap-[16px]">
          <div className="flex justify-center bg-[#0166FF] w-[60px] h-[60px] rounded-full items-center ">
            <FaMoneyBill color="white" size={40} />
          </div>
          <h1 className="text-[24px] text-[#0F172A]">Select base currency</h1>
          <div className="flex flex-col items-center "></div>

          <select className="select w-full bg-gray-100 outline-none text-[16px] ">
            <option>MNT - Mongolian tugrik</option>
            <option>CNY - Chinese Yuan</option>
            <option>USD- United States Dollar</option>
            <option>EUR- Euro</option>
            <option>JPY- Japanese Yien</option>
          </select>
          <p className="text-[12px] text-gray-500">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </p>
          <button className="btn bg-[#0166FF]  text-white  w-full rounded-[20px]">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
