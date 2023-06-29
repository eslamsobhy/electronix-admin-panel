import React from "react";

import { navLinks } from "../sidenav/navData";
import Card from "./Card";

const MainContainer = () => {
  return (
    <>
      <h1 className="mt-[1rem] ml-[2rem] font-bold text-[25px] text-[#b17a15]">
        Electro Dashboard
      </h1>
      <div className="main p-[2rem] flex flex-wrap justify-evenly">
        {navLinks.map((link) => {
          if (link.text == "Dashboard") return;
          return <Card key={link.id} link={link} />;
        })}
      </div>
    </>
  );
};

export default MainContainer;
