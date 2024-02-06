import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const SignUp = (props) => {
  const { stage = true } = props;
  const [show, setShow] = useState(true);
  const [reshow, setReshow] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handles the password visibility
  const handleClick = () => {
    setShow(!show);
  };
  const handleReclick = () => {
    setReshow(!reshow);
  };
  // States that stores the user data and the re-entered password
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [repassword, setRepassword] = useState({
    repassword: "",
  });
  const [passerror, setPasserror] = useState(false);

  // Router hook

  const { push } = useRouter();
  const url = "http://localhost:4000/users";

  // Handles the sign up process and redirects to the login page if successful
  const handleJump = async (e) => {
    push("/login");
  };

  // Handles the re-entered password. It is separete from the userData state because it is not sent to the server
  const handleRepassword = (e) => {
    const { value } = e.target;
    setRepassword({
      ...repassword,
      repassword: value,
    });
  };

  // Stores user inputs in the userData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  useEffect(() => {
    if (userData.password === repassword.repassword) {
      setPasserror(false);
    } else {
      setPasserror(true);
    }
  }, [userData, repassword]);

  // Handles submit and sends the user data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      userData.username === "" ||
      userData.email === "" ||
      userData.password === "" ||
      repassword.repassword === ""
    ) {
      // Alerts the user if any field is empty
      alert("Please fill all the fields");
    } else {
      // Tries to send the user data to the server
      try {
        // Checks if the 2 passwords match
        if (userData.password !== repassword.repassword) {
          setPasserror(true);
        } else {
          // Sends the user data to the server if the passwords match
          await axios.post(url, userData).then((res) => {
            if (res.data !== "User already exists") {
              push("/login");
            } else {
              console.log(res.data);
            }
          });
        }
      } catch (err) {
        // Alerts the user if there is an error
        setError(true);
        setErrorMsg(err.response.data);
      }
    }
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
      <div>
        <Image src={"/Frame 3.png"} width={100} height={50} alt="logo" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
      </div>
      <div className="flex flex-col gap-6 w-full h-1/3">
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Name"
          className="w-full object-fit-contain h-[48px] bg-gray-100 rounded-md px-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
          className="w-full object-fit-contain h-[48px] bg-gray-100 rounded-md px-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="w-full object-fit-contain h-[48px] bg-gray-100 rounded-md px-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <input
          onChange={handleRepassword}
          type="password"
          placeholder="Re-Password"
          className="w-full object-fit-contain h-[48px] bg-gray-100 rounded-md px-4 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
        />
        <button
          onClick={handleSubmit}
          className="w-full h-1/3 bg-blue-500 rounded-xl text-white"
        >
          Sign Up
        </button>
      </div>
      <div>
        <p>
          Already have account?
          <span onClick={handleJump} className="text-blue-500 cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};
