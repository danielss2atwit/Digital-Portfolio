import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){
    return(
        
        <nav className ="navbar">
            <p className="cursiveLogo">Summer Daniels</p>
            <div className="navLinks">
            <Link to="/" className="navText">Home</Link>
            <Link to="/AboutMe" className="navText">About Me</Link>
            <Link to="/Code" className="navText">Projects</Link>
            <Link to="/Job" className="navText">Job Experience</Link>
            <Link to="/Club" className="navText">Club Involvement</Link>
            <Link to="/Contact" className="navText">Contact</Link>
            </div>
        </nav>
    );

}