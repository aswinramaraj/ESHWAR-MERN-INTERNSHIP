import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am a second-year college student passionate about web development and UI/UX design. My mission is to create user-centric, visually appealing, and interactive web applications.
      </p>
      <p className="about-details">
        I specialize in technologies like React, JavaScript, and CSS, and I enjoy solving challenging problems through innovative solutions.
      </p>

      <div className="about-hobbies">
        <h3>Education</h3>
        <p>Degree : B.Tech Artifical Intelligence & Data Science </p>
        <p>Sri Eswhar college of engineering , Coimbatore </p>

      </div>

      <div className="about-skills">
        <h3>Skills & Expertise</h3>
        <ul className="skills-list">
          <li>Responsive Web Design</li>
          <li>Interactive UI/UX Design</li>
          <li>Java</li>
          <li> c++ </li>
          <li>Python</li>
          <li> Tools: vscode ,github,figma,powerBI </li>
        </ul>
      </div>



      <div className="about-cta">
        <h3>Want to know more?</h3>
        <p>Feel free to browse through my <a href="/projects">projects</a> or <a href="/contact">get in touch</a> for collaboration opportunities!</p>
      </div>
    </div>
  );
}

export default About;