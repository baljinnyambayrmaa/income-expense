import { SignUp } from "@/components/SignUp";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 w-1/2 h-[70%]">
          <SignUp />
        </div>
      </div>
      <div className="w-[50%] h-screen bg-[#0166FF]"></div>
    </div>
  );
}