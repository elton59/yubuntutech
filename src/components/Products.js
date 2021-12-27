import React,{useContext } from 'react';
import './Products.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lenovo from '../../src/assets/laptops/lenovo.jpg';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Data from './Data.js'
function Products() {
    return (
        <div className="productseaction">
          
            <div className="productsectionheader">
            </div>
            
                  <div className="productsbodyheader">
                  <h2>Laptop Collection</h2>
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
                  top:'230px',
                  right:"93%",
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
                    
{Data.slice(0,6).map(data => (

<Link to={`/Description/${data.Id} `} key={data.id}>
<div class="productcard">
<img src={data.image} className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">{data.LaptopName}</p>
</div>
</Link>
))}
</div>
<div>
{Data.slice(7,13).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">productname</p>
</div>
</Link>
))}
</div>

</Carousel>
            
            <div className="productsbodycontainer">  
            <div className="productsbodyheader">
                  <h2>Desktop Collection</h2>
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
                    
                {Data.slice(13,19).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">productname</p>
</div>
</Link>
))}
</div>
<div>
{Data.slice(19,25).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">productname</p>
</div>
</Link>
))}
</div>

</Carousel>
            </div> 
            <div className="productsbodycontainer">  
            <div className="productsbodyheader">
                  <h2>Pc Accessories</h2>
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
                  right: "8px",
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
                {Data.slice(25,31).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">{data.LaptopName}</p>
</div>
</Link>
))}                 

</div>
<div>
{Data.slice(31,37).map(data => (
<Link to={`/Description/${data.Id}`}>
<div class="productcard">
  <img src={lenovo} alt="lenovo" className="productcardimage"/>
  <p className="productprice">Ksh 32,000</p>
  <p className="productdescription">productname</p>
</div>
</Link>
))}
</div>

</Carousel>
            </div> 

</div>

    );
}
export default Products;