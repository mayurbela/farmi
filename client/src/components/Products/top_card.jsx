import React from 'react';

function Top_card(props) {

  const price = parseInt(props.price);
  const sp = parseInt(props.sp);
  const discountPercentage = ((price - sp) / price) * 100;
  
  return (
    <div className='brightness-95'>        
      <div className='h-[48vh] w-[18vw] justify-between bg-white m-auto mt-4 shadow-2xl rounded-3xl overflow-hidden flex flex-col gap-2'>
        <img className='object-cover h-[22vh] w-full mx-auto' src={props.img} alt={props.name}></img>
        <h1 className="text-[25px] mx-6 font-semibold">{props.name}</h1>
        <h1 className="text-[22px] mx-6 font-semibold">Rs {props.sp}</h1>
        <div className='flex'>
          <h1 className="text-[15px] mx-6 font-semibold line-through">Rs {props.price}</h1>
          <h1 className='bg-green-600 text-[15px] rounded-md px-1 text-white'>{discountPercentage.toFixed(2)}% off</h1>
        </div>
        <div className="flex mx-6 items-center">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <svg
              key={starIndex}
              className={`h-4 w-5 ${starIndex < props.star ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
        <button className={`h-[5vh] w-[10vw] text-[20px] font-extrabold rounded-xl m-auto transition-all ease-in-out hover:text-white ${props.color}`}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Top_card;
