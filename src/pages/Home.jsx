import Hero from '../sections/Hero.jsx';
import Experience from '../sections/experience.jsx';
import Projects from '../sections/projects.jsx';
import ClubInvolvement from '../sections/ClubInvolvement.jsx';
import ContactForm from '../sections/contactForm.jsx';
import './Home.css';
function Home(){

    return(
        <>
        <Hero />
        <Projects />
        <Experience />
        <ClubInvolvement />
        <ContactForm />
        </>

    );
}
export default Home