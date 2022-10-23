import React from 'react'
import MyImage from './Vecna.png'
import Navbar from './'
const Home = () => {
  


return (  
  <div className="Vecna">
    <img src = {MyImage} alt = "Vecna" id="VecnaImg" /> 
    <div id="homeText">
      <p>Get started today by logging in to create your first listing!</p>
    </div>
  </div>
)
}


export default Home; 