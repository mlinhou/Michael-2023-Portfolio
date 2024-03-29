import React from "react";
import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} extraImage={project.extraImage}  />;
        })}
      </div>
    </div>
  );
}

export default Projects;
