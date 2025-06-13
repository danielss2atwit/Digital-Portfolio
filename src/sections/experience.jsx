import '../pages/Home.css';
import {useNavigate} from 'react-router-dom';
import NBRRLogo from '../assets/nbrr-logo.jpg';
import CBCLogo from '../assets/cbc-logo.jpg';
import CBC1 from '../assets/cbc1.JPG';
import CBC2 from '../assets/cbc2.jpg';
import Fusion from '../assets/fusion.jpg';
import CNC from '../assets/CNC.jpg';
function experience(){
  const navigate = useNavigate();

  const handleClick = () => {
        navigate('/Job');
    }

    return(
        <>
       <section class="job-experience">
  <h2 className="Job">Job Experience</h2>

  <div class="job-card">
    <div class="job-left">
      <img src={NBRRLogo} alt='NBRR Logo'class="job-logo" />
      <div class="job-info">
        <h3>New Bedford Research and Robotics</h3>
        <p>Engineering Intern</p>
      </div>
    </div>
    <div class="job-images">
      <img src={Fusion} alt="Fusion"class="job-img" />
      <img src={CNC} alt="CNC"class="job-img" />
      
    </div>
  </div>

  <div class="job-card">
    <div class="job-left">
      <img src={CBCLogo} alt="CBC Logo"class="job-logo" />
      <div class="job-info">
        <h3>Community Boating Center</h3>
        <p>Head Instructor</p>
      </div>
    </div>
    <div class="job-images">
      <img src={CBC1} alt="CBC"class="job-img" />
      <img src={CBC2} alt="CBC"class="job-img" />
      
    </div>
  </div>

  <button class="view-more" onClick={handleClick}>View More</button>
</section>

        </>

    );
}
export default experience