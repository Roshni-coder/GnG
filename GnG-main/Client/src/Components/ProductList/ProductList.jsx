import React from 'react'
import productData from '../Consone/ProductData.js'
import RightProducts from './RightProducts.jsx'
import LeftFilter from './LeftFilter.jsx'
function ProductList() {
  return (
    <div>
        <h2 className="text-center text-2xl md:text-2xl font-bold text-gray-800 my-6">
          🎂 Birthday Wish List 🎂
        </h2>
        <div className="main flex justify-between gap-3 ">
        <div className="left-container !w-[20%] !h-[105vh] shadow-md bg-white">
        <LeftFilter/>
        </div>
      <div className="right-container  !w-[80%] border bg-white border-none m-auto  py-8">
        <RightProducts/>
      </div>
      </div>
    </div>
  )
}

export default ProductList
