import React, { useState, useEffect } from 'react';
import Product_button from './Home/product_button';// Ensure the correct path
import Services_button from './Home/Services_button'; // Ensure the correct path
import { Link } from 'react-router-dom';



function Navbar() {
  const [check, setCheck] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMouseEnter(){
    setCheck(true);
  };

  const scrollClass = scroll ? 'z-[10] h-[9vh] flex justify-between p-5 fixed top-0 w-full bg-zinc-800 bg-opacity-100' : 'h-15 flex justify-between p-5 fixed top-0 w-full font-extrabold';

  return (
    <div>
    <nav className={scrollClass}>
      <div className="align-middle">
        <img className="relative px-1 h-28 size-[200px] opacity-100 -top-7" src='/images/home/logo-2.png' alt="Logo" />
      </div>
      <div>
        <ul className='flex px-4 py-2 space-x-12 justify-center h-22 align-text-top'>
          <li><Link to="/"><button onMouseEnter={handleMouseEnter} className='relative opacity-80 text-[18px] text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out'>Home</button></Link></li>
          <li><Link to="/about"><button onMouseEnter={handleMouseEnter} className='relative opacity-80 text-[18px] text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out'>About</button></Link></li>
          <li><Product_button check={check} /></li>
          <li><Link to="/gallery"><button onMouseEnter={handleMouseEnter} className='relative opacity-80 text-[18px] text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out'>Gallery</button></Link></li>
          <li><Services_button check={check} /></li>
          <li><Link to="/contact"><button onMouseEnter={handleMouseEnter} className='relative opacity-80 text-[18px] text-white hover:text-gray-400 cursor-pointer transition-all ease-in-out'>Contact</button></Link></li>
          <Link to="/cart"><div className=' h-[8vh] z-10 w-[9vh] m-auto  '><img src="/images/home/cart.png"/> </div> </Link> 
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;