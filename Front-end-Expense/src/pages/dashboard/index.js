import Image from "next/image";
import { BalanceCard } from "@/boards/balanceCard";
import { IncomeCard } from "@/boards/income";
import { OutComeCard } from "@/boards/outcome";
import { RecordCard } from "@/boards/recordCard";
import { BarChartCard } from "@/boards/barChartCard";
import { DoughnutChart } from "@/boards/doghnutCard";
import { useRouter } from "next/router";
import { Modal } from "@/components/modal";

export default function Home() {
  const { push } = useRouter();

  return (
    <div className="w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen flex justify-between items-center px-[500px] py-5 bg-white mb-[25px]">
        <div className="flex items-center gap-7 ">
          <Image src="/Vector (1).png" alt="logo" width={40} height={40} />
          <p className="heading-4 font-bold cursor-pointer" onClick={() => push("/dashboard")}>Dashboard</p>
          <p className="cursor-pointer" onClick={() => push("/records")}>
            Records
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Modal/>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div className="bg-slate-200 h-fit w-full px-[100px] py-10 flex flex-col gap-10 items-center">
        <div className="flex justify-between w-full gap-5">
          <BalanceCard ammount={"10,000,00"} />
          <IncomeCard
            incomeAmmount={"1,200,000₮"}
            incomePercent={"32% from last month"}
          />
          <OutComeCard
            incomeAmmount={"-1,200,000₮"}
            incomePercent={"32% from last month"}
          />
        </div>
        <div className="flex h-fit w-full justify-between gap-5">
          <BarChartCard />
          <DoughnutChart />
        </div>
        <div className="w-full h-fit">
          <RecordCard />
        </div>
      </div>
    </div>
  );
}
