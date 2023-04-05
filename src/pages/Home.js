import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Michael</h2>
        <div className="prompt">
          <p>A Software Engineer</p>
          <IconButton
            aria-label="Linkedin.com"
            onClick={() => window.open("https://www.linkedin.com/in/michael-lin-96b5b0170/")}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton 
          onClick={() => window.open("https://github.com/mlinhou?tab=repositories")}
          >
            <GitHubIcon  />
          </IconButton>

         
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span> ReactJS, HTML, CSS, Swift, SwiftUI</span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span> VSC, XCode</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
