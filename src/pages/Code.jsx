import './Code.css';
import FuelMyStride from '../assets/FuelMyStride.png'
import DigitalPortfolio from '../assets/project-screen.png'
import ToDo from '../assets/todo.png'
import Clock from '../assets/clock.png'
import React from 'react'

const projects = [
  {
    image: FuelMyStride,
    title: "Fuel My Stride",
    description: "A mobile app designed to help runners fuel properly for their training and gain insights into how their nutrition and workouts work together.",
    features: ["Track meals and workouts with ease (No calorie counting or portion measuring","Personalized fueling insights","Visual Plate on what your next meal should look like","Daily fueling tips, backed by science"],
    techStack: ["JavaScript", "React Native", "HTML", "CSS"],
    learned: "This project helped me to see that I can use programming to create real-world impact. ",
  },
  {
    image: DigitalPortfolio,
    title: "Digital Portfolio",
    description: "A website that showcases more about me, my projects, work experience and more!",
    features: ["View an overview on the home page", "Get in-depth information throughout each page", "Contact form directly on website"],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Vite"],
    learned: "I practiced how to make my website visually appealing with layout and animations",
  },
  {
    image: ToDo,
    title: "To-Do List",
    description: "A To-Do List web app that was created to enhance my skills in React.",
    features: ["Add Tasks", "Delete Tasks","Move task up on the list","Move task down on the list","Simple and clean user interface"],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Vite"],
    learned: "I learned about state managment to actually get my wesbite to preform actions",
  },
  {
    image:Clock,
    title: "Digital Clock",
    description: "A Digital Clock web app that was created to practice my skills in React.",
    features: ["Fun background","live time with hours, minutes and seconds"],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Vite"],
    learned: "Learned to build a live-updating component and handle cleanup with useEffect.",
  },
];

const ProjectCard = ({ image,title, description, features, techStack, learned }) => (
  <div className="project-card1">
    <img src={image} loading="lazy" alt={`${title} screenshot`} className="image-placeholder1 border-highlight" />
    <h2 className="project-title1">{title}</h2>
    <p>{description}</p>

    {features.length > 0 && features[0] !== "" && (
      <div className="section1">
        <p className="section-title">Features</p>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    )}

    {techStack.length > 0 && (
      <div className="section1">
        <p className="section-title">Tech Stack</p>
        <p>{techStack.join(', ')}</p>
      </div>
    )}

     {learned && learned.trim() !== "" && (
      <div className="section1">
        <p className="section-title">What I Learned:</p>
        <p>{learned}</p>
      </div>
    )}
    
  </div>
);

function Code(){

    return(
        <>
        <div className="app">
      <h1 className="section-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="section-heading">Skills</h2>
      <div className="skills-section">
        <div className="skills-card">
          <h3 className="skills-header">Software</h3>
          <ul className="skills-list">
            <li>AutoCad Fusion</li>
            <li>Matlab</li>
            <li>Rhino</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>DBeaver</li>
            <li>Wireshark</li>
            <li>Cisco Packet Tracer</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3 className="skills-header">Programming Languages</h3>
          <ul className="skills-list">
            <li>Python</li>
            <li>Java</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>MySQL</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
        </>

    );
}
export default Code