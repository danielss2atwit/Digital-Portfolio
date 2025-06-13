import '../pages/Home.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
function contactForm(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Contact');
    }

    return(
        <>
        <section class="contact-section">
  <h2 className="contact">Get in Touch</h2>
  <button class="contact-button" onClick={handleClick} >Contact Here</button>
</section>

        </>

    );
}
export default contactForm