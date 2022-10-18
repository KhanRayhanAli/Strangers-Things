import React, { useState, useEffect }from "react";
import {Navbar, Home, Login, Posts, Profile} from './';




const Main = () => {
  const [postData, setPostData] = useState([])

  useEffect (() => {
    async function getSellerData() {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
      const result = await response.json()
      const postData = result.data.posts
      setPostData(postData)
      console.log(postData)
    }
    getSellerData()
  }, []
  )  
  
  
  return (
    <div id="main">
      <Navbar />
      <Home />
      <Login />
      <Posts setPostData = {setPostData} postData = {postData} />
      <Profile />
    </div>
  );
};

export default Main;
