import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { Button} from '@mui/material'

const Login = () => {
  const navigate = useNavigate();
  const { backendurl, setIsLoggedin, getuserData } = useContext(AppContext);

  const [state, setstate] = useState("Sign Up");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;
      if (state === "Sign Up") {
        const { data } = await axios.post(backendurl + "/api/auth/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          getuserData();

          toast.success(
            state === "Sign Up"
              ? "Account created successfully!"
              : "Logged in successfully!"
          );
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendurl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          getuserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex  justify-center items-center  mt-5 px-6 sm:px-0 bg-gradient-to-br">
      <div className="bg-white !p-6 sm:!p-10 rounded-lg shadow-lg w-full sm:w-100 xl:w-[35%]  text-black-300 text-sm">
        <h2 className="text-2xl font-semibold  text-center mb-10">
          {state === "Sign Up" ? "Create  account" : "Login"}
        </h2>
        {/* <p className='text-center text-sm mb-6 '>{state === 'Sign Up' ? 'Create Your account' : 'Login to your account!'}</p> */}

        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded border border-gray-400  ">
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                className="bg-transparent outline-none"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded border border-gray-400  ">
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              className="bg-transparent outline-none"
              type="email"
              placeholder="Email id"
              required
            />
          </div>

          <div className="mb-2 flex items-center gap-3 w-full px-5 py-2.5 rounded border border-gray-400 ">
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none"
              type="Password"
              placeholder=" Enter Password"
              required
            />
          </div>

          <p
            onClick={() => navigate("/Reset_pass")}
            className=" text-black cursor-pointer hover:text-blue-700"
          >
            Forgot Password?
          </p>

            <Button varient="text" className="!w-full text-center !m-auto">Request OTP</Button>

          <button className="w-full !py-3 rounded mt-1 !bg-[#fb541b] text-white font-medium">
            {state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-black-400 text-center text-ls mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-blue-700 cursor-pointer underline"
            >
              Login Hare
            </span>
          </p>
        ) : (
          <p className="text-black-400 text-center text-ls mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setstate("Sign Up")}
              className="text-blue-700 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
