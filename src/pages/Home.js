import React from 'react'
import "../styles/Home.css";
import Navbar from '../Components/Navbar';
import video1 from '../video/video1.mov';

function Home() {
  return (
    <div className='home' >
    <body className='home-body'>
     
   <h1>Hi, <span className='emoji'>👋</span><br></br> My Name is Je'Rontai Mcfee</h1>
   <h5 classname=" ">I am a Full Stack Web Developer</h5>
<div className="vid-bar" bg="dark" variant="dark" expand="lg">
<div className="video-wrapper">
<video src={video1} autoPlay loop muted className="background-video" />
</div>
</div>
   <div className='services'  id="services">
    
      <h1 className='service-text' >Services I provide</h1>
<div className='service-container'>
      <div className='web-development-container box'>
        <p>dgsrhry</p>
      
        </div>
        
        <div className='web-design-container box '>
        <p>dgsrhry</p>
        
        </div>
        
        <div className='app-development-container box'>
        <p>dgsrhry</p>
       </div>
        </div>

      
   </div>
<div>
  <div className='about' id="about" >
   <a><h1 className='know-container'>lets Get To Know Me</h1></a> 

    <div className="about-container">
      <div className="description-container box">
        <p>
         Dynamic and versatile full-stack web developer adept at solving complex problems, 
         providing seamless equipment installations, and delivering exceptional mobile device repairs. 
         Je’Rontai possesses a deep proficiency in an array of programming languages and cutting-edge technologies, 
         including HTML, CSS, JavaScript, Flutter, Swift, Node.js, React, SQL, MongoDB, TypeScript, Angular, jQuery, 
         MERN Stack, and REST APIs. Known for crafting captivating digital experiences, 
         Je’Rontai combines technical expertise with a passion for creating user-friendly solutions that leave a lasting impact.
        </p>
      </div>
      <div className="languages-container box">
        <h3>Languages I Practice</h3>
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
</div>



<div className="projects">

  </div>
    </body>
    
 
    
   


 </div> 

     
   );
 }
 

export default Home