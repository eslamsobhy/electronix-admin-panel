import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import SideNav from "./components/sidenav/SideNav";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        <SideNav />
        <div className="main w-[100%]">
          <Navbar />
          <p className="p-[20px]">main</p>
        </div>
      </div>
    </>
  );
}

export default App;
