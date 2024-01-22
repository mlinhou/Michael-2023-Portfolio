import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

  return (
    <div className="home">
      <div className="about">
        <h2 className="name"> Michael Lin </h2>
        <div className="prompt">
          <p>Software Engineer</p>
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
        
        <ol className="list">
          <li className="item">
            <h2>About Me</h2>
            <span> I am a Software Engineer with 3 years of experience, primarily working with Frontend Technologies. </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span> Javascript, HTML, CSS, React.js, Node.js, Swift, Java, MongoDB, Git</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
