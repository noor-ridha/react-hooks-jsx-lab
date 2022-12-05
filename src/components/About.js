import React from "react";
import { image } from "../data/data";

console.log(image);
function About() {
  return( <div id="about">About
  <h2>About Me</h2>
  <p>nanana</p>
  <img src={image} alt="I made this"></img>
  </div>);
}

export default About;
