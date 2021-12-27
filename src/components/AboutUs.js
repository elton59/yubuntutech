import React from 'react';
import './Description.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Table.css';
import './W3.css';
import  code from '../assets/logo/code.jpg';
import  repair from '../assets/logo/repair.jpg';
import   sell from '../assets/logo/sell.jpg';
import './Team.css';
import team from '../assets/logo/team2.jpeg';
import  elton  from '../assets/profilepictures/elton.png';
import  allen  from '../assets/profilepictures/allen.jpg';
import  dorothy  from '../assets/profilepictures/dorothy.jpg';
import  ubuntu  from '../assets/profilepictures/ubuntu.mp4'
import { FaGithub,FaLinkedin,FaFacebook,FaEnvelope } from "react-icons/fa";

function SupportUs() {

    return (
        <div className="descriptionsection">
          <em> <h2><sup></sup> We're a team of conscientious software engineers who work on websites and native mobile apps. We also sell and repair laptops, desktop PCs, and other PC equipment. Our workshop is open Monday through Friday, from 8 a.m. to 5 p.m., on Accra Road in Nairobi, Kenya. </h2></em>
          <hr/>
          <p><em><h3>Services Offered:</h3></em></p>
            <div className='donate'>
              <img src={repair} alt="repair" />
           <h3>Repairs</h3>
           <hr/>
           <b> Screen/Ram/HDD/SSD Replacement
             Data Recovery
             PC Diagnosis And Repair
             OS/Driver Installaton</b>
            </div>
            <div className='donate'>
              <img src={sell} alt="mpesa" />
           <h3>PC Sales</h3> 
           <hr/>
            <b>All PC accessories/Brand new laptops/Desktops/Refurbrished laptops/Destops</b>
            <hr/>
      
            </div>
            <div className='donate'>
              <img src={code} alt="joinus" />
            <h3> Software Development</h3>
            <hr/>
            <b>
Management information systems/Android iOS apps/Responsive websites/APIs
</b>
            </div>
     
     
     
            
            <div className="productsbodycontainer">  
       
     <div className="descriptioncontainer">
    
     </div>


 
     <div className="teamseaction2">
    <div className="teambodyheader"><br/>
    <img src={team} alt="team"  className='teampic'/>
    </div>
 <hr/>
 <div class="card2">
<video src={ubuntu} alt="ubuntu"   width="600" height="300" className="cardimage2" autoPlay  controls/>
  <h1></h1>
 
  <a target="_blank" href="https://github.com/elton59">
<FaGithub className="iconlinks"/>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100071512675088">
<FaFacebook className="iconlinks"/>
</a>
<a target="_blank" href="https://www.linkedin.com/in/john-elton-okoth-86302b21a">
<FaLinkedin className="iconlinks"/>
</a>
</div><br/><br/><br/>
<div class="card2">
<img src={allen} alt="allenn" className="cardimage"/>
  <h1>Allen Ologo</h1>
  <p class="title">Backend Developer (Stacks:Node JS, PHP Laravel) </p>
  <p>Studied Business Information technology at South Eastern University of Kenya</p>
  <a target="_blank" href="https://github.com/elton59">
<FaGithub className="iconlinks"/>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100071512675088">
<FaFacebook className="iconlinks"/>
</a>
<a target="_blank" href="https://www.linkedin.com/in/john-elton-okoth-86302b21a">
<FaLinkedin className="iconlinks"/>
</a>
</div>
<div class="card2">
<img src={dorothy} alt="dorothy" className="cardimage"/>
  <h1>Dorothy Omondi</h1>
  <p class="title">Finance assistant</p>
  <p>Studied bachelor of Commerce (finance) at Kenyatta University</p>
  <a target="_blank" href="https://github.com/elton59">
<FaGithub className="iconlinks"/>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100071512675088">
<FaFacebook className="iconlinks"/>
</a>
<a target="_blank" href="https://www.linkedin.com/in/john-elton-okoth-86302b21a">
<FaLinkedin className="iconlinks"/>
</a>
</div>
<div class="card2">
    <img src={elton} alt="elton" className="cardimage"/>
  <h1>John Elton Okoth</h1>
  
  <p class="title">Full Stack Developer (Stacks:React Js, React-Native & Node Js)</p>
  <p>Studied Mathematics and Computer Science at Kenya Methodist University</p>
  <a target="_blank" href="https://github.com/elton59">
<FaGithub className="iconlinks"/>
</a>
<a target="_blank" href="https://www.facebook.com/profile.php?id=100071512675088">
<FaFacebook className="iconlinks"/>
</a>
<a target="_blank" href="https://www.linkedin.com/in/john-elton-okoth-86302b21a">
<FaLinkedin className="iconlinks"/>
</a>
 
 
</div>
<p>
  
    </p>
        </div>

   



             </div>

    

</div>

    );
}
export default SupportUs;