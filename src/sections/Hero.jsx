import spaceImage from "../assets/space.jpg";
import ProfilePic from "../assets/profilepic.jpg";
import '../pages/Home.css';
function Hero(){
    console.log("Hero Rendered");

    return(
        <>
        <div className="section">
        <img src={ProfilePic} loading="lazy" alt="profile picture" className="profilePic" />
        <div className="container">
        <h1 className="name">Summer Daniels</h1>
        <h2 className="title">Computer Science Student</h2>
        <p className="tagline">Building tech with impact, purpose, and people in mind.</p>
        </div>
        </div>
        </>

    );
}
export default Hero