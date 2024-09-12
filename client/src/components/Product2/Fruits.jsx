import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Products/Card";

import axios from "axios";

function Fruits() {
  const [comm, res] = useState([]);

  async function arr() {
    try {
      const result = await axios.get("http://localhost:3000/products/?cat=fruit");
      res(result.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    arr();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='h-[90vh] w-screen bg-[url("/images/allprod/dairy-bg-3.jpg")] bg-cover bg-right-bottom'>
        <div className="font-sans m-auto relative text-[85px] h-[10vh] w-[20vw] top-[25vh]">
          Fresh <span className="font-extrabold"></span>
        </div>
      </div>
      <div className="mt-[10vh] p-5 py-[10vh] bg-blue-100 flex flex-wrap justify-around">
        {comm.map((fruit) => {
           return(<Card
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            sp={fruit.sp}
            cat={fruit.cat}
            subcat={fruit.subcat}
            img={fruit.img}
            star={fruit.star}
            color={fruit.color}
          />);
})}
      </div>
      <Footer />
    </div>
  );
}

export default Fruits;
