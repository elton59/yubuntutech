import React,{useContext} from 'react';
import './Description.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lenovo from '../../src/assets/laptops/lenovo.jpg';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronCircleLeft, FaChild, FaWhatsapp } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';  
import ReactStars from "react-rating-stars-component" 
import './Table.css';
import './W3.css';
import {useState} from 'react';
import { useParams} from "react-router-dom"
import Data from './Data.js';

function Description() {
  const params = useParams()
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);

  };
  const data = Data.find(p => p.Id == params.id)
  console.log('PARAMS::', params, data)
    return (
        <div className="descriptionsection">
          
            <div className="productsectionheader">
            </div>
            
     
            
            <div className="productsbodycontainer">  
        <div className="descriptioncardcontainer">
                <Carousel 
                 renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ 
                  position:'absolute',
                  top:'230px',
                  right: "93%",
                  width:"40px",
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
                  top:'230px',
                  right: "0px",
                  width:"40px",
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
                    
 <div class="descriptioncard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>

</div>
</div>
<div>
                    
                    <div class="descriptioncard">
                     <img src={lenovo} alt="lenovo" className="productcardimage"/>
                 
                   </div>
                   </div>
                   <div>
                    
                    <div class="descriptioncard">
                     <img src={lenovo} alt="lenovo" className="productcardimage"/>
                     
                   </div>
                   </div>
                          


</Carousel>
            </div>
     <div className="descriptioncontainer">
       <p className="description">
       <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    color="#ffd700"

    
  />
  5 stars based on 2 reviews.
         <table className="customers" >
           
         <th><h2 className="description">description</h2></th>
         <tr><td>BRAND</td><td>Lenovo</td></tr>
         <tr><td>RAM</td><td>8 GB</td></tr>
         <tr><td> STORAGE</td><td>500 GB HDD</td></tr>
         <tr><td>PROCESSOR</td><td>CORE I5 7<sup>th</sup>GEN</td></tr>
         <tr><td>BATTERY LIFE</td><td>PERFECT BATTERY LIFE</td></tr>
         <tr><td></td><td><h2 className="description">KES 32,000</h2></td></tr>
         <tr><td><button className="descriptionbutton"><FaWhatsapp/>ORDER NOW</button></td><td><button className="descriptionbutton"><FaChild/>JOIN WHATSAPP GROUP</button></td></tr>
      
         </table>
       {/*  
       <ul >SPECIFICATION
       <li>8 GB RAM</li>
       <li>500 GB HDD</li>
       <li>14 INCH DISPLAY</li>
       <li>CORE I5 7<sup>th</sup>GEN</li>
       <li>PERFECT BATTERY LIFE</li></ul> */}
  
       </p>
     </div>


     <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Description
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Reviews
        </button>
       
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Lenovo 3250 </h2>
          <hr />
          <p className="description reviewp">
          At approximately 1.15 kg, the IdeaPad 130 is a sleek, elegant lightweight laptop computer. It's ideal for everyday work, and the HD display is stunning. If you need dependable processing power and strong performance, the 120s is an excellent choice for both work and play. The last thing you want to be concerned about is running out of battery power. IdeaPad 120S offers over 8 hours of battery life. Stream content quickly and easily from your Lenovo 120s to a television or other display.
          </p>
          <p className="description reviewp">
          At approximately 1.15 kg, the IdeaPad 130 is a sleek, elegant lightweight laptop computer. It's ideal for everyday work, and the HD display is stunning. If you need dependable processing power and strong performance, the 120s is an excellent choice for both work and play. The last thing you want to be concerned about is running out of battery power. IdeaPad 120S offers over 8 hours of battery life. Stream content quickly and easily from your Lenovo 120s to a television or other display.
          </p>
          <p className="description reviewp">
          At approximately 1.15 kg, the IdeaPad 130 is a sleek, elegant lightweight laptop computer. It's ideal for everyday work, and the HD display is stunning. If you need dependable processing power and strong performance, the 120s is an excellent choice for both work and play. The last thing you want to be concerned about is running out of battery power. IdeaPad 120S offers over 8 hours of battery life. Stream content quickly and easily from your Lenovo 120s to a television or other display.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="centerrevirew">
          <h2>Rate And Review </h2>
    
          <hr />
          <p>Ratings</p>
          <hr/>
          <p>Rate Product</p>
          <p className="stars"><ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"  
  /></p>
 
          <p>
            Reviews
          </p>
          <hr/>
          <p>No Reviews Yet</p>
          <p><form>
            <label>Email Address</label>
            <input type="email"/><br/>
            <label>Name</label>
            <input type="text"/><br/>
            <label>Review</label>
            <input type="text"/><br/>
            <button className="reviewbutton">Submit</button>
            </form></p>
       
        </div>

     </div>
      </div>
    </div>



             </div>

    

</div>

    );
}
export default Description;