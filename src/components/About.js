import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <h1 id="about-title">About Page</h1>
      <p>
        Following theodinproject curriculum, for the shopping cart project, I
        have decided to make a replica of
        <a id="eminem-link" href="https://shop.eminem.com/collections/kamikaze">
          {" "}
          Eminems Merch Store
        </a>
        . <br></br>
        You can't actually buy anything from this website!
        <br></br>
        All assets are straight from his store. I do not own the rights to any
        of the assets.
      </p>
    </div>
  );
};

export default About;
