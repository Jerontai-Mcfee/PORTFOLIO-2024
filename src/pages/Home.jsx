import React from 'react'
import "../styles/Home.css";
import Navbar from '../Components/Navbar';
import video1 from '../video/video1.mov';
import webdev from '../helpers/webdev.jpg';
import webdesign from '../helpers/webdesign.jpg';
import appdev from '../helpers/appdev.png';
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
         Dynamic and versatile full-stack web developer adept at solving complex problems, 
         providing seamless equipment installations, and delivering exceptional mobile device repairs. 
         Je’Rontai possesses a deep proficiency in an array of programming languages and cutting-edge technologies
         Je’Rontai combines technical expertise with a passion for creating user-friendly solutions that leave a lasting impact.
        </p>
      </div>
      </div>


      <div className="skills-section">
        <h1 className="languages">Languages I Practice</h1>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>

        </ul>
      </div>
    </div>
    
</div>



<div className="projects">

  </div>
    </body>
    
 
    
   


 </div> 

     
   );
 }
 

export default Home