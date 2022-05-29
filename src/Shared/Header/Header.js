import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import UserImg from "../UserImg/UserImg";
import { signOut } from "firebase/auth";
import AddUserInfo from "../../Components/AddUserInfo";
import toast, { Toaster } from "react-hot-toast";



const Header = () => {

  const [user] = useAuthState(auth);


  const handleSignOut = () => {
    signOut(auth)
    toast.success("Successfully signed out.");
  }


  

  const menuItem = (
    <>
      {/* <Link><li>Home</li></Link> */}
      <NavLink to='/'><li><a>Home</a></li></NavLink>
      {
           user && <NavLink to='dashboard'><li><a>Dashboard</a></li></NavLink>
      }
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
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to='/'><a class=" hover:shadow-sm  hidden lg:flex text-2xl">Laptop Accessories LTD.</a></Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-4">{menuItem}</ul>
      </div>

      <div className=" gap-0">
        <div class="navbar-end">
         {
           !user &&  <NavLink to="login"><a class="btn">Login</a></NavLink>
         }
        </div>

        <div class="dropdown  dropdown-end">
          {
            user && <UserImg></UserImg>
          }


          <ul
            tabIndex="0"
            class="dropdown-content  menu p-2  bg-base-100 rounded-box w-52"
          >
            
            <Link to='/'><li>{ user && <button class="btn shadow btn-outline btn-secondary" onClick={handleSignOut}>Sign Out</button>}</li></Link>
          </ul>
        </div>
      </div>
      <div className="navbar-end lg:hidden">
      <label htmlFor="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden mx-2">Open Dashboard</label>
      </div>
      <Toaster />
       <AddUserInfo></AddUserInfo> 
     
    </div>
  );
};

export default Header;
