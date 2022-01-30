import React from 'react';
// Here we are importing button CSS file as button dependency
// import '../styles/Header.css';
// import Resume from '../images/download-(1).png'
// import ContactMe from './ContactMe';
import AboutMe  from './AboutMe'
import Contact from './Contact';

export default function Navbars ( { currentPage, handlePageChange }) {

  return (  
    <nav>
<div className="navBar-section"> 
        <div className="nav-section">
        <li className="card">
        <a id="AboutMe" href='#AboutMe' 
        onClick={({AboutMe}) => handlePageChange('AboutMe')} 
        className={currentPage === 'AboutMe' ? 'currentPage' : ''}
        > About me</a>
        </li>
        <li className="card">
        <a id="ContactMe" href='#Contacts' 
        onClick={( {Contact} ) => handlePageChange('Contacts')} 
        className={currentPage === 'Contacts'? 'currentPage' : ''}
        > Contact me</a>
        </li>
        <li className="card">
        <a id="ProjectMe" href="#ProjectMe" 
        onClick={() => handlePageChange('Projects')} 
        className={currentPage === 'Projects' ? 'currentPage' : ''}
        > Projects</a>
        </li>
        <li className="card">
        <a id="ResumeMe" href="#ResumeMe" 
        onClick={() => handlePageChange('Resume')} 
        className={currentPage === 'Resume'? 'currentPage' : ''}
        > Resume</a>
        </li>
    </div>
</div>
</nav>
  )};
