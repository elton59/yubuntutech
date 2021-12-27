
import React from 'react';
import Team from './Team';
import Products from './Products';
import Projects from './Projects';
import './Body.css'

function Body() {
  return (
    <div className="Body">
      <Products/>
      <Projects/>
      <Team/>
    </div>
  );
}

export default Body;
