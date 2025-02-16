import React from "react";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { HiShoppingBag } from "react-icons/hi2";
import CartItems from "./CartItems";
function Cartpage() {
  return (
    <section className="section py-3">
      <div className="container w-[80%] mx-w-[80%] flex gap-4">
        <div className="leftPart w-[70%]">
          <div className="py-2 bg-white px-3 border-b border-[rgba(0,0,0,0.1)]">
            <h2 className="text-black ">Your Cart</h2>
            <p className="">
              There are <span className="font-bold">2</span> products in your
              cart
            </p>
          </div>
          <div className="shadow-md rounded-md bg-white reviewScroll w-full border-b border-gray-200  !max-h-[450px] overflow-y-scroll overflow-x-hidden">
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
        </div>

        <div className="rightPart w-[30%]">
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
            <Button className="btn-org w-full rounded-none flex gap-1 items-center justify-center">
              <HiShoppingBag className="text-[22px] pb-1" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartpage;
