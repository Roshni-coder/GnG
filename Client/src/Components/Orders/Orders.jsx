import React from 'react'
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { HiShoppingBag } from "react-icons/hi2";
import CartItems from "../Cart Page/CartItems.jsx";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <section className="section py-3">
    <div className="container lg:w-[80%] lg:mx-w-[80%] w-full lg:flex gap-4">
      <div className="leftPart lg:w-[70%] w-full">
        <div className="pt-4 py-1 bg-white sm:px-3 px-2 border-b border-[rgba(0,0,0,0.1)]">
          <p className=" !text-[14px]"> Dilever To : <span className='font-[600] text-black'> Visnagar - 357483 </span> </p>
        </div>
        <div className="shadow-md rounded-md bg-white reviewScroll w-full border-b border-gray-200  !max-h-[460px] overflow-y-scroll overflow-x-hidden">
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
      </div>

      <div className="rightPart w-full lg:!m-0 mt-4 lg:w-[30%]">
        <div className="shadow-md rounded-md  bg-white p-5 ">
          <h3 className="pb-3 px-1">PRICE DETAILS</h3>
          <Divider />
          <p className="flex items-center justify-between pt-3 px-1">
            <span className="text-[14px] font-[500]">Price (3 items)</span>
            <span className="font-bold">₹2700</span>
          </p>
          <p className="flex items-center justify-between py-1 px-1">
            <span className="text-[14px] font-[500]">Discount</span>
            <span className="font-bold">20% Off</span>
          </p>
          <p className="flex items-center justify-between py-1 px-1">
            <span className="text-[14px] font-[500]">Delivery Charges</span>
            <span className="font-bold">Free</span>
          </p>

          <p className="flex items-center justify-between py-1 px-1">
            <span className="text-[14px] text-black font-[600]">
              Total Amount
            </span>
            <span className="font-bold text-[14px] text-black">₹2,000</span>
          </p>
          <Link to=''>
          <Button className="btn-org w-full rounded-none flex gap-1 items-center justify-center">
            <HiShoppingBag className="text-[22px] pb-1" />
            Place Prder
          </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Orders
