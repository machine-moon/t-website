import PropTypes from "prop-types";
import "./Projects.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import project1_img from "../../assets/project1.jpg";
import project2_img from "../../assets/project2.png";
import project3_img from "../../assets/project3.png";
import project4_img from "../../assets/project4.jpg";
import project5_img from "../../assets/project5.jpg";
import project6_img from "../../assets/project6.png";

const ProjectCard = ({ work }) => (
  <div className="project-card">
    <img src={work.w_img} alt={work.w_name} />
    <div className="project-overlay">
      <h2>{work.w_name}</h2>
      <p>{work.w_description}</p>
      <a href={work.w_link} target="_blank" rel="noopener noreferrer">
        <button className="project-button">View Project</button>
      </a>
    </div>
  </div>
);

ProjectCard.propTypes = {
  work: PropTypes.shape({
    w_img: PropTypes.string.isRequired,
    w_name: PropTypes.string.isRequired,
    w_description: PropTypes.string.isRequired,
    w_link: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {ProjectData.map((work, index) => (
          <ProjectCard key={index} work={work} />
        ))}
      </div>
      <div className="mywork-showmore">
        <a
          href="https://github.com/machine-moon?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>More Projects</p>
        </a>
        <div className="arrow-outward-icon">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

const ProjectData = [
  {
    w_no: 1,
    w_name: "TDocker",
    w_img: project1_img,
    w_description:
      "A streamlined suite of Docker Compose setups for easy application deployment on an NGINX Network",
    w_link: "https://github.com/machine-moon/tdocker",
  },
  {
    w_no: 2,
    w_name: "TSuite",
    w_img: project2_img,
    w_description:
      "A collection of workflow tools and scripts designed to automate tasks and boost productivity",
    w_link: "https://github.com/machine-moon/tsuite",
  },
  {
    w_no: 3,
    w_name: "Markov Decision Process Simulator",
    w_img: project3_img,
    w_description:
      "A very fast simulator for MDPs using JAX, featuring JIT compilation for rapid prototyping and reinforcement learning with a ready-to-use DQN algorithm",
    w_link: "https://github.com/machine-moon/mdp-jax",
  },
  {
    w_no: 4,
    w_name: "Scrabble",
    w_img: project4_img,
    w_description:
      "A Java-based Scrabble game utilizing MVC architecture, offering interactive gameplay with a GUI and Bot AI",
    w_link: "https://github.com/machine-moon/project4",
  },
  {
    w_no: 5,
    w_name: "Embedded Microcontroller Projects",
    w_img: project5_img,
    w_description:
      "Showcasing expertise in embedded systems, focusing on interrupts, NVIC, Scheduling, GPIO, timers, and state machines. Using MSVP32 AND rasperry pi",
    w_link: "https://github.com/machine-moon/project5",
  },
  {
    w_no: 6,
    w_name: "Personal Portfolio Website",
    w_img: project6_img,
    w_description:
      "A personal portfolio website using React.js, html, css, and javascript, and deployed it using GitHub Pages",
    w_link: "https://github.com/machine-moon/project6",
  },
];

export default Projects;
