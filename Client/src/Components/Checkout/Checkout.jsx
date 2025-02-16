import React from "react";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <section className="py-3">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="cart bg-white rounded-md shadow-md p-5">
            <h1 className="text-black text-[18px] pl-1">
              Belling Details
            </h1>
            <form action="" className="w-full mt-2">
            <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                Name and Phone *
              </h6>
              <div className="flex items-center  gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full !rounded-none"
                    type="name"
                    id="filled-basic"
                    label="Full Name"
                    size="small"
                    variant="filled"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full bg-white"
                    type="phone"
                    id="filled-basic"
                    label="Phone Number"
                    size="small"
                   variant="filled"
                  />
                </div>
              </div>

              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                Street address *
              </h6>
              <div className="flex items-center">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    type="name"
                    id="filled-basic"
                    label="Address (Area and Street)"
                    size="small"
                    variant="filled"
                  />
                </div>
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                City and State*
              </h6>
              <div className="flex items-center  gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="name"
                    id="filled-basic"
                    label="City/District/Town"
                    size="small"
                    variant="filled"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="phone"
                    id="filled-basic"
                    label="State"
                    size="small"
                   variant="filled"
                  />
                </div>
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                PinCode and Alternat Phone *
              </h6>
              <div className="flex items-center  gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="name"
                   id="filled-basic"
                    label="PinCode"
                    size="small"
                  variant="filled"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="phone"
                    id="filled-basic"
                    label="Alternate Number"
                    size="small"
                    variant="filled"
                  />
                </div>
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">
                Email Address*
              </h6>
              <div className="flex items-center">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    type="name"
                   id="filled-basic"
                    label="Email Address"
                    size="small"
                  variant="filled"
                  />
                </div>
              </div>
              <div className="btns flex justify-center gap-2 items-center mt-5 ">
            <button className="sm:h-[50px]  w-[50%] !bg-[#ff9f00]" variant="contained">
              Change
            </button>
            <button className=" sm:h-[50px] w-[50%]  !bg-[#fb541b] " variant="contained">
              Save 
            </button>
            </div>
            </form>
          </div>
        </div>

        <div className="rightPart w-full lg:!m-0 mt-4 lg:w-[30%]">
          <div className="shadow-md rounded-md  bg-white p-5 ">
            <h3 className="pb-3 px-1">Delivery Address</h3>
            <Divider />
            <p className="mt-4 mb-1 mx-1"><span className="font-bold">Full Name : </span> Bhoi Roshni Jitendrabhai</p>
            <p className="my-1 mx-1"><span className="font-bold">Address : </span> Baji patel ni vhorvad,Fatehdarvaja</p>
            <p className="my-1 mx-1"><span className="font-bold">Location : </span> Visnagar,Mahesana.Gujrat - 347662</p>
            <p className="my-1 mx-1"><span className="font-bold">Email: </span> roshni233@gmai.com</p>
            <p className="my-1 mx-1"><span className="font-bold">Phone: </span> 6732867378</p>
            
            <Link to='/orders'>
            <button className="btn-org w-full rounded-none flex gap-1 items-center justify-center">
              <HiShoppingBag className="text-[22px] pb-1" />
              Deliver Here
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
