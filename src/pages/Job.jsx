import './Job.css';
import CBCLogo from '../assets/cbc-logo.jpg';
import NBRRLogo from '../assets/nbrr-logo.jpg';
import SWEETLogo from '../assets/sweet-logo.jpg';
import Accelerate from '../assets/accelerate.jpg';
import WITLogo from '../assets/wit-logo.png';
import Admissions from '../assets/admissions.jpg';
import CBC1 from '../assets/cbc1.JPG';
import CBC2 from '../assets/cbc2.jpg';
import Fusion from '../assets/fusion.jpg';
import CNC from '../assets/CNC.jpg';
import NBRR1 from '../assets/nbrr1.jpg'
import NBRR2 from '../assets/nbrr2.jpg';
import Accelerate1 from '../assets/accelerate1.jpg';
import CBC3 from '../assets/cbc3.jpg';
import CBC4 from '../assets/cbc4.jpg';
import Accelerate2 from '../assets/accelerate2.jpg';
import Admissions1 from '../assets/admissions1.jpg';
import Admissions2 from '../assets/admissions2.jpg';
import Sweet1 from '../assets/sweet1.jpg'
import Sweet2 from '../assets/sweet2.jpg'
import React, { useState } from 'react';

const jobsData = [
  {
    logo: NBRRLogo,
    title: 'New Bedford Research and Robotics',
    tagline: 'Engineering Intern',
    time: 'April 2025 - Present',
    description: ['Worked on CNC machines',
        'Practiced 3D modeling with Rhino and Fusion',
        'Assist with mechanical prototyping'

    ],
    placeholders: [Fusion,CNC,NBRR1,NBRR2],
  },
  {
    logo: CBCLogo,
    title: 'Community Boating Center',
    tagline: 'Head Instructor',
    time: 'May 2024 - Present',
    description:[ 'Lead groups of students in various sailing activities to strengthen their skills ',
        'Create daily lessons to teach to students ',
        'Manage other counselors and assign them tasks to help the group ',
    ],
     placeholders: [CBC1, CBC2,CBC3,CBC4],
  },
  {
    logo: Accelerate,
    title: 'Accelerate Makerspace - Wentworth',
    tagline: 'Workstudy Specialist',
    time: 'October 2023 - Present',
    description: ['Teach sewing lessons to interested students',
        'Assist students with projects and how to use the space',
        'Assist with other events held in the space'

    ],
    placeholders:[Accelerate1,Accelerate2]
  },
  {
    logo: Admissions,
    title: 'Wentworth Admissions',
    tagline: 'Admissions Ambassador',
    time: 'January 2024 - Present',
    description: ['Assist school admissions center with events for admitted students ',
        'Lead tours across campus to interested students and families and foster a friendly, welcoming environment ',
        'Answer visitor’s questions and provide them resources  '

    ],
    placeholders:[Admissions1,Admissions2]
  },
  {
    logo: SWEETLogo,
    title: 'Center For Wellness - Wentworth',
    tagline: 'SWEET Peer Educator',
    time:'October 2023 - Present',
    description: ['Meet weekly to discuss health and wellbeing of student body',
        'Plan and host events around campus centered around wellness',
        'Learn about different ways to provide education to students'

    ],
    placeholders:[Sweet1,Sweet2]
  },
];

const educationData = [
    {
        logo: WITLogo,
        name: 'Wentworth Institute of Technology',
        major: 'Major: Computer Science',
        minor: 'Minor: Applied Math',
        gpa: 'GPA: 3.5',
        gradDate: 'Graduation Date: August 2027',
        deansList: 'Deans List: Fall 2023, Spring 2025',
        courses: 'Relevant Courses: Data Structures, Algorithms, Linear Algebra, Databases, Network Programming', 
    }
];

function JobCard({ logo, title, tagline, placeholders,onClick }) {
  return (
    <div className="job-card" onClick = {onClick}>
      <div className="logo-circle">
        <img src={logo} alt={`${title} logo`} className="logo-circle"/>

      </div>
      <div className="job-content">
        <div className = "job-title">{title}</div>
        <div>{tagline}</div>
      </div>
      {placeholders && (
        <div className="placeholder-boxes">
          {placeholders.slice(0, 2).map((img, index) => (
            <img key={index} src={img} alt={`Preview ${index + 1}`} className="placeholder" />
          ))}
        </div>
      )}
        
       
      </div>
   
  );
}

function JobModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="logo-circle">
          <img src={job.logo} alt={`${job.title} logo`} className="logo-circle"/>
        </div>
        <div className="job-content">
          <div className="job-title">{job.title}</div>
          <div>{job.tagline}</div>
          <div>{job.time}</div>
          <ul className="job-description">
            {job.description.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        <div className="placeholder-boxes">
          {job.placeholders?.map((img, index) => (
    <img key={index} src={img} alt={`Preview ${index + 1}`} className="placeholder" />
      
  ))}
  
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function EducationCard({ logo,name,major,minor,gpa,gradDate,deansList,courses,onClick }) {
  return (
    <div className="job-card" onClick={onClick}>
      <div className="logo-circle">
      <img src={logo} alt={`${name} logo`} className="logo-circle"/>

      </div>
      <div className="job-content">
        <div className = "job-title">{name}</div>
        <div>{major}</div>
         <div>{minor}</div>
        
        
      </div>
      
    </div>
  );
}
function EduModal({ edu, onClose }) {
  if (!edu) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="logo-circle">
          <img src={edu.logo} alt={`${edu.title} logo`} className="logo-circle"/>
        </div>
        <div className="job-content">
          <div className="job-title">{edu.name}</div>
          <div>{edu.major}</div>
          <div>{edu.gpa}</div>
          <div>{edu.gradDate}</div>
          <div>{edu.deansList}</div>
          <div>{edu.courses}</div>
          

          
        </div>
        
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Job(){
 const [jobs, setJobs] = useState(jobsData);
 const [school, setSchool]=useState(educationData);
 const [selectedJob, setSelectedJob] = useState(null);
 const [selectedSchool, setSelectedSchool] = useState(null);
    return(
        <>
         <div className="job-page">
      <h1 className="job-header">Job Experience</h1>

      {jobs.map((job, index) => (
        <JobCard key={index} 
        logo={job.logo}
    title={job.title}
    tagline={job.tagline}
    time={job.time}
    description={job.description}
    placeholders={job.placeholders} 
         onClick={() => setSelectedJob(job)}/>
      ))}

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />

      <h1 className="job-header" >Education</h1>
      {school.map((edu, index) => (
        <EducationCard key={index} {...edu} onClick={() => setSelectedSchool(edu)}/>
      ))}
      <EduModal edu={selectedSchool} onClose= {() => setSelectedSchool(null)} />
    </div>
    
       
        
        </>

    );
}
export default Job