import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const LoginPage = () => {
  //user data storage useState
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //Router
  const { push } = useRouter();
  const url = "http://localhost:4000/users/login";

  //handles page jump to signup page
  const handleJump = () => {
    push("signup");
  };

  //Stores input values to userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };
  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(url, userData);
    
    localStorage.setItem("token", res.data);
  };

  // Handles form submission
  // const handeSubmit = async(e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(url, userData). then((res) => {
  //       console.log(res.data);
  //       if (res.data !=="invalid email or password") {
  //         push("/")
  //       }
  //       else {
  //         setError(true);
  //         setErrorMsg(res.data);
  //       }
  //     });
  //   }   catch (error) {
  //     console.log(error);
  //   };
  // };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <Image src={"/Frame 3.png"} width={100} height={50} alt="logo" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p>Welcome back please enter your details</p>
      </div>
      <div className="flex flex-col gap-6 w-full h-1/3">
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
          className="w-full object-fit-contain h-[48px] bg-gray-200 rounded-md px-4 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <input
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Password"
          className="w-full object-fit-contain h-[48px] bg-gray-200 rounded-md px-4 border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <button
          onClick={handleSubmit}
          className="w-full h-1/3 bg-blue-500 rounded-xl text-white"
        >
          Log In
        </button>
      </div>
      <div>
        <p>
          Don't have an account?
          <span onClick={handleJump} className="text-blue-500 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};
