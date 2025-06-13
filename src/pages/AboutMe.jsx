import './AboutMe.css'
import Pic1 from '../assets/aboutme1.JPG'
import Pic2 from '../assets/aboutme2.jpg'
import Pic3 from '../assets/aboutme3.jpg'
import Pic4 from '../assets/aboutme4.jpg'
function AboutMe(){

    return(
        <>
        <h1 className="about-heading">About Me</h1>
        <div className="about-description">
            <h2>Hi, I'm Summer!</h2>
            <p>
                 I’m a third-year Computer Science student at Wentworth Institute 
                 of Technology with a deep interest in data science, web/mobile development 
                 and the ethics of technology. I’m passionate about using my skills to solve 
                 real-world problems, especially those that affect my community. I’ve worked on several personal 
                 and academic projects using Python, MySQL, JavaScript, React/React Native and many others. 
                 Most recently, I’ve been developing Fuel My Stride, a mobile app that is designed to help runners 
                 fuel properly for their training and gain insights into how their nutrition and workouts work together. 
                 I believe in building technology that reflects the diverse world we live in and making tech more inclusive and
                  accessible for everyone. When I’m not coding, I enjoy running, sailing and spending time with friends.
                   
            </p>
            <h3>Thanks for visiting my portfolio, feel free to check out my work or get in touch!</h3>
            
        </div>
        <div className="cards-container">
            <img src={Pic1} alt="picture of me" className="card" />
            <img src={Pic2} alt="picture of me" className="card" />
            <img src={Pic3} alt="picture of me" className="card" />
            <img src={Pic4} alt="picture of me" className="card" />
           


        </div>
        </>

    );
}
export default AboutMe