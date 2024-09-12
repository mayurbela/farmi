import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  async function submit(e) {
    e.preventDefault();

    try {
      const t = await axios.post("http://localhost:3000/register", info);
      console.log(t.data);
      setInfo({
        username: "",
        password: "",
      });
      toast.success("Registration successful");
      // navigate('/');
    } catch (err) {
      console.error(err.message);
      toast.error("Registration failed");
    }
  }

  function change(event) {
    const { value, name } = event.target;
    setInfo({ ...info, [name]: value });
  }

  return (
    <div>
      <div className="h-[10vh] w-vw bg-black"></div>
      <Navbar />
      <img
        className="absolute h-[90vh] w-vw mx-[5vw] object-cover "
        src="images/home/login.png"
        alt="Background"
      />
      <div className="relative bg-white h-[55vh] w-[25vw] m-auto top-[20vh] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-violet-400 w-full h-[10vh]">
          <h1 className="font-sans font-bold text-[45px] text-center p-2 text-white underline">
            New Register
          </h1>
        </div>
        <form className="flex flex-col justify-start gap-1" onSubmit={submit}>
          <div className="my-[2vh]">
            <label className="mx-[2vw]">E-Mail*</label>
            <input
              className="border-slate-700 border-2 h-[5vh] w-[19vw] mx-[2vw] my-1 rounded-xl"
              type="text"
              name="username"
              id="username"
              value={info.username}
              onChange={change}
              placeholder="      UserName"
              required
            />
          </div>
          <div>
            <label className="mx-[2vw]">Password*</label>
            <input
              className="border-slate-700 border-2 h-[5vh] w-[19vw] mx-[2vw] rounded-xl my-1"
              type="password"
              name="password"
              value={info.password}
              onChange={change}
              placeholder="       Password"
              required
            />
          </div>
          <div className="h-[5vh] my-4">
            <input
              className="transition-all ease-in-out h-[5vh] w-[19vw] mx-[2vw] text-[20px] bg-pink-400 hover:text-white hover:border-2 border-black rounded-xl"
              type="submit"
              value="Register Now"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
