import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div>
      <div className='m-auto h-[10vh] text-[35px] w-full text-center  '><h1>What are you looking for Today?</h1></div>
      <div className='w-[90vw] h-[25vh] m-auto flex justify-around' >

        <div className='w-1/8 p-2  '>
        <Link to="/product/milk"><img className='transition-all ease-in-out hover:size-40 object-cover rounded-full size-36 m-auto mt-6 border-2 border-black' src="images/products/milk.jpeg"></img> </Link>
        <Link to="/product/milk"><h1 className=' text-center text-[20px] mt-1'>Milk</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/poultry"><img className='transition-all ease-in-out hover:size-40 object-cover rounded-full size-36 m-auto mt-6 border-2 border-black' src="images/products/egg.jpeg"></img> </Link>
        <Link to="/product/poultry"><h1 className='text-center text-[20px] mt-1'>Eggs</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/meat"><img className='transition-all ease-in-out hover:size-40 object-cover rounded-full size-36 m-auto mt-6 border-2 border-black' src="images/products/meat.jpeg"></img> </Link>
        <Link to="/product/meat"><h1 className='text-center text-[20px] mt-1'>Meat</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/vegetable"><img className='object-cover rounded-full size-36 m-auto transition-all ease-in-out hover:size-40 mt-6 border-2 border-black' src="images/products/vegetable.jpeg"></img> </Link>
        <Link to="/product/vegetable"><h1 className='text-center text-[20px] mt-1'>Vegetables</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/fruits"><img className='object-cover rounded-full size-36 transition-all ease-in-out hover:size-40 m-auto mt-6 border-2 border-black' src="images/products/fruits.jpeg"></img> </Link>
        <Link to="/product/fruits"><h1 className='text-center text-[20px] mt-1'>Fruits</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/cereals"><img className='transition-all ease-in-out hover:size-40 size-36 object-cover rounded-full m-auto mt-6 border-2 border-black' src="images/products/grains.jpeg"></img> </Link>
        <Link to="/product/cereals"><h1 className='text-center text-[20px] mt-1'>Grains</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/dryfruit"><img className='transition-all ease-in-out hover:size-40 object-cover rounded-full size-36 m-auto mt-6 border-2 border-black' src="images/products/dryfruits.jpeg"></img> </Link>
        <Link to="/product/dryfruit"><h1 className='text-center text-[20px] mt-1'>Dryfruits</h1></Link>
        </div>

        <div className='w-1/8 p-2'>
        <Link to="/product/spices"><img className='transition-all ease-in-out hover:size-40 object-cover rounded-full size-36 m-auto mt-6 border-2 border-black' src="images/products/spice.jpeg"></img> </Link>
        <Link to="/product/spices"><h1 className='text-center text-[20px] mt-1'> Spices</h1></Link>
        </div>



      </div>
    </div>
  )
}

export default Category
