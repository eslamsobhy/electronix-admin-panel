import React from "react";

import { HiUserGroup, HiHome, HiViewBoards, HiViewGrid } from "react-icons/hi";

const navLinks = [
  {
    id: 1,
    url: "",
    text: "Dashboard",
    icon: <HiHome />,
  },
  {
    id: 2,
    url: "",
    text: "Categories",
    icon: <HiViewBoards />,
  },
  {
    id: 3,
    url: "",
    text: "Products",
    icon: <HiViewGrid />,
  },
  {
    id: 4,
    url: "",
    text: "Users",
    icon: <HiUserGroup />,
  },
];

const SideNav = () => {
  return (
    <>
      <section className="side-nav">
        <div className="user-info">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1326869177.1680443547&semt=sph"
            alt="name"
          />
          <div className="user-">Eslam Sobhi</div>
        </div>
        <article className="nav">
          {navLinks.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <div className="link" key={id}>
                <div className="icon">{icon}</div>
                <div className="text">{text}</div>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default SideNav;
