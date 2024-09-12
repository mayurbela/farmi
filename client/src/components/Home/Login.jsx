import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "../Navbar";
import axios from "axios";
import {useAuth} from "../../Auth";

function Login() {
  const navigate = useNavigate();
  const [info, res] = useState({
    username: "",
    password: "",
  });

  const auth=useAuth();

 

  function change(event) {
    const { value, name } = event.target;
    res({ ...info, [name]: value });
  }

  async function click(e) {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/login", info);
      if (result.data.state) {
        auth.authupdate(true);
        localStorage.setItem('token',JSON.stringify(result.data));
        res({username:'',password:''});
        navigate('/');
      }
      else{
        alert("Invalid Credentials");
        res({username:'',password:''});

      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <div className="h-[10vh] w-vw bg-black"></div>
      <Navbar />
      <img
        className="absolute h-[90vh] mx-[5vw] w-vw object-cover "
        src="images/home/login.png"
      ></img>
      <div className="relative bg-white h-[55vh] w-[25vw] m-auto top-[20vh] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-violet-400 w-full h-[10vh]">
          <h1 className="font-sans font-bold text-[45px] text-center p-2 text-white underline">
            User Login
          </h1>
          <form className="flex flex-col justify-start gap-1">
            <div className="my-[2vh]">
              <label className="mx-[2vw] "> Usernname*</label>
              <input
                className=" border-slate-700 border-2 h-[5vh] w-[19vw] mx-[2vw] my-1  rounded-xl "
                type="text"
                name="username"
                id="username"
                value={info.username}
                onChange={change}
                size=""
                placeholder="      UserName"
                required
              />
            </div>
            <div>
              <label className="mx-[2vw]">Password* </label>
              <input
                className=" border-slate-700 border-2 h-[5vh] w-[19vw] mx-[2vw]  rounded-xl my-1 "
                type="text"
                name="password"
                value={info.password}
                onChange={change}
                placeholder="       Password"
                required
              />
            </div>
            <div className="h-[5vh] my-4">
              <input
                onClick={click}
                className=" transition-all ease-in-out h-[5vh] w-[19vw] mx-[2vw] text-[20px] bg-pink-400 hover:text-white hover:border-2 border-black rounded-xl"
                type="submit"
                size="5"
              />
            </div>
          </form>
          <div className="text-end px-9 my-3">
            New here?{" "}
            <Link to="/register">
              <button className=" text-slate-500 underline">SIGN-UP</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
