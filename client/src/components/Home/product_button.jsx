import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

function Product_button(props) {
    const[check,rec]=useState(false);

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
      <Link to="/product"><button onMouseEnter={clicked}  className=' relative opacity-80 text-[18px] text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out'>Products</button></Link>
      {check &&
      <div onMouseLeave={clicked} className=' brightness-[85%] absolute rounded-xl right-[7vw] top-[9vh] h-[23vh] w-[60vw] shadow-xl bg-[#393e46] flex z-[5]  '>
       <div className="h-[20vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">DAIRY & DELIGHTS</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <Link to="/product/milk"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">MILK & PRODUCTS</p> </Link>
           <Link to="/product/poultry"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">POULTRY</p></Link>
           <Link to="/product/meat"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">MEAT</p></Link>
          </div></div>
          
          <div className="h-[20vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">FRUITS & VEGETABLE</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
           <Link to="/product/fruits"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">FRESH FRUITS</p> </Link>
          <Link to="/product/vegetable"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">FRESH VEGETABLE</p></Link>
          <Link to="/product/spices"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">HERBS AND SPICES</p></Link>
          </div></div>

          <div className="h-[20vh] w-1/3">
          <h1 className="h-[4vh] w-[15vw] m-auto my-[20px] text-[20px] text-bottom text-gray-200 font-extrabold border-b-2  ">GROCERIES</h1>
          <div className= "relative text-[15px] text-gray-300 w-[15vw] m-auto font-extralight flex flex-col gap-1 ">
          <Link to="/product/cereals"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">CEREALS</p></Link>
          <Link to="/product/pulses"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">PULSES</p></Link>
          <Link to="/product/dryfruit"><p className="transition-all duration-50 ease-in-out hover:text-white  hover:px-2">DRYFRUITS & NUTS</p></Link>
          </div></div>

      </div>}

    </div>
  )
}

export default Product_button