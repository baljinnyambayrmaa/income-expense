import Image from "next/image";
import { Inter } from "next/font/google";
import { ConfirmFirst } from "@/components/confirmFirst.jsx";
import { ConfirmSecond } from "@/components/confirmSecond";
import { GoodJob } from "@/components/goodJob";
import { Dashboard } from "./dashboard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-[100vh]">
      <Dashboard />
    </div>
  );
}
