import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import SideNav from "./components/sidenav/SideNav";
import Navbar from "./components/nav/Navbar";
import MainContainer from "./components/main/MainContainer";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsNavOpen(false));

    return () => {
      window.removeEventListener("resize", navHandler);
    };
  }, []);

  return (
    <>
      <div className="flex">
        <SideNav isNavOpen={isNavOpen} />
        <div className="main w-[100%]">
          <Navbar isNavOpen={isNavOpen} navHandler={navHandler} />
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
