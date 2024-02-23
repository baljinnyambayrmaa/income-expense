import { LuCircle } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { ColCategory } from "@/components/ColCategory";
import { Slider } from "./ui/slider";
import { useRouter } from "next/router";
import { useState } from "react";
export const RecordCol = () => {
  return (
    <div className=" bg-[#fff] flex flex-col justify-center px-4 py-6 rounded-xl gap-6">
      <h2 className="text-[25px] font-semibold>Records">Records</h2>
      <div className="flex flex-col gap-4">
        <button className="btn btn-sm bg-[#0166FF] text-white h-[35px] text-[15px] rounded-full font-light px-5">
          + Add
        </button>

        <input
          type="text"
          placeholder="Search"
          className="border-2 px-2 py-1 rounded-md bg-gray-100"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2>Types</h2>
        <div className="pl-3 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <input type="radio" />
            <p>All</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" />
            <p>Income</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" />
            <p>Expense</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold">Categoty</h3>
          <p className="text-slate-300">Clear</p>
        </div>
        <div>
          <ColCategory />
          <p className="flex items-center text-md gap-2">
            <AiOutlinePlus color="#0166FF" /> Add Category
          </p>
        </div>
      </div>
      <div>
        <h3 className="">Amount Range</h3>
        <div>
          <div>
            <input
              type="number"
              placeholder="0"
              className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
            />
            <input
              type="number"
              placeholder="1000"
              className="border-2 w-[50%] bg-[#F3F4F6] py-2 rounded-lg px-2"
            />
          </div>
          {/* <Slider defaultValue={[0, 500]} min={0} max={1000} step={1} /> */}
        </div>
      </div>
    </div>
  );
};
