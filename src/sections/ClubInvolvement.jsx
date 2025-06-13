import '../pages/Home.css';
import SHPE from '../assets/shpe.jpg';
import MDSS from '../assets/mdss.PNG';
import SWE from '../assets/swe.jpg';
import {useNavigate} from 'react-router-dom';
function ClubInvolvement(){
const navigate = useNavigate();

  const handleClick = () => {
        navigate('/Club');
    }
    return(
        <>
        <section class="club-section">
  <h2 className="club">Club Involvement</h2>

  <div class="carousel">
    <img src={SHPE} alt="SHPE" class="club-image small" />
    <img src={SWE} alt="SWE" class="club-image large" />
    <img src={MDSS} alt="MDSS" class="club-image small"/>
  </div>

  <p class="club-description">I joined these clubs to advance my leadership 
    skills and connect with others who share similar values to me. I wanted to 
    make a meaningful impact on my community by giving students spaces on campus to
     be themselves and learn new things. Whether it's through planning events, networking 
     with industry professional, or mentoring peers, each experience has helped me grow 
     both personally and professionally. </p>
  <button class="club-view-more" onClick={handleClick}>View More</button>
</section>

        </>

    );
}
export default ClubInvolvement