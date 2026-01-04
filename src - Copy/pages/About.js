import React from 'react';
import {Link} from 'react-router-dom';
import pic1 from '../assets/about.png'
import pic2 from '../assets/about2.png'


function About() {
  return (
    <div>
     
      <Link to="/"><img src={pic1} alt='not found'/></Link>
      <Link to="/"><img src={pic2} alt='not found'/></Link>
    </div>
  );
}

export default About;
