import '../pages/Home.css';
import {useNavigate} from 'react-router-dom';
import ProjectLogo from '../assets/project-logo.png';
import ProjectScreen from '../assets/project-screen.png';
function projects(){

  const navigate = useNavigate();
  
      const handleClick = () => {
          navigate('/Code');
      }
  

    return(
        <>
        <h1 className="project">Coding Projects</h1>
        <div class="projects-section">
  <h2>Here’s what I’ve been working on!</h2>

  <div class="projects-container">
    <div class="project-card">
      <img src={ProjectLogo} loading="lazy" alt='project logo' class="project-image"/>
      <div class="project-title">Fuel My Stride</div>
      <p class="project-description">A mobile app designed to help runners fuel 
        properly for their training and gain insights into how their nutrition 
        and workouts work together.</p>
    </div>

    <div class="project-card">
     <img src={ProjectScreen} loading="lazy" alt='project screen' class="project-image" />
      <div class="project-title">Digital Portfolio</div>
      <p class="project-description">A website that showcases more about me,
        my projects, work experience and more!
      </p>
    </div>
  </div>

  <button onClick={handleClick} class="more-projects-btn">More Projects</button>
</div>

        </>

    );
}
export default projects