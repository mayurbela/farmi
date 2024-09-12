import React from 'react'
import Navbar from './components/Navbar'
import Banner_2 from './components/Products/Banner_2'
import Category from './components/Products/Category'
import Top from './components/Products/Top'
import Fruit_sec from './components/Products/Fruit_sec'
import Dairy_sec from './components/Products/Dairy_sec'
import Footer from './components/Footer'

function Product() {
  return (
    <div>
      <Navbar/>
      <Banner_2/>
      <Category/>
      <Top/>
      <Fruit_sec/>
      <Dairy_sec/>
      <Footer/>
    </div>

  )
}

export default Product
