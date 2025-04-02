import React, { useContext } from "react";

import SearchBox from "../../Components/SearchBox/SearchBox.jsx";
import {MyContext}  from "../../App.jsx"; 

function UsersList() {
  const { setIsOpenAddProductPanel } = useContext(MyContext);

  return (
    <>
      <div className="products shadow-md rounded-md py-2 !px-5 bg-white">
        <div className="flex items-center pt-3 px-1 justify-between ">
          <div className="col w-[40%] ">
          <h2 className="text-[25px] py-1 text-left  font-[600]">
           Users List
         </h2>
          </div>
          <div className="col w-[60%]">
          <SearchBox />
          </div>
        </div>
        <div className="relative pb-5 overflow-auto max-h-[550px] mt-5 ">
          <table className="w-full text-sm  text-center  text-gray-500 dark:text-gray-500">
            <thead className="text-xs uppercase text-[12px] bg-gray-100 !text-[rgba(0,0,0,0.8)]">
              <tr>
              <th scope="col" className="!px-6 py-4">
                  User ID
                </th>
                <th scope="col" className="!px-6 py-4">
                  Full Name
                </th>
                <th scope="col" className="!px-6 py-4 whitespace-nowrap">
                  Email
                </th>  <th scope="col" className="!px-6 py-4 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                 <tr  className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700">3434334</td>
                  <td className="px-6 py-4 text-gray-700">Bhoi Roshni JitendraBhai</td>
                  <td className="px-6 py-4 text-gray-700">roshnibhoi@gmail.com</td>
                  <td className="px-6 py-4 text-gray-700"> <button className="bg-red-500 rounded text-white px-4 py-2 font-[600] ">Remove</button> </td>
                </tr>
                <tr  className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700">3434334</td>
                  <td className="px-6 py-4 text-gray-700">Bhoi Roshni JitendraBhai</td>
                  <td className="px-6 py-4 text-gray-700">roshnibhoi@gmail.com</td>
                  <td className="px-6 py-4 text-gray-700"> <button className="bg-red-500 rounded text-white px-4 py-2 font-[600] ">Remove</button> </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersList;
