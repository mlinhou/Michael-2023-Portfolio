import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="images">
        <img src={project.image} />
        <img src={project.extraImage} />
      </div>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <h2>{project.description}</h2>

      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
