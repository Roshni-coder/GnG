import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header.jsx'
import SideBar from './Components/Sidebar/SideBar.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      exact:true,
      element:(
        <>
        <section className='main'>
        <Header/>
        <div className="mainContaint flex">
          <div className="sidebarWrapper !w-[18%]">
            <SideBar/>
          </div>
          <div className="contentRight !w-[82%] !py-4 !px-3 ">
            <DashBoard/>
          </div>
        </div>
        </section>
        </>
      )
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
