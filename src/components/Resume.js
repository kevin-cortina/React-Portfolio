import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import Resume2 from '../images/download-(1).png'

function Resume ( handlePageChange) {
  return (  
    <div>
          <p>We learned during these last 6 months; slack, visual studio code, githube, github pages, heroku, toolnet, node.js express.js, mysql, mysql worbench,  sequalize.</p>
    <a id="portfolio-navigation" href={Resume} onClick={() => handlePageChange()}
    > </a>
    <ul id="resume"> <a href={Resume2}> <b>📄 Resume</b> </a> </ul>
    </div>
    
  );
}
    export default Resume;