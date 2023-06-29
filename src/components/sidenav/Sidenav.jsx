import React from "react";

import { HiUserGroup, HiHome, HiViewBoards, HiViewGrid } from "react-icons/hi";

const navLinks = [
  {
    id: 1,
    url: "",
    text: "Dashboard",
    icon: <HiHome size={25} color="#b17a15" />,
  },
  {
    id: 2,
    url: "",
    text: "Categories",
    icon: <HiViewBoards size={25} color="#b17a15" />,
  },
  {
    id: 3,
    url: "",
    text: "Products",
    icon: <HiViewGrid size={25} color="#b17a15" />,
  },
  {
    id: 4,
    url: "",
    text: "Users",
    icon: <HiUserGroup size={25} color="#b17a15" />,
  },
];

const SideNav = () => {
  return (
    <>
      <section className="side-nav shadow-lg shadow-indigo-500/40 h-[100vh] w-1/5 flex flex-col">
        <div className="user-info flex flex-col justify-center items-center py-[35px]">
          <img
            className="w-1/4 rounded-[50%]"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1326869177.1680443547&semt=sph"
            alt="name"
          />
          <div className="user-name pt-[15px] text-[#616161] font-bold">
            Eslam Sobhi
          </div>
        </div>
        <div className="splitter h-[1px] w-[100%] bg-[#eee]"></div>
        <article className="nav pl-[25px] pt-[35px]">
          {navLinks.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <div
                className="link flex pb-[20px] group hover:cursor-pointer"
                key={id}
              >
                <div className="icon flex justify-center items-center pr-[10px]">
                  {icon}
                </div>
                <div className="text font-semibold text-[#757070] group-hover:text-[#b17a15]">
                  {text}
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default SideNav;
