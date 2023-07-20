import React from 'react'
import { useState } from 'react';

export const Footer = () => {
  const [clicks,setClicks] = useState(0);

  
const year = new Date().getFullYear;
const companyName = "MyCompanyExample";

const  handleClick = () => {
setClicks(clicks + 1);
}


  return (
    <div class = "container">
      
<footer class="text-body-secondary py-5">
  <div class="container">
   
    <p class="mb-1"> 
    <span onClick = {handleClick}>
     
      <img className="App-logo" height="52"  src='logoRick.png' alt='Pickle Rick'    /> 
    </span> 
    &copy; {companyName} {year}  Clicks = {clicks} <a href="#">Back to top</a></p>
    


  </div>
</footer>
    </div>
  )
}

export default Footer
