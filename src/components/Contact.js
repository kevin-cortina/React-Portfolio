import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';

function Contact () {
  return (  
    <section id="contact-information-section">
    <h3 id="Contact information">Contact Information</h3>
        <ul>
            <li id="phone number"> <b>📱 Phone number:</b> 858-216-6245</li>
            <li id="email"><b>📧 Email:</b>  <a href="Kjcortina@gmail.com"> Kjcortina@gmail.com </a></li>
            <li id="linkedin"><b>🔗 Linkedin:</b> <a href="https://www.linkedin.com/in/kevin-c-331364219/">Linkedin.com/Kevin-Cortina </a> </li>    
            <li id="github"><b>💻 Github:</b> <a href="https://github.com/kevin-cortina"> Github.com/Kevin-cortina</a></li>
        </ul>
    </section>

  );
}
    export default Contact;