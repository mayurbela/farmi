import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

function Services_button(props) {

    const [check,rec]=useState(false);
    function clicked(){
        rec(!check)
    }
    useEffect(() => {
      if (props.check === true) {
          rec(false);
      }
  }, [props.check]);

  return (
    <div>
      <Link to="/service"><button onMouseEnter={clicked} className='relative opacity-80 text-[18px] text-white  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'> Service </button></Link>
      {check &&
      <div onMouseLeave={clicked} className=' rounded-xl brightness-[85%cd ] absolute right-[5vw] top-[9vh] h-[26vh] w-[19vw] shadow-xl bg-[#393e46]'>
       <div className="h-[35vh]">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">OUR SERVICES</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">FARM SERVICES</p> </a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">CHARITY</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">TRANSPORTATION</p></a>
          <a href="" ><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">OTHER</p></a>
          </div></div>

      </div>}

    </div>
  )
}

export default Services_button;
