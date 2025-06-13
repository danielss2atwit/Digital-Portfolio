import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Club from './pages/Club.jsx';
import Code from './pages/Code.jsx';
import Contact from './pages/Contact.jsx';
import Job from './pages/Job.jsx';
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  

  return (
    <>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/AboutMe" element={<AboutMe />}/>
        <Route path= "/Club" element={<Club />}/>
        <Route path= "/Code" element={<Code />}/>
        <Route path= "/Contact" element={<Contact />}/>
        <Route path= "/Job" element={<Job />}/>

      </Routes>
      
    </Router>
    
    </>
  )
}

export default App
