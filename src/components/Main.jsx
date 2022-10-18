import React, { useState, useEffect }from "react";
import {Navbar, Login, Posts, Profile} from './';




const Main = () => {
  const [postData, setPostData] = useState([])

  useEffect (() => {
    async function getSellerData() {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts')
      const result = await response.json()
      const userPosts = result.data.posts
      setPostData(userPosts)
      console.log(userPosts)
    }
    getSellerData()
  }, []
  )  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div id="main">
      <Navbar />
      <Login />
      <Posts setPostData={setPostData} userPosts={userPosts} />
      <Profile />
    </div>
  );
};

export default Main;
