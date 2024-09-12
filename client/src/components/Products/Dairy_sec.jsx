import React, { useState,useEffect } from 'react'
import Card from './Card'
import data2 from './dairy&del'
import axios from 'axios'

function Dairy_sec() {
  const [data,res]=useState([]);
  async function arr(){
    try{
      const result=await axios.get('http://localhost:3000/products');
      res(result.data.d);
    }
    catch(err){
      console.error(err.message);
    }
  }
  useEffect(()=>{
    arr();
  },[])

  return (
    <div>
      <div className="w-[87vw] flex m-auto gap-8 justify-between">
        <div className="w-[27vw] h-[15.5vh] border-b-2"></div>
        <h1 className="mt-[12vh] text-center text-[40px]">
          Dairy & Delights
        </h1>
        <div className="w-[27vw] h-[15.5vh] border-b-2 "></div>
      </div>
      <div className=' h-[133vh] w-vw mx-auto mt-[10vh] bg-[url("images/products/dairy-bg-1.jpg")] bg-no-repeat bg-cover  '>
            <div className=' bg-yellow-100 bg-opacity-60 h-[118vh] w-[90vw] relative top-20 m-auto rounded-2xl'>            
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
  )
}

export default Dairy_sec
