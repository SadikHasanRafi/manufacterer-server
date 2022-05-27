import React from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    // const status = []
    // let i = 
    // status[i] = 'tab-acttive'
    // console.log(status)
    return (
        <div>
    <ul class="tabs tabs-boxed menu bg-indigo-200 p-8 overflow-y-auto w-80 bg-base-100 text-base-content rounded-xl h-screen">
      <NavLink to='addreview'><li><a>Add a review</a></li></NavLink>
      <NavLink to='myorder'><li><a>My order</a></li></NavLink>
      <NavLink to='profile'><li><a>My profile</a></li></NavLink>
      <NavLink to='manageallorder'><li><a>Manage all order</a></li></NavLink>
      <NavLink to='addproduct'><li><a>Add a product</a></li></NavLink>
      <NavLink to='makeadmin'><li><a>Make admin</a></li></NavLink>
      <NavLink to='manageproduct'><li><a>Manage product</a></li></NavLink>
    </ul>
</div>
    );
};

export default Dashboard;