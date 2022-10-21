import React, { useState, useEffect }from "react";
import {registerUser} from "../api-adapter"
import {Navbar, Home, Login, Posts, Profile, Register, PostDetails} from './';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";




const Main = () => {
  const [postData, setPostData] = useState([])
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
        <Route path="/Home" element={<Navigate to = "/Home"/>}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={  <Register registerUser = {registerUser} />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Posts" element={<Navigate to = "/Posts" />}/>
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
    }
    getSellerData()
  }, []
  )  
  
    
  return (
    <div id="main">
      <Navbar />
      <Home />
      <Login />
      <Register registerUser = {registerUser}/>
      <Profile />
      <Posts setPostData = {setPostData} postData = {postData}/>
      <PostDetails postData = {postData}/>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
};

export default Main;
