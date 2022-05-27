import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Line } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  // const status = []
  // let i =
  // status[i] = 'tab-acttive'
  // console.log(status)
  return (
      <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet/>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <NavLink to='dashboard/addreview'><li><a>Add a review</a></li></NavLink>
      <NavLink to='dashboard/myorder'><li><a>My order</a></li></NavLink>
      <NavLink to='/dashboard'><li><a>My profile</a></li></NavLink>
      <NavLink to='dashboard/manageallorder'><li><a>Manage all order</a></li></NavLink>
      <NavLink to='dashboard/addproduct'><li><a>Add a product</a></li></NavLink>
      <NavLink to='dashboard/makeadmin'><li><a>Make admin</a></li></NavLink>
      <NavLink to='dashboard/manageproduct'><li><a>Manage product</a></li></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
