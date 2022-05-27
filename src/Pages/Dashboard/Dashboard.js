import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Line } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    // const status = []
    // let i = 
    // status[i] = 'tab-acttive'
    // console.log(status)
    return (
        <div className='flex'>
    <ul class="tabs tabs-boxed menu bg-indigo-200 p-8 overflow-y-auto w-80 bg-base-100 text-base-content rounded-xl h-[80vh]">
      <NavLink to='dashboard/addreview'><li><a>Add a review</a></li></NavLink>
      <NavLink to='dashboard/myorder'><li><a>My order</a></li></NavLink>
      <NavLink to='/dashboard'><li><a>My profile</a></li></NavLink>
      <NavLink to='dashboard/manageallorder'><li><a>Manage all order</a></li></NavLink>
      <NavLink to='dashboard/addproduct'><li><a>Add a product</a></li></NavLink>
      <NavLink to='dashboard/makeadmin'><li><a>Make admin</a></li></NavLink>
      <NavLink to='dashboard/manageproduct'><li><a>Manage product</a></li></NavLink>
    </ul>
    <Outlet></Outlet>
</div>
    );
};

export default Dashboard;