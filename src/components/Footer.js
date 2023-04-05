import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
  );
}

export default Footer;
