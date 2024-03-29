import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaCirclePlus, FaGift } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { PiForkKnifeFill, PiWineFill } from "react-icons/pi";

export const Modal = () => {
  const [button, setButton] = useState(true);
  const [display, setDisplay] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const [category, setCategory ]= useState();

  const GetInput = (event) => {
    const { name, value } = event.target;

    setInputValue({ ...inputValue, [name]: value });
  };
  const handleDisplay = () => {
    setDisplay(!display);
  };

  const handleClick = () => {
    setButton(!button);
  };
  const [recordValue, setRecordValue] = useState();
  const url = "http://localhost:4000/records/post";

  const handleSubmit = async () => {
    console.log({ recordValue, ...inputValue });
    try {
      await axios.post(url, inputValue);
    } catch (err) {
      console.log(err);
    }
    setDisplay(!display);
  };
  const handleCategory = async () => {
    
  }

  return (
    <div className="">
      <button
        className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        +Records
      </button>
      <dialog id="my_modal_2" className="modal">
        <div
          className="modal-box overflow-x-hidden overflow-y-hidden"
          style={{ width: "900px", maxWidth: "900px" }}
        >
          <h3 className="font-bold text-[20px]">Add Record</h3>
          <hr className="w-[120%] absolute left-0 my-5" />
          <div className="flex w-full mt-10 justify-between">
            <div className="w-[48%]">
              <div className="w-full flex rounded-full bg-[#f3f4f6]">
                <button
                  className="rounded full bg-[#0166FF] w-[50%] h-[40px] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                  style={{
                    backgroundColor: button ? "#0166FF" : "#F3F4F6",
                    color: button ? "white" : "black",
                  }}
                  onClick={handleClick}
                >
                  Income
                </button>
                <button
                  className="rounded full bg-slate-200 w-[50%] flex justify-center items-center text-white font-semibold text-[15px] px-[10px] py-2"
                  style={{
                    backgroundColor: button ? "#F3F4F6" : "#16A34A",
                    color: button ? "black" : "white",
                  }}
                  onClick={handleClick}
                >
                  Expense
                </button>
              </div>
              <div className="relative flex flex-col mt-6 w-full py-5">
                <label className="absoute top-3 ml-5 z-10">Amount</label>
                <input
                  type="number"
                  placeholder="₮ 000.00"
                  className="bg-slate-100 p-5 absolute top-0 h-[76px] rounded-xl w-full pt-12"
                  onChange={GetInput}
                  name="amount"
                />
              </div>
              <div className="mt-6 w-full py-5 flex flex-col gap-2">
                <label className="">Catergory</label>
                <div className="dropdown w-full">
                  <div
                    tabIndex={1000}
                    role="button"
                    className="btn m-1 w-full text-left flex justify-start text-[#D1D5DB] text-[16px] hover:bg-slate-100 font-light bg-slate-100 relative"
                    onClick={handleDisplay}
                  >
                    Find or choose category
                  </div>
                  <ul
                    tabIndex={1000}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full h-[189px] absolute top-15 z-100000 hidden overflow-y-scroll"
                    style={{ display: display ? "block" : "none" }}
                    onChange={GetInput}
                  >
                    <li>
                      <div className="flex border-b-4 border-slate-300 ">
                        <FaCirclePlus color="#0166FF" size={20} />
                        <p className="text-[16px] ">Add Category</p>
                      </div>
                    </li>

                    <li>
                      <div className="flex">
                        <GoHomeFill color="#FF4545" size={24} />
                        <p className="text-[16px] ">Home</p>
                      </div>
                    </li>

                    <li>
                      <div className="flex  ">
                        <FaGift color="#FF4545" size={24} />
                        <p className="text-[16px] ">Gift</p>
                      </div>
                    </li>

                    <li>
                      <div className="flex  ">
                        <PiForkKnifeFill color="#FB8A22" size={24} />
                        <p className="text-[16px] ">Food</p>
                      </div>
                    </li>

                    <li>
                      <div className="flex  ">
                        <PiWineFill color="#FB8A22" size={24} />
                        <p className="text-[16px] ">Drinks</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 w-full">
                <div className=" flex flex-col w-[50%]">
                  <label className="">Date</label>
                  <input
                    type="date"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl "
                    onChange={GetInput}
                    name="date"
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <label className="">Time</label>
                  <input
                    type="time"
                    className="bg-[#F3F4F6] p-2 border-2 rounded-xl"
                    onChange={GetInput}
                    name="time"
                  />
                </div>
              </div>
              <button
                className="rounded-full bg-[#0166FF] w-full text-white text-[15px] px-[10px] py-2 mt-6"
                style={{ backgroundColor: button ? "#0166FF" : "#16A34A" }}
                onClick={handleSubmit}
              >
                Add Record
              </button>
            </div>
            <div className="w-[48%] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Payee</p>
                <input
                  type="text"
                  placeholder="Write here"
                  className="select w-full bg-slate-100"
                  onChange={GetInput}
                  name="payee"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Note</p>
                <textarea
                  className="textarea w-full bg-slate-100 h-[268px]"
                  style={{ resize: "none" }}
                  placeholder="Write Here"
                  onChange={GetInput}
                  name="note"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop z-999 ">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};
