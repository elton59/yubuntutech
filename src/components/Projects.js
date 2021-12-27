import React from 'react';
import './Project.css';

import ahero from '../../src/assets/projects/ahero.PNG';
import aherod from '../../src/assets/projects/aherod.PNG';
import aherof from '../../src/assets/projects/aherof.png';
import aheroj from '../../src/assets/projects/aheroj.PNG';
import aherodashboard from '../../src/assets/projects/aherodashboard.JPG';
import aherocustomers from '../../src/assets/projects/aherocustomers.JPG';
import aheroaddfinished from '../../src/assets/projects/aheroaddfinished.JPG';
import aheroadminlogin from '../../src/assets/projects/aheroadminlogin.JPG';
import scana from '../../src/assets/projects/scana.png';
import scanb from '../../src/assets/projects/scanb.png';
import scanc from '../../src/assets/projects/scanc.png';
import report from '../../src/assets/projects/report.JPG';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import Data from './Data.js';
import {Link} from 'react-router-dom'
function Projects() {
    return (
        <div className="projectseaction">
        <div className="pojectsectionheader">

        </div>
        <div className="projectbodycontainer">  
        <div className="projectbodyheader">
                  <h2>Mobile Applications</h2>
                  </div>
            <Carousel 
             renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ 
              position:'absolute',
              top:'250px',
              left:0,
              width:"120px",
              fontSize:"20px",
              backgroundColor:"transparent",
              color:"black",
              zIndex:"2"
            }}
          >
            <FaChevronCircleLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position:'absolute',
              top:'250px',
              right:"0px",
              width:"120px",
              fontSize:"20px",
              backgroundColor:"transparent",
              color:"black"
            }}
          >
            <FaChevronCircleRight  />
          </button>
        )
      } >
            <div>
            {Data.slice(7,13).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={data.image} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">productname</p>
</div>
</Link>
))}
</div>
<div>
<div class="projectcard">
<img src={aherod} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={aherof} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={aheroj} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
</Carousel>
        </div> 
        <div className="projectbodycontainer">  
        <div className="projectbodyheader">
                  <h2>QR code /BarCode Scanner Applications</h2>
                  </div>
            <Carousel 
             renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ 
              position:'absolute',
              top:'250px',
              left:0,
              width:"120px",
              fontSize:"20px",
              backgroundColor:"transparent",
              color:"black",
              zIndex:"2"
            }}
          >
            <FaChevronCircleLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
         position:'absolute',
                  top:'250px',
                  right:"0px",
                  width:"120px",
                  fontSize:"20px",
                  backgroundColor:"transparent",
                  color:"black"
            }}
          >
            <FaChevronCircleRight  />
          </button>
        )
      } >
            <div>

<div class="projectcard">
<img src={scana} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>

<div class="projectcard">
<img src={scanb} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>

<div class="projectcard">
<img src={scanc} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>

</Carousel>
        </div>  
        <div className="projectbodycontainer">  
        <div className="projectbodyheader">
                  <h2>Management Information Systems</h2>
                  </div>
            <Carousel 
             renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ 
              position:'absolute',
              top:'250px',
              left:0,
              width:"120px",
              fontSize:"20px",
              backgroundColor:"transparent",
              color:"black",
              zIndex:"2"
            }}
          >
            <FaChevronCircleLeft />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position:'absolute',
              top:'250px',
              right:"0px",
              width:"120px",
              fontSize:"20px",
              backgroundColor:"transparent",
              color:"black"
            }}
          >
            <FaChevronCircleRight  />
          </button>
        )
      } >
            <div>
              
<div class="projectcard">
<img src={aherodashboard} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={aherocustomers} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={aheroaddfinished} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={aheroadminlogin} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
<div>
<div class="projectcard">
<img src={report} alt="lenovo" className="projectcardimage"/>
<p className="pojectprice">Ksh 32,000</p>
<p className="projectdescription">Lenovo Idealpad</p>
</div>
</div>
</Carousel>
        </div>   
        <div class="projectcard">
<h2>We also Offer the Following Services</h2>
<h3>Screen Replacement/repair</h3>
<h3>RAM Replacement</h3>
<h3>Fix BIOS issues</h3>
<h3>General PC Repair</h3>
<p className="projectdescription">Y'all are Welcome</p>
</div>

</div>
    );
}

export default Projects;