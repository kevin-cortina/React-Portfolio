import React from 'react';
import { Navbar } from 'react-bootstrap';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import Resume from '../images/download-(1).png'
import ContactMe from './ContactMe';



function Navbars () {
  return (  
    <Navbar bg="dark" variant="dark">
<div className="navBar-section"> 
        <div className="nav-section">
        <Navbar.Brand className="card">
        <a id="portfolio-navigation" href="#about-me-header"> About me</a>
        </Navbar.Brand>
        <Navbar.Brand className="card">
        <a id="portfolio-navigation" href="#Contact information"> Contact me</a>
        </Navbar.Brand>
        <Navbar.Brand className="card">
        <a id="portfolio-navigation" href="#project-1"> Projects</a>
        </Navbar.Brand>
        <Navbar.Brand className="card">
        <a id="portfolio-navigation" href={Resume}> Resume</a>
        </Navbar.Brand>
        <Navbar.Brand className="card">
        <a id="portfolio-navigation" href="#Contact information"> Leave a Message</a>
        
        </Navbar.Brand>
    </div>
</div>
</Navbar>
  );
}
    export default Navbars;