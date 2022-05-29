import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { Line } from "recharts";
import auth from "../../firebase.init";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  console.log(user.role)
  return (
      <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet/>
      </div>
      <div class="drawer-side">
        <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          
            <NavLink to='/dashboard'><li><a>My profile</a></li></NavLink>
            {
              user.role === 'Client'?
            <>
            <NavLink to='addreview'><li><a>Add a review</a></li></NavLink>
            <NavLink to='myorder'><li><a>My order</a></li></NavLink>
            </>
            :
            <>
            <NavLink to='manageallorder'><li><a>Manage all order</a></li></NavLink>
            <NavLink to='addproduct'><li><a>Add a product</a></li></NavLink>
            <NavLink to='makeadmin'><li><a>Make admin</a></li></NavLink>
            <NavLink to='manageproduct'><li><a>Manage product</a></li></NavLink>
            </>
            
            }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
