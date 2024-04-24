import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectElement = projects.map(function(project){
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElement}</div>
    </div>
  );
}

export default ProjectList;
