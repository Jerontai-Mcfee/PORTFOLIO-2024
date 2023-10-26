import React from 'react'
import "../styles/Home.css";
import Navbar from '../Components/Navbar';
import video1 from '../video/video1.mov';
import webdev from '../helpers/webdev.jpg';
import webdesign from '../helpers/webdesign.jpg';
import appdev from '../helpers/appdev.png';
import techLogo from "../Components/skillArr";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='home' >
    <body className='home-body'>
     
   <h1 className="intro1">Hi, <span className='emoji'>👋</span><br></br> My Name is Je'Rontai Mcfee  </h1>
   <h1 className="intro2 ">I am a Full Stack Web Developer</h1>
<div className="vid-bar" >
<div className="video-wrapper">
<video src={video1} autoPlay loop muted className="background-video" />
</div>
</div>

<div className='services'>
    
      <h1 className='service-text' >Services I Provide</h1>
<div className='service-container'>

<figure className="image-buttons">
      
   <img className="web-dev"  src={webdev} style={{ width: "300px", height: "300px", borderRadius: "50%" }} />
  <h1 className="webdevtext" >Web Development</h1>
     
     </figure>
        <figure>
        <img className="web-des"  src={webdesign} style={{ width: "300px", height: "300px", borderRadius: "50%" }} />
  <h1 className="webddestext" >Web Design</h1>
        </figure>
        <figure>
        <img className="app-dev"  src={appdev} style={{ width: "300px", height: "300px", borderRadius: "50%" }} />
  <h1 className="appdevtext" >App Development</h1>
        </figure>
        </div>
      
   </div>
<div>
  <div className='about'  >
   <a><h1 className='know-container'>Lets Get To Know Me</h1></a> 

    <div className="about-container">
      <div className="description-container">
        <p>
        I am a passionate full-stack web developer with a diverse set of skills tailored to bring digital experiences to life.
         With expertise in both front-end and back-end development, I can seamlessly bridge the gap between design and functionality. 
        </p>
      </div>
      </div>
      <div id="skills-section">
      <div className="sections-heading">
        <h1 className ="skills-tab">My Skills</h1>
        
      </div>
      <div className="skill-list">
        {techLogo.map((logo) => (
          <div className="logos">
            <div className="skill-logo">
              <img
                key={logo.id}
                className="logo-img"
                id={logo.techName}
                src={logo.image}
                alt={logo.techName}
              />
            </div>
            <p>{logo.techName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

      
    </div>
    
</div>



<div className="projects">

  </div>
    </body>
    
 
    
   


 </div> 

     
   );
 }
 

export default Home