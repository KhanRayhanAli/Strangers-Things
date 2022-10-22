import React, { useState }from 'react'

import { createPost } from "../api-adapter"



const CreatePost = (props) => {


    async function handleCreatePost (event) {
        event.preventDefault()
        const title = event.target[0].value
        const description = event.target[1].value 
        const price = event.target[2].value
        console.log(title, price, description)
        const token = await createPost(title, price, description)
        
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        
} 

    return (
        <div className="createBox">
            <form onSubmit={handleCreatePost}>
          <label htmlFor='title'>Title:</label>
          <input id="postTitle" type="text" required/>
          <label htmlFor="price">Price:</label>
          <input id="postPrice" type="text" required/>
          <label htmlFor="description">Description:</label>
          <input id="postDescription" type="text" required/>
          <button type="submit">Create Post</button>
            </form>
        </div>
    )
}
    
export default CreatePost;