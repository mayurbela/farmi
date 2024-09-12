import React,{useState,useEffect} from "react";
import Navbar from "../Navbar";
// import milk_prod from "./Milk_prod";
import Card from "../Products/Card";
import Footer from "../Footer";
import axios from "axios";

function Dairydon() {
  const [comm, res] = useState([]);

  async function arr() {
    try {
      const results = await axios.get("http://localhost:3000/products/?cat=dairy");
      res(results.data);
      console.log(results.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    arr();
  }, []);

  return (
    <div >
      <Navbar />
      <div className='h-[90vh] w-vw bg-[url("/images/allprod/dairy-bg-3.jpg")]  bg-cover bg-right-bottom'>
        <div className="font-sans  m-auto relative text-[85px] h-[10vh] w-[20vw] top-[25vh]">
          MILK &<span className="font-extrabold"> Products</span>
        </div>
      </div>
      <div className="mt-[10vh] p-5 py-[10vh] bg-blue-100  flex flex-wrap justify-around">
       
        {comm.map((k) => {
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
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default Dairydon;
