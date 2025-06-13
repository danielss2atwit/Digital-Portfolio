import React, {useRef, useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import './Contact.css';
function Contact(){

  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tk7mtci',
      'template_2un6vbj',
      form.current,
      'Z-KtqOV80yXsieZUd'
    ).then(
      () => {
        setStatusMessage('✅Message sent successfully!');
        setIsError(false);
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatusMessage('❌ Oops! Something went wrong. Please try again.');
        setIsError(true);
        
      }
    );
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('');
        setIsError(false);
        
      },5000);
      return() => clearTimeout(timer);
    }
  }, [statusMessage])

    return(
        <>
        


 
    <div className="contact-section">
      <h2 className="heading">Get In Touch</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="send-button">Send</button>

        {statusMessage && (
          <p className={`status-message ${isError ? 'error' : 'success'}`}>
            {statusMessage}
          </p>
        )}
      </form>

      <div className="contact-links">
        <div className="contact-item">
         <MdEmail size={32} style={{ marginRight: '6px', verticalAlign: 'middle', color: '#555' }} />
  <a href="mailto:danielss2@wit.edu">danielss2@wit.edu</a>
        </div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/summer-daniels-59a1aa336/" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/danielss2atwit" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaGithub size={32} />
  </a>
        </div>
        
      </div>
    </div>




        </>

    );
}
export default Contact