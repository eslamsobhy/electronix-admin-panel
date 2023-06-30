import React from "react";

import { navLinks } from "../sidenav/navData";
import Card from "./Card";

import { useGlobalContext } from "../../../context";

const MainContainer = () => {
  const { products, categories, users } = useGlobalContext().state;
  return (
    <>
      <h1 className="mt-[1rem] ml-[2rem] font-bold text-[25px] text-[#b17a15]">
        Electro Dashboard
      </h1>
      <div className="main p-[2rem] flex flex-wrap justify-evenly">
        {navLinks.map((link) => {
          if (link.text == "Dashboard") return;
          else if (link.text == "Products")
            return <Card key={link.id} comp={products} link={link} />;
          else if (link.text == "Users")
            return <Card key={link.id} comp={users} link={link} />;
          else if (link.text == "Categories")
            return <Card key={link.id} comp={categories} link={link} />;
        })}
      </div>
    </>
  );
};

export default MainContainer;
