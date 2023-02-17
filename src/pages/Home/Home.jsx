import React from "react";
import { Categories } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <main className="main-container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="homepage-container">
        <Categories />

        <div className="spacer-3rem "></div>
      </div>
    </main>
  );
};

export default Home;
