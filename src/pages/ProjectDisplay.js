import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="images">
        <img className="img" src={project.image} />
        <img className="img" src={project.extraImage} />
      </div>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <h2>{project.description}</h2>
      {project.link
      ? <h2>Take a look <a href={project.link}>here!</a></h2>
      
       : null}
    </div>
  );
}

export default ProjectDisplay;
