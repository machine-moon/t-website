import PropTypes from "prop-types";
import "./Projects.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import project1_img from "../../assets/project1.jpg";
import project2_img from "../../assets/project2.jpg";
import project3_img from "../../assets/project3.png";
import project4_img from "../../assets/project4.png";
import project5_img from "../../assets/project5.jpg";
import project6_img from "../../assets/project6.jpg";
import project7_img from "../../assets/project7.jpg";
import project8_img from "../../assets/project8.png";
// temp images
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";

const ProjectCard = ({ work }) => (
  <div className="project-card">
    <img src={work.w_img} alt={work.w_name} />
    <div className="project-overlay">
      <h2>{work.w_name}</h2>
      <p>{work.w_description}</p>
      {work.w_links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <button className="project-button">{link.label}</button>
        </a>
      ))}
    </div>
  </div>
);

ProjectCard.propTypes = {
  work: PropTypes.shape({
    w_img: PropTypes.string.isRequired,
    w_name: PropTypes.string.isRequired,
    w_description: PropTypes.string.isRequired,
    w_links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
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
    w_name: "Operating System Simulators",
    w_img: project1_img,
    w_description:
      "A collection of simulators demonstrating process management, scheduling, and system calls.",
    w_links: [
      { url: "https://github.com/machine-moon/syscall-simulator", label: "Syscall Simulator" },
      { url: "https://github.com/machine-moon/process-simulator", label: "Process Simulator" },
      { url: "https://github.com/machine-moon/scheduler-simulator", label: "Scheduler Simulator" },
    ],
  },
  {
    w_no: 2,
    w_name: "T-Docker",
    w_img: project2_img,
    w_description:
      "A streamlined suite of Docker Compose setups for easy application deployment on an NGINX Network",
    w_links: [
      { url: "https://github.com/machine-moon/tdocker", label: "GitHub" },
      { url: "https://github.com/machine-moon/tdocker", label: "Demo (soon)" },

    ],
  },
  {
    w_no: 3,
    w_name: "T-Suite",
    w_img: project3_img,
    w_description:
      "A collection of workflow tools and scripts designed to automate tasks and boost productivity",
    w_links: [
      { url: "https://github.com/machine-moon/tsuite", label: "GitHub" },
    ],
  },
  {
    w_no: 4,
    w_name: "Markov Decision Process Simulator",
    w_img: project4_img,
    w_description:
      "A very fast simulator for MDPs using JAX, featuring JIT compilation for rapid prototyping and reinforcement learning with a ready-to-use DQN algorithm",
    w_links: [
      { url: "https://github.com/machine-moon/mdp-jax", label: "GitHub" },
      { url: "https://github.com/machine-moon/mlos", label: "Related Work" },

    ],
  },
  {
    w_no: 5,
    w_name: "Inter-Process Communication",
    w_img: project5_img,
    w_description:
      "Demonstrates concurrent task processing using semaphores and shared memory in Unix. Includes C programs simulating Teaching Assistants marking exams with synchronization mechanisms.",
    w_links: [
      { url: "https://github.com/machine-moon/classical-concurrency", label: "Classical Concurrency" },
      { url: "https://github.com/machine-moon/ipc", label: "IPC" },
    ],
  },
  {
    w_no: 6,
    w_name: "T-Embedded",
    w_img: project6_img,
    w_description:
      "This project contains my embedded work using the MSP432 microcontroller from Texas Instruments. Topics covered include ADC, GPIO, NVIC, UART, interrupts, timers, and concurrency using QNX.",
    w_links: [
      { url: "https://github.com/machine-moon/t-embedded", label: "GitHub" },
    ],
  },
  {
    w_no: 7,
    w_name: "Scrabble",
    w_img: project7_img,
    w_description:
      "A collaborative Java-based Scrabble game utilizing MVC architecture. Features include AI players, custom board configurations, and a timer mode.",
    w_links: [
      { url: "https://github.com/machine-moon/scrabble", label: "GitHub" },
    ],
  },
  {
    w_no: 8,
    w_name: "Personal Portfolio Website",
    w_img: project8_img,
    w_description:
      "A personal portfolio website using React.js, html, css, and javascript, and deployed it using GitHub Pages",
    w_links: [
      { url: "https://github.com/machine-moon/t-website", label: "GitHub" },
    ],
  }

];

export default Projects;