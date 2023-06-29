import React from "react";

import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-between items-center h-[5rem] w-[100%] shadow-sm shadow-indigo-500/40 py-[1rem] px-[2rem]">
        <div className="toggle-logo flex justify-between hover:cursor-pointer">
          <HiMenu size={40} color="#b17a15" />
        </div>
        <img
          className="w-[50px] rounded-[50%]"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1326869177.1680443547&semt=sph"
          alt="name"
        />
      </nav>
    </>
  );
};

export default Navbar;
