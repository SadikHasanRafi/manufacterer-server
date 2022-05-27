import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItem = (
    <>
      {/* <Link><li>Home</li></Link> */}
      <NavLink to='/'><li><a>Home</a></li></NavLink>
      <NavLink to='dashboard'><li><a>Dashboard</a></li></NavLink>
      <NavLink to='product'><li><a>Products</a></li></NavLink>
      <NavLink to="review"><li><a>Review</a></li></NavLink>
      <NavLink to="blog"><li><a>Blog</a></li></NavLink>
      <NavLink to="portfolio"><li><a>Portfolio</a></li></NavLink>
    </>
  );

  return (
    <div class="navbar bg-base-100 justify-center">
      <div class="justify-start w-6/12">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a class="btn btn-ghost hidden lg:flex text-xl">Laptop Accessories LTD.</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-4">{menuItem}</ul>
      </div>

      <div className=" gap-0">
        <div class="navbar-end">
          <NavLink to="login"><a class="btn">Login</a></NavLink>
        </div>

        <div class="dropdown">
          <label tabindex="0" class="m-3" style={{}}>
            <div class="avatar mr-8">
              <div class="w-12 rounded-full border-4">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end lg:hidden">
      <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden mx-2">Open Dashboard</label>
      </div>
     
    </div>
  );
};

export default Header;
