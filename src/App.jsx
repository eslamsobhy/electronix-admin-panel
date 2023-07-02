import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import viteLogo from "/vite.svg";
import "./App.css";

import SideNav from "./components/sidenav/SideNav";
import Navbar from "./components/nav/Navbar";
import MainContainer from "./components/main/MainContainer";
import ShowUsers from "./components/users/ShowUsers";
import ShowProducts from "./components/products/ShowProducts";
import ShowCategories from "./components/categories/ShowCategories";
import CategoryForm from "./components/categories/CategoryForm";
import UpdateCategory from "./components/categories/UpdateCategory";
import AddUser from "./components/users/AddUser";
import AddProduct from "./components/products/AddProduct";

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
        <div
          className={`main ${
            isNavOpen ? "w-[80%] ml-[20%]" : "w-[93.7%] ml-[6.3%]"
          }`}
        >
          <Navbar isNavOpen={isNavOpen} navHandler={navHandler} />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/users" element={<ShowUsers />} />
            <Route path="/products" element={<ShowProducts />} />
            <Route path="/categories" element={<ShowCategories />} />
            <Route path="/add-category" element={<CategoryForm />} />
            <Route path="/edit-category/:id" element={<UpdateCategory />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
