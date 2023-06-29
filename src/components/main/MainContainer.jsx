import React from "react";

import { navLinks } from "../sidenav/navData";

const MainContainer = () => {
  return (
    <>
      {navLinks.map((link) => {
        if (link.text == "Dashboard") return;
        return (
          <div key={link.id} className="card-container">
            <div className="card-info">
              <div className="info">
                <div className="name">All {link.text}</div>
                <div className="count">3</div>
              </div>
              <div className="icon">{<link.icon size={50} />}</div>
            </div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MainContainer;
