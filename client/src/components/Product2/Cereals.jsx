import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Products/Card'
// import poultry from './poultry'
import axios from 'axios'

function Cereals() {
  const [comm, res] = useState([]);

  async function arr() {
    try {
      const result = await axios.get("http://localhost:3000/products/?cat=cereal");
      res(result.data);
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
      <div className='h-[90vh] w-screen bg-[url("/images/allprod/dairy-bg-3.jpg")]  bg-cover bg-right-bottom'>
        <div className="font-sans  m-auto relative text-[85px] h-[10vh] w-[20vw] top-[25vh]">
           <span className="font-extrabold"> Cereals</span>
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
  )
}

export default Cereals
