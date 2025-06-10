import React from 'react'
import './unknown.css'
import { useLocation } from 'react-router'
const Unknown = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="unknown_body">
      </div>
      <div className="unknown_text">
        <h1>WOOPSIE DAISYY</h1>
        <h3>Whats.. ' {location.pathname} ' ?</h3>
        <h2>Either you have typed something that does not exist..</h2>
        <i><h2>Or..</h2></i>
        <h2>Page is removed..</h2>
        <h2>Only way for you to turn back is by</h2>
        <h1>Clicking the button below</h1>
        <a href="/"><button className="unknown_button">Go Back</button></a>
      </div>
    </>
    
  )
}

export default Unknown