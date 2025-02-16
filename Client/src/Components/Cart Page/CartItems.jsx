import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import Rating from "@mui/material/Rating";
import { IoCloseSharp } from "react-icons/io5";

function CartItems() {
  return (
    <div>
      <div className="cartitems border-b border-gray-100 w-full p-3 flex items-center gap-4">
        <div className="img w-[15%] rounded-md overflow-hidden">
          <Link to="" className="group">
            <img
              src="https://www.fnp.com/images/pr/s/v20221205201829/red-velvet-fresh-cream-cake-half-kg_1.jpg"
              alt=""
              className="w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>
        <div className="info w-[85%] relative">
          <IoCloseSharp className="cursor-pointer link transition-all absolute !top-[0px] !right-[0px] text-[22px]" />
          <h3 className="text-[15px] text-black">
            <Link to="/productdetails/2" className="link">
              Red Velvet Fresh Cream Cake Half kg
            </Link>
          </h3>
          <div className="flex items-center py-2  gap-3">
            <span className="text-gray-400 sm:!text-[15px] text-[12px] ">
              Brands :
              <span className="font-[400] text-[12px]  sm:!text-[14px] text-gray-600  pl-1">
                BirthDay Cake
              </span>
            </span>
            <Rating name="sixe-small" defaultValue={4} sixe="small" readOnly />
            <span className="text-[13px] sm:!text-[14px] cursor-pointer">
              Review {5}
            </span>
          </div>
          <div className="flex items-center gap-4 my-1">
            <span className="price text-black text-[15px] font-[600]">
              ₹900
            </span>
            <span className="oldPricce line-through text-grat-500 text-[13px] sm:!text-[14px] font-[500]">
              ₹1500
            </span>
            <span className="price text-[#7d0492] text-[14px] font-[600]">
              20% off
            </span>
          </div>
          <div className="flex gap-4 items-center pt-2 mb-1">
            <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
              <FaRegHeart className="text-[16px] " /> Add to WhishList
            </span>
            <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
              <GoGitCompare className="text-[18px] " /> Add to Compare
            </span>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default CartItems;
