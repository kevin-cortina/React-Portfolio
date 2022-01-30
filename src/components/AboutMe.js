import React from 'react';
import profilePic from '../images/placeholder-img.jpeg';
import Footer from './Footer';

function AboutMe () {
  return (  
    
    <section className="about-me-section">
      <img id="face-img"src={profilePic} alt="Your Name" className="navigation"/>
        <h2 id="about-me-header">About me </h2>
            <p id="about-me-description">
                This website highlights me as a person through my work experiences and hobbies. I am currently working at a law firm full time and have been working as a real estate agent part time.
                I am looking to transition from my current position at a law firm to becoming a software developer for a cloud based tech company. 
                I fell into coding by creating scripts for my current position at the law firm and then implenting those scripts for my work as a part time Real Estate Agent.  
                I enjoy completing projects and pushing through the hard parts into getting the objective done. I find that it is most satisfying the harder the challenge may be.
            </p>
            <div id="Recrecation section">
      <h2 id="Recrecation header">Recreational Activities </h2>
      <p id="Recrecation description">
          Recreational work includes many things involving real estate, and techonology. Outside of working, some of my main recrecational activities include going hiking, fishing, clamming, and going to the gym. When I am not out into the world I like to spend time with my 2 dogs, Ezekeial and Ezreal where we watch tv shows and movies.
      </p>
      </div>
    </section>


  );
}
    export default AboutMe;