import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import project1 from '../images/note-taker-app.png';
import project2 from '../images/EMS-app.png';
import project3 from '../images/weatherdash-sc.jpeg';
import project4 from '../images/groupproject2.jpeg';
import project5 from '../images/ECOM.png';
import project6 from '../images/FTSC.png';



function Portfolio () {
    const pictureWidth = { width: '25%' };
    const pictureWidthTop = {width: '15%'}
    
  return (
    <section className="portfolio">
    <section>
        <div className="portfolio-images">
            <section className="first-images">
                <a href="#project-1"> <img className="Port-img" 
                    src={project1} alt="PLACE HOLDER 1" style={pictureWidth}/>
                    </a> 
                <a href="#project-2"> <img className="Port-img" 
                    src={project2} alt="PLACE HOLDER 2" style={pictureWidth}/>
                    </a>
                <a href="#project-3"> <img className="Port-img" id="port-image-3"
                    src={project3}alt="PLACE HOLDER 3" style={pictureWidth}/>
                    </a>
                <a href="#project-4"> <img className="Port-img" id="port-image-3"
                    src={project4}alt="PLACE HOLDER 6" style={pictureWidth}/>
                    </a>
                <a href="#project-5"> <img className="Port-img" 
                    src={project5} alt="PLACE HOLDER 5" style={pictureWidth}/>
                    </a>
                <a href="#project-6"> <img className="Port-img" id="port-image-3"
                    src={project6}alt="PLACE HOLDER 6" style={pictureWidth}/>
                    </a>
            </section>
        </div>
    </section>
</section>



  );
}
    export default Portfolio;