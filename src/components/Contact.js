import React from 'react';
import Resume from '../images/download-(1).png'
import ContactMe from './ContactMe';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';


function Contact () {

  //form
  const form = React.useRef(null);
  //names
  const names = React.useRef(null);
  const badName = React.useRef(null);
  //emails
  const email = React.useRef(null);
  const badEmail = React.useRef(null);
  //messages
  const messages = React.useRef(null);
  const badMessages = React.useRef(null);

  //validations
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  };

  const checkName = () => {
      if (!names.current.value) {
          badName.current.innerText = " Please enter a name.";
      } else {
          badName.current.innerText = "";
      };
  };

  const checkEmail = () => {
      if (!email.current.value) {
          badEmail.current.innerText = " Please enter an e-mail address.";
      }else if (!validateEmail(email.current.value) && email.current.value !== "") {
          badEmail.current.innerText = " Please enter a valid e-mail address.";
      } else {
          badEmail.current.innerText = "";
      };
  };

  const checkMessage = () => {
      if (!messages.current.value) {
          badMessages.current.innerText = " Please enter a message.";
      } else {
          badMessages.current.innerText = "";
      };
  };

  //submitForms
  const handleFormSubmit = (e) => {
          e.preventDefault();

          checkName();
          checkEmail();
          checkMessage();

          if (names.current.value !== "" && validateEmail(email.current.value) && messages.current.value !== "") {
              form.current.reset();
          }
  };



  return (  
    <section id="contact-information-section">
    <h3 id="Contact information">Contact Information</h3>
        <ul>
            <li id="resume"> <a href={Resume}> <b>📄 Resume</b> </a> </li>
            <li id="phone number"> <b>📱 Phone number:</b> 858-216-6245</li>
            <li id="email"><b>📧 Email:</b>  <a href="Kjcortina@gmail.com"> Kjcortina@gmail.com </a></li>
            <li id="linkedin"><b>🔗 Linkedin:</b> <a href="https://www.linkedin.com/in/kevin-c-331364219/">Linkedin.com/Kevin-Cortina </a> </li>    
            <li id="github"><b>💻 Github:</b> <a href="https://github.com/kevin-cortina"> Github.com/Kevin-cortina</a></li>
            <li id="stackOF"><b> 💻 Stack Overflow:</b> <a href="https://stackoverflow.com/users/16532703/kevin-c">https://stackoverflow.com/users/16532703/kevin-c?tab=profile</a></li>
        </ul>

        <span className="headerPad" id="contactMeScroll"></span>
            <section className="cardSec" id="contactMe">
                <aside className="sideTitle">
                    <h2>Contact Me</h2>
                </aside>
                <div className="cardContent">
                    <form ref={form} >
                        {/* names */}
                        <label htmlFor="name"><h3>Name:</h3></label>
                        <input id="name" ref={names} onBlur={checkName} />
                        <span ref={badName}></span>
                        <br/><br/>
                        {/* emails */}
                        <label htmlFor="email"><h3>Email:</h3></label>
                        <input id="email" ref={email} onBlur={checkEmail} />
                        <span ref={badEmail}></span>
                        <br/><br/>
                        {/* messsages */}
                        <label htmlFor="message"><h3>Message:</h3></label>
                        <textarea id="message" ref={messages} onBlur={checkMessage} />
                        <span ref={badMessages}></span>
                        <br/><br/>
                        
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
    </section>

  );
}
    export default Contact;