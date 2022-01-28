import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import profilePic from '../images/placeholder-img.jpeg';

function Navbar () {
  return (  
<div> <img id="face-img"src={profilePic} alt="Your Name" className="navigation"/>
        <div className="nav-section">
        <section className="card">
        <a id="about-me-nav" href="#about-me-header"> About me</a>
        </section>
        <section className="card">
        <a id="contact-me-nav" href="#Contact information"> Contact me</a>
        </section>
        <section className="card">
        <a id="portfolio-navigation" href="#project-1"> Projects</a>
        </section>
    </div>
</div>
  );
}
    export default Navbar;