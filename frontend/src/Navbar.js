import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "./AuthContext";

const Navbar = () => {

  let {auth, logoutUser} = useContext(AuthContext)
  return (
    <>
      <nav className="flex bg-[#e06377] items-center justify-between py-1 pl-4">
        <Link to="/" className="text-2xl font-semibold">
          MEMOS
        </Link>
        <ul>
          <li className="flex font-bold">
          {auth &&  <>
            <Link to="/home">
              <div className="px-6  rounded-md  py-3  hover:bg-[#c83349]">
                Home
              </div>
            </Link>
            <Link to="/gallery">
              <div className="px-6 py-3  rounded-md hover:bg-[#c83349]">
                Gallery
              </div>
            </Link>

            <Link to="/profile">
              <div className="px-6 py-3  rounded-md hover:bg-[#c83349]">
                Profile
              </div>
            </Link>
            </>
            }
            {auth ?
            <Link to="/" onClick={logoutUser}>
              <div className="px-6 py-3  rounded-md hover:bg-[#c83349]">
                Logout
              </div>
            </Link>
            :
            <Link to="/accounts/login">
              <div className="px-6 py-3  rounded-md hover:bg-[#c83349]">
                Login
              </div>
            </Link>}
          </li>
        </ul>
      </nav>
      <Outlet />
      
    </>
  );
};
{
  /*}
const NavLink = styled(Link)`
  padding: 20px;
  color: black;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;
*/
}

export default Navbar;
