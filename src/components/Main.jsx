import React, { useState, useEffect }from "react";
import {registerUser} from "../api-adapter"
import {Navbar, Home, Login, Posts, Profile, Register, PostDetails} from './';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";




const Main = () => {
  const [postData, setPostData] = useState([])
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" >
           
        
      
        <Route path="Home" element={<Home />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={  <Register registerUser = {registerUser} />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="" element={<Posts setPostData = {setPostData} postData = {postData} />}/>
        <Route path={"PostDetails/:id"} element={<PostDetails postData = {postData}/>}/>
        </Route>
    )
  )
  
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
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
