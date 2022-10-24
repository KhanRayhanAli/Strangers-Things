import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const PostDetails = (props) => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const history = useNavigate();

  const post = props.postData.filter((singlePost) => {
    return singlePost._id == id;
  })[0];
  useEffect(() => {
    async function getSinglePost() {
      try {
        setPostDetails(post);
      } catch (err) {
        console.log(err);
      }
    }
    getSinglePost();
  }, []);

  const handleClick = () => {
    const token = localStorage.getItem("token");
    fetch(
      `https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(() => {
      history("/Posts");
    });
  };

  return (
    <>
      <div className="postDetails">
        <Link to="/Posts">
          <button id="detailBtn">Go Back</button>
        </Link>
        <div key={`posts-${postDetails._id}`} id="postDetails">
          <div>
            <h1 id="detailTitle">{postDetails.title}</h1>
          </div>
          <div id="PriLoc">
            <div id="detailPrice">{"Price: " + postDetails.price}</div>
            <div id="detailLocate">{"Location: " + postDetails.location}</div>
          </div>
          <div id="detailDesc">{"Description: " + postDetails.description}</div>
        </div>
        <div>
          <button id="detailBtn" onClick={handleClick}>Delete Post</button>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
{
  /* <button
          id={post._id ? `${post._id}` : null}
          onClick={(event) => {
              handleDelete(event);
            }}
            >
          Delete Post
        </button> */
}

// async function handleDelete(event) {
// //   history = useNavigate();
//   event.preventDefault();
//   const toDelete = event.target.id;
//   const token = localStorage.getItem("token");
//   const deleted = await deletePost(toDelete, token);
//   console.log(deleted, "Post Deleted");
// //   history("/Posts");
