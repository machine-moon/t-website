import PropTypes from "prop-types";
import "./Projects.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import project1_img from "../../assets/project1.jpg";
import project2_img from "../../assets/project2.jpg";
import project4_img from "../../assets/project4.png";
import project6_img from "../../assets/project6.jpg";
import project9_img from "../../assets/project9.png";
import project12_img from "../../assets/project12.png";

// temp images
//import t1 from "../../assets/t1.jpg";
//import t2 from "../../assets/t2.jpg";
//import t3 from "../../assets/t3.jpg";

const ProjectCard = ({ work }) => (
  <div className="project-card">
    <img src={work.w_img} alt={work.w_name} />
    <div className="project-overlay">
      <h2>{work.w_name}</h2>
      <p>{work.w_description}</p>
      {work.w_links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
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
      }),
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
    w_name: "tUnit",
    w_img: project12_img,
    w_description:
      "Write tests that read like specifications, execute like lightning ⚡",
    w_links: [
      { url: "https://github.com/machine-moon/tunit", label: "GitHub" },
    ],
  },
  {
    w_name: "CuMind",
    w_img: project4_img,
    w_description:
      "A JAX-based reinforcement learning framework inspired by Google DeepMind's MuZero. It combines Monte Carlo Tree Search (MCTS) with a learned model to master environments like classic control problems.",
    w_links: [
      { url: "https://github.com/machine-moon/CuMind", label: "GitHub" },
    ],
  },
  {
    w_name: "Vibe Check",
    w_img: project9_img,
    w_description:
      "Vibecheck is an application that allows users to CRUD tweets and features a gameplay frontend to check-the-vibe based on tweets. It utilizes a Go backend with a RESTful API, Redis caching, and a React frontend.",
    w_links: [
      /*{
        url: "https://github.com/machine-moon/vibecheck",
        label: "Demo ",
      }, */
      { url: "https://github.com/machine-moon/vibecheck", label: "Github" },
    ],
  },
  /*{
    w_name: "Inter-Process Communication",
    w_img: project5_img,
    w_description:
      "Demonstrates concurrent task processing using semaphores and shared memory in Unix. Includes C programs simulating Teaching Assistants marking exams with synchronization mechanisms.",
    w_links: [
      {
        url: "https://github.com/machine-moon/classical-concurrency",
        label: "Classical Concurrency",
      },
      { url: "https://github.com/machine-moon/ipc", label: "IPC" },
    ],
  }, */
  {
    w_name: "T-Embedded",
    w_img: project6_img,
    w_description:
      "This project contains my embedded work using the MSP432 microcontroller from Texas Instruments. Topics covered include ADC, GPIO, NVIC, UART, interrupts, timers, and concurrency using QNX.",
    w_links: [
      { url: "https://github.com/machine-moon/t-embedded", label: "GitHub" },
    ],
  },
  {
    w_name: "Operating System Simulators",
    w_img: project1_img,
    w_description:
      "A collection of simulators demonstrating process management, scheduling, and system calls.",
    w_links: [
      {
        url: "https://github.com/machine-moon/syscall-simulator",
        label: "Syscall Simulator",
      },
      {
        url: "https://github.com/machine-moon/process-simulator",
        label: "Process Simulator",
      },
      {
        url: "https://github.com/machine-moon/scheduler-simulator",
        label: "Scheduler Simulator",
      },
    ],
  },
  {
    w_name: "T-Docker",
    w_img: project2_img,
    w_description:
      "A streamlined suite of Docker Compose setups for easy application deployment on an NGINX Network",
    w_links: [
      { url: "https://github.com/machine-moon/tdocker", label: "GitHub" },
      { url: "https://github.com/machine-moon/tdocker", label: "Demo (soon)" },
    ],
  },
  /*{
    w_name: "Scrabble",
    w_img: project7_img,
    w_description:
      "A collaborative Java-based Scrabble game utilizing MVC architecture. Features include AI players, custom board configurations, and a timer mode.",
    w_links: [
      { url: "https://github.com/machine-moon/scrabble", label: "GitHub" },
    ],
  },*/
  /*
  {
    w_name: "Personal Portfolio Website",
    w_img: project8_img,
    w_description:
      "A personal portfolio website using React.js, html, css, and javascript, and deployed it using GitHub Pages",
    w_links: [
      { url: "https://github.com/machine-moon/t-website", label: "GitHub" },
    ],
  }, */
];

export default Projects;
