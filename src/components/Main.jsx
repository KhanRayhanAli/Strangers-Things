import React, { useState, useEffect } from "react";
import { registerUser } from "../api-adapter";

import { 
  Navbar, 
  Home, 
  CreatePost, 
  Login, 
  Posts, 
  Profile, 
  Register, 
  PostDetails 
} from "./";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  
} from "react-router-dom";

const Main = () => {
  const [postData, setPostData] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Login" element={<Login registerUser={registerUser} />}></Route>
        <Route
          path="Register"
          element={<Register  />}
        ></Route>
        <Route path="CreatePost" element={<CreatePost />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route
          path="Posts"
          element={<Posts setPostData={setPostData} postData={postData} />}
        />
        <Route
          path={"PostDetails/:id"}
          element={<PostDetails postData={postData} />}
        />
      </Route>
    )
  );

  useEffect(() => {
    async function getSellerData() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts"
      );
      const result = await response.json();
      const postData = result.data.posts;
      setPostData(postData);
    }
    getSellerData();
  }, []);

  return (
    <div id="main">
      {/* <Login />
      <Register registerUser={registerUser} />
      <Profile />
      <PostDetails postData={postData} /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;