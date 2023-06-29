import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import SideNav from "./components/sidenav/SideNav";
import Navbar from "./components/nav/Navbar";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="flex">
        <SideNav isNavOpen={isNavOpen} />
        <div className="main w-[100%]">
          <Navbar isNavOpen={isNavOpen} navHandler={navHandler} />
          <p className="p-[20px]">main</p>
        </div>
      </div>
    </>
  );
}

export default App;
