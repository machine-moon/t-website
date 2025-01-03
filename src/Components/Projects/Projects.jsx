import './Projects.css'

import React from 'react'
import project1_img from '../../assets/project1.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import project4_img from '../../assets/project4.jpg'
import project3_img from '../../assets/project3.png'
import project2_img from '../../assets/project2.png'
import project5_img from '../../assets/project5.jpg'
import project6_img from '../../assets/project6.jpg'

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {ProjectData.map((work, index) => {
          return (
            <div className="project-card">
              <img key={index} src={work.w_img} alt={work.w_name} />
              <div className="project-overlay">
                <h2>{work.w_name}</h2>
                <p>{work.w_description}</p>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <button className="project-button">View Project</button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <a href="https://github.com/machine-moon?tab=repositories" target="_blank" rel="noopener noreferrer">
          <p>More Projects</p>
        </a>
        <div className='arrow-outward-icon'>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

const ProjectData = [
  {
    w_no: 1,
    w_name: 'TDocker',
    w_img: project6_img,
    w_description: 'A streamlined suite of Docker Compose setups for easy application deployment on an NGINX network, enhancing development environment management.',
    w_link: 'https://github.com/machine-moon/app'
  },
  {
    w_no: 2,
    w_name: 'TSuite',
    w_img: project2_img,
    w_description: 'A collection of workflow tools and scripts designed to automate tasks and boost productivity.',
    w_link: 'https://github.com/machine-moon/app'
  },
  {
    w_no: 3,
    w_name: 'Markov Decision Process Simulator',
    w_img: project3_img,
    w_description: 'A very fast simulator for MDPs using JAX, featuring JIT compilation for rapid prototyping and reinforcement learning with a ready-to-use DQN algorithm.',
    w_link: 'https://github.com/machine-moon/app'
  },
  {
    w_no: 4,
    w_name: 'Scrabble',
    w_img: project4_img,
    w_description: 'A Java-based Scrabble game utilizing MVC architecture, offering interactive gameplay with a GUI and Bot AI.',
    w_link: 'https://github.com/machine-moon/app'
  },
  {
    w_no: 5,
    w_name: 'Embedded Microcontroller Projects',
    w_img: project5_img,
    w_description: 'Showcasing expertise in embedded systems, focusing on interrupts, NVIC, Scheduling, GPIO, timers, and state machines. Using MSVP32 AND rasperry pi',
    w_link: 'https://github.com/machine-moon/app'
  },
  {
    w_no: 6,
    w_name: 'Personal Portfolio Website',
    w_img: project1_img,
    w_description: 'A personal portfolio website using React.js, html, css, and javascript, and deployed it using GitHub Pages.',
    w_link: 'https://github.com/machine-moon/machine-moon.github.io'
  },
];

export default Projects