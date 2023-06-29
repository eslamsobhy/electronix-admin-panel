import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
          <div className="link">
            <div className="icon">
              <img src={viteLogo} alt="" />
            </div>
            <div className="text">Dashboard</div>
          </div>
          <div className="link">
            <div className="icon">
              <img src={viteLogo} alt="" />
            </div>
            <div className="text">Users</div>
          </div>
          <div className="link">
            <div className="icon">
              <img src={viteLogo} alt="" />
            </div>
            <div className="text">Categories</div>
          </div>
          <div className="link">
            <div className="icon">
              <img src={viteLogo} alt="" />
            </div>
            <div className="text">Products</div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
