import React,{useState,useEffect} from 'react'
import { CountUp } from 'use-count-up'

function counter() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000) {
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

  return (
   
      <div>
         {scroll && (
    <div className=' relative h-[20vh] w-vw top-[18vh]  '>
      <div className= ' counter flex relative h-[30vh] w-[80vw] m-auto'>

        <div className='h-[20vh] w-1/4 flex flex-col border-r-2'>
        <h1 className='text-[55px] font-extralight text-center '> <CountUp isCounting end={20} duration={2}  /></h1>
        <p className='text-[20px] text-center font-extrabold '>Dairy products</p>
        </div>
        <div className='h-[20vh] w-1/4 flex flex-col border-r-2'>
        <h1 className='text-[55px] font-extralightlight text-center '> <CountUp isCounting end={500} duration={3}  /></h1>
        <p className='text-[20px] text-center font-extrabold '>Happy Farmers</p>
        </div>
        <div className='h-[20vh] w-1/4 flex flex-col border-r-2'>
        <h1 className='text-[55px] font-extralightlight text-center '> <CountUp isCounting end={300} duration={3}  /></h1>
        <p className='text-[20px] text-center font-extrabold '>Happy Animals</p>
        </div>
        <div className='h-[20vh] w-1/4 flex flex-col'>
        <h1 className='text-[55px] font-extralightlight text-center '> <CountUp isCounting end={2000} duration={4}  /></h1>
        <p className='text-[20px] text-center font-extrabold '>Customer</p>
        </div>

      </div>
    </div>
      )}
    </div>
    
  )
}

export default counter
