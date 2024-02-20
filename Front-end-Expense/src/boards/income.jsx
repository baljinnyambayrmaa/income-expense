import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";
export const IncomeCard = (props) => {
  const { incomeAmmount, incomePercent } = props;
  return (
    <div className="card-compact flex rounded-2xl w-[384px] bg-white shadow-xl">
      <div className="card-body justify-between gap-3">
        <div className="card-title">
          <span className="text-[#84CC16] text-[30px]">•</span>
          <h1>Your Income</h1>
        </div>
        <hr className="w-[400px] -mx-5"></hr>
        <div className="mt-[15px] flex flex-col gap-4">
          <p className="font-bold text-[35px] ">{incomeAmmount}</p>
          <p className="text-slate-400 text-[17px]">Your Income Ammount</p>
        </div>
        <div className="h-full flex items-center gap-2 justify-end mt-4">
          <FaCircleArrowUp color="#84CC16" size={20} />
          <p>{incomePercent}</p>
        </div>
      </div>
    </div>
  );
};
