import React from 'react';

function Banner() {
  return (
    <div className='h-[130vh]'>
      <div className='h-[90vh] bg-no-repeat bg-cover bg-[url("images/products/product_poster.jpg")]'></div>
      <div className="flex h-[18vh] w-[90vw] mt-[10vh] m-auto">

        <div className="h-full w-1/4 flex flex-col border-r-2">
          <div className="h-[6vh]">
          <img className='size-16 m-auto' src="images/products/del_icon.png"></img>
          </div>
          <div className="h-[6vh] m-auto ">
            <h1 className='mt-4 text-[25px] font-serif font-medium'>FREE SHIPPING</h1>
          </div>
          <div className="h-[6vh] mt-2  font-sans m-auto flex flex-col">
          <span className='m-auto'>Enjoy free shipping on all</span>
          <span className='m-auto'>your orders.</span>
          </div>
        </div>

        <div className="h-full w-1/4 flex flex-col border-r-2">
          <div className="h-[6vh]">
          <img className='size-14 m-auto' src="images/products/clock_icon.png"></img>
          </div>
          <div className="h-[6vh] m-auto ">
            <h1 className='mt-4 text-[25px] font-serif font-medium'>24/7 SUPPORT</h1>
          </div>
          <div className="h-[6vh] w-[13vw] mt-2 font-sans m-auto flex flex-col">
          <span className='m-auto'>Reach out to us anytime,</span>
          <span className='m-auto'>we are at your service</span>
          </div>
        </div>

        <div className="h-full w-1/4 flex flex-col border-r-2">
          <div className="h-[6vh]">
          <img className='size-16 m-auto' src="images/products/offer_icon.webp"></img>
          </div>
          <div className="h-[6vh] m-auto ">
            <h1 className='mt-4 text-[25px] font-serif font-medium'>FREE SHIPPING</h1>
          </div>
          <div className="h-[6vh] mt-2 font-sans m-auto flex flex-col">
          <span className='m-auto'>Enjoy discounts using our offer cards</span>
          <span className='m-auto'> and coupon codes.</span>
          </div>
        </div>

        <div className="h-full w-1/4 flex flex-col">
          <div className="h-[6vh]">
          <img className='size-16 m-auto' src="images/products/lock_icon.png"></img>
          </div>
          <div className="h-[6vh] m-auto ">
            <h1 className='mt-4 text-[25px] font-serif font-medium'>SECURE PAYMENT</h1>
          </div>
          <div className="h-[6vh] mt-2 font-sans m-auto flex flex-col">
          <span className='m-auto'>We provide secure payment gateways </span>
          <span className='m-auto'>your orders.</span>
          </div>
        </div>
      </div>
      </div>

  );
}

export default Banner;
