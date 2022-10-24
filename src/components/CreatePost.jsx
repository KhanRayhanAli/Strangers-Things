import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api-adapter";

// set pieces of state for title, desc,price, location, etc.
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";
const CreatePost = (props) => {
  const [title, setPostTitle] = useState("");
  const [price, setPostPrice] = useState("");
  const [description, setPostDescription] = useState("");
  const [location, setPostLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  async function handleCreate(event) {
    event.preventDefault();
    const newPost = { title, price, description, location };
    console.log(newPost);

    setIsLoading(true);

    fetch(
      `https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            location: `${location}`,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        history("/Posts");
      });
  }

  return (
    <div className="createBox">
      <form onSubmit={handleCreate}>
        <label htmlFor="title">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={title}
          onChange={(event) => setPostTitle(event.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="postPrice"
          type="text"
          required
          value={price}
          onChange={(event) => setPostPrice(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="postDescription"
          required
          value={description}
          onChange={(event) => setPostDescription(event.target.value)}
        ></textarea>
        <label htmlFor="location">Location:</label>
        <input
          id="postLocation"
          type="text"
          required
          value={location}
          onChange={(event) => setPostLocation(event.target.value)}
        />
        {!isLoading && <button type="submit">Create Post</button>}
        {isLoading && (
          <button disabled type="submit">
            Adding Post...
          </button>
        )}
      </form>
    </div>
    // add on change for event
  );
};

export default CreatePost;
