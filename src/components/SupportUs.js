import React from 'react';
import './Description.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Table.css';
import './W3.css';
import  kcb from '../assets/logo/kcb.jpg';
import  joinus from '../assets/logo/joinus.png';
import  mpesa from '../assets/logo/mpesa.png';
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
          <em> <p><sup>❝</sup>It's not how much we give<br/> but how much love we put into giving<sub>❞</sub> <br/>
           ~Mother Teresa</p></em>
            <div className='donate'>
              <img src={kcb} alt="kcb" />
           <h2>Donate by Bank Transfer</h2>
           <hr/>
           <b> Please use the following information if you desire to give by bank transfer:
             <br/>
             <br/>
             <hr/>
              <br/>
              Account Name: JOHN ELTON OKOTH<br/>
              Account Number: 1264022913
</b>
            </div>
            <div className='donate'>
              <img src={mpesa} alt="mpesa" />
           <h2>Donate by M-PESA</h2> 
           <hr/>
            <b>Please use the following information if you desire to give by bank transfer.<br/>
            Select Lipa na Mpesa then Paybill and use the following info:<br/>
            <hr/>
           Business No: 522522<br/>
           Account Number:1264022913</b>
            </div>
            <div className='donate'>
              <img src={joinus} alt="joinus" />
            <h2> Join Us</h2>
            <hr/>
            <b>
If you wish to to be part of the team, send you CV to us on:
<hr/>

<FaEnvelope/>yubuntutech59@gmail.com</b>
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