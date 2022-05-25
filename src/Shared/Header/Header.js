import React from "react";

const Header = () => {
  const menuItem = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Dashboard</a>
      </li>

      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Review</a>
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-100 ">
      <div class="navbar-start">
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
        <a class="btn btn-ghost normal-case text-xl">Laptop Accessories LTD.</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItem}</ul>
      </div>

      <div className=" gap-0">
        <div class="navbar-end">
          <a class="btn">Login</a>
        </div>

        <div class="dropdown">
          <label tabindex="0" class="m-3" style={{}}>
            <div class="avatar">
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
    </div>
  );
};

export default Header;
