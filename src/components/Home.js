import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <div id="container">
      <img
        src={require("../assets/Eminem-background.jpg")}
        alt="eminem-background"
        id="eminem-background"
      />
      <div className="center">
        <Link to={"/shop"}>
          <button id="enter-btn">Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
