import React from "react";
import Wrapper from "../sections/Wrapper";

import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import jp from "../assets/jp.jpg";

function About() {
  return (
    <div className="profile">
      <img src={jp} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Avatar</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for practise redux.
      </h4>
      <div className="profile-links">
        <a
          href="
        #"
        >
          <FaGithub />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
