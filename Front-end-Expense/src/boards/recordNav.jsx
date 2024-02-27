import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export const RecordNav = () => {
  const Random= ["Last 30 days", "Last week", "Yesterday", "Today"]
  const [slide, setSlide]= useState(0);
  const previousSlide= () => {
    setSlide ( slide -1);
  };
  const next =() => {
    setSlide ( slide +1);
  }
  return (
    <div className="flex justify-between items-center  py-3 w-full">
      <div className="flex gap-5 items-center">
        <button className="btn btn-square btn-sm" disabled={slide === 0} onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <p>{Random[slide]}</p>
        <button className="btn btn-square btn-sm" disabled={slide === Random.length -1 } onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
      <select className="select h-[35px] w-[200px] max-w-xs font-semibold">
        <option selected>Newest First</option>
        <option>Oldest First</option>
        <option>A - Z</option>
        <option>Z - A</option>
      </select>
    </div>
  );
};