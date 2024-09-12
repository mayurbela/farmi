import React,{useEffect,useState} from 'react'
import Card from './Card'
// import data from './fruit_veg'
import axios from 'axios'

function Fruit_sec() {
  const [data,res]=useState([]);

  async function call(){
      try{
        const result=await axios.get("http://localhost:3000/products");
        res(result.data.f);
      }
      catch(err){
        console.error(err.message);
      }
  }
  useEffect(()=>{
    call();
  },[])

  return (
    <div>
        <div className=''>
        <div className="w-[87vw] flex m-auto gap-8 justify-between">
        <div className="w-[27vw] h-[15.5vh] border-b-2"></div>
        <h1 className="mt-[12vh] text-center text-[40px]">
          Fruits & Vegetables
        </h1>
        <div className="w-[27vw] h-[15.5vh] border-b-2 "></div>
      </div>
          <div className=' h-[130vh] w-vw mx-auto mt-[10vh] bg-[url("images/products/download.jpeg")] bg-no-repeat bg-cover  '>
            <div className='bg-green-100 bg-opacity-70 h-[125vh] w-[90vw] m-auto rounded-2xl'>            
            <div className=' relative flex flex-wrap gap-0 justify-around '>
            {data.slice(0,6).map((k) => {
            return (
                <Card
                  key={k.id}
                  id={k.id}
                  name={k.name}
                  price={k.price}
                  sp={k.sp}
                  cat={k.cat}
                  subcat={k.subcat}
                  img={k.img}
                  star={k.star}
                  color={k.color}
                />
              )})}
</div>

            </div>
          </div>
       
        </div>
      
    </div>
  )
}

export default Fruit_sec
