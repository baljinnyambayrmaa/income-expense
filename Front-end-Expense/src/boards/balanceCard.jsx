import Image from "next/image";
export const BalanceCard = (props) => {
  const { ammount } = props;
  return (
    <div className="card bg-[url('/Large.png')] w-[384px] h-[216px] shadow-xl ">
      <div className="card-bod h-[216px] justify-between">
        <div className="card-title">
          <img src="/Vector (1).png" alt="logo" />
          <p className="text-white">Geld</p>
        </div>
        <div className="justify-end">
          <p className="text-slate-400">Cash</p>
          <p className="font-semibold text-white text-[23px]">{ammount}</p>
        </div>
      </div>
    </div>
  );
};
