import React from 'react'
import {TextField,Button} from '@mui/material'
function SellerProfile() {
  return (
    <>
    <div className="card bg-white  shadow-md rounded px-10 ">
    <h1 className="text-[17px]  py-4 font-[600]">Seller Profile</h1>
    <div className='main flex justify-between'>
     <div className='flex flex-col gap-1 pb-5'>
      <p>Name : Bhoi Roshni </p>
      <p>phone : 7724345312</p>
      <p>Email : roshnibhoi232@gmail.com</p>
     </div>
     <div className="btn !pb-10">
      <button  className='!px-10 border rounded border-blue-500 py-1 text-blue-500'>Edit</button></div>
    </div>
    </div>
    <br />
     <div className="card bg-white  shadow-md rounded p-10">
         
       <form className="w-full items-center !m-auto ">
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Name and Phone *</h6>
              <div className="lg:flex items-center gap-3">
                <TextField className="w-full lg:w-[50%]" label="Full Name" size="small" variant="filled" />
                <TextField className="w-full lg:w-[50%] lg:mt-0 mt-3" label="Phone Number" size="small" variant="filled" />
              </div>
              <h6 className="pt-3 mb-2 px-1 text-[13px] font-[500]">Email Address *</h6>
              <TextField className="w-[100%]" label="Email Address" size="small" variant="filled" />
              <div className="btn flex justify-center mt-8 w-full">
                <Button variant="contained" className="w-[35%] !m-auto !bg-[#fb541b] !h-[45px]">
                  Save
                </Button>
              </div>
            </form>
      </div>
    </>
  )
}

export default SellerProfile
