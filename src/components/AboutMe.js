import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';


function AboutMe () {
  return (  
    <section className="about-me-section">
        <h2 id="about-me-header">About me </h2>
            <p id="about-me-description">
                This website highlights me as a person through my work experiences and hobbies. I am currently working at a law firm full time and have been working as a real estate agent part time.
                I am looking to transition from my current position at a law firm to becoming a software developer for a cloud based tech company. 
                I fell into coding by creating scripts for my current position at the law firm and then implenting those scripts for my work as a part time Real Estate Agent. 
            </p>
    </section>
  );
}
    export default AboutMe;