import React from 'react';
import './Team.css';
import team from '../assets/logo/team2.jpeg';
import  elton  from '../assets/profilepictures/elton.png';
import  allen  from '../assets/profilepictures/allen.jpg'
import  dorothy  from '../assets/profilepictures/dorothy.jpg'
import  ubuntu  from '../assets/profilepictures/ubuntu.mp4'
import { FaGithub,FaLinkedin,FaFacebook } from "react-icons/fa";
function Team() {
    return (
  <div className="teamseaction">
    <div className="teambodyheader">
    <img src={team} alt="team"  className='teampic'/>
    </div>
    <div class="card">
<video src={ubuntu} alt="ubuntu"   className="cardimage3" autoPlay  controls/>
  <h1></h1>
</div>
    <div class="card">
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
<div class="card">
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
<div class="card">
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
<p>
   
    </p>
        </div>
    );
}

export default Team;