import Image from "next/image";
import { Inter } from "next/font/google";
import { ConfirmFirst } from "@/components/confirmFirst.jsx";
import { ConfirmSecond } from "@/components/confirmSecond";
import { GoodJob } from "@/components/goodJob";
import { Dashboard } from "./dashboard";
import { Modal } from "@/components/modal";
import { LoginPage } from "@/components/Login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 w-1/2 h-[70%]">
          <LoginPage />
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]"></div>
    </div>
  );
}
