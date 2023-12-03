// ProjectDisplay.js
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css"; // Make sure to have a corresponding CSS file
import techLogo from "../Components/skillArr";
import github from "../assets/Images/ProjectImages/github logo.jpg";
import website from "../assets/Images/ProjectImages/website logo.jpg";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const logoStyle = {
    width: "40px", // Adjust the width as needed
    height: "40px", // Adjust the height as needed
    borderRadius: "50%", // Make it circular
    marginRight: "5px", // Add some space between logos
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b>{" "}
        {Array.isArray(project.techlogo) ? (
          project.techlogo.map((tech, index) => (
            <span key={index}>
              <img
                src={techLogo.find((logo) => logo.techName === tech)?.image}
                alt={tech}
                style={logoStyle}
              />
              {tech}
              {index < project.techlogo.length - 1 && ", "}
            </span>
          ))
        ) : (
          <span>No skills specified</span>
        )}
      </p>
      <div>
        {/* GitHub link */}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={github}
              alt="GitHub"
              style={logoStyle}
            />
          </a>
        )}
        {/* Site link */}
        {project.siteLink && (
          <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
            {/* Placeholder for site logo */}
            <img
              src={website}
              alt="Visit Site"
              style={logoStyle}
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
