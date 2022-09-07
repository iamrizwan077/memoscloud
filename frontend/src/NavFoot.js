import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <nav className="flex bg-[#e06377] items-center justify-between py-1 pl-4">
        <Link to="/" className="text-2xl font-semibold">
          MEMOS
        </Link>
        <ul>
          <li className="flex font-bold">
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
            <Link to="/accounts/signin">
              <div className="px-6 py-3  rounded-md hover:bg-[#c83349]">
                Sign In
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer className="relative">
        <div className="py-2 justify-center items-center flex bg-black text-white">
          All rights reserved @ Rizwan Riaz
        </div>
      </footer>
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

export default Nav;
