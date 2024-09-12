import React from "react";

function Whyus() {
  return (
    <div >
      <div className="h-[65vh] w-vw  flex z-0">
        {/* <div className='bg-[url("images/home/bg-final.webp")]  bg-no-repeat size-96 bg-right opacity-70  h-2/3 w-[100vw]  '></div> */}
        <div className='bg-cover [h-60vh] w-[90vw] -top-10 relative left-[5vw]  bg-[url("https://countrystyleicecream.com/wp-content/uploads/2017/11/footer.png")] bg-no-repeat   '></div>

        {/* <div className='bg-[url("images/home/bg-final.webp")]  bg-no-repeat bg-contain bg-left opacity-70  h-2/3 w-[100vw] '></div> */}
        <div className="absolute bg-white  border-2 rounded-xl border-gray-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-1/2 w-2/3 left-64 top-5/6 ">
          <div className="flex justify-around h-full  ">
            <div className="p-5 h-96 w-1/2 ">
              <img
                className="object-cover bg-cover w-[27vw] h-80 m-6 rounded-2xl border-4 border-gray-400 "
                src="images/home/home2.jpg"
                alt="whyimg"
              />
            </div>
            <div className="w-1/2 h-96 p-5">
              <h1 className="font-extrabold text-3xl font-serif">
                Why Choose US??
              </h1>
              <div>  
                <p className="mt-5 font-extralight">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de
              </p>
              <button className="mt-2 rounded-md bg-orange-500 p-2 hover:bg-orange-600 hover:shadow-2xl hover:text-neutral-50 ">Know More</button>
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
