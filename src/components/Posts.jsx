import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { useParams, Link } from "react-router-dom";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);
  const [searchInfo, setSearchInfo] = useState({title:""})  

  const postData = props.postData

  function filterPosts() {
    if (!searchInfo.title) {return postData}
    else {
      return postData.filter((filteredPosts) => {
        return filteredPosts.title.toLowerCase() == searchInfo.title.toLowerCase() 
      })
    }
  } 

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  const handleChange = event => {
    const searchInfo = event.target.value
    setSearchInfo({title:searchInfo})
  };

  return (
    <div>
        <div id="searchBar">
            <input type="text" placeholder="Search by Post Title" onChange={handleChange}></input>
        </div>
      <div className="postsBox">
        {posts.length ? (
          filterPosts().map((post) => {
            return (
              <div key={`posts-${post._id}`} id="singlePost">
                <div>
                  <h3 id="allTitle">{post.title}</h3>
                </div>
                <div id="allPrice">{"Price: " + post.price}</div>
                <Link to={`/PostDetails/${post._id}`}>
                  <button id="allBtn">See Details</button>
                </Link>
              </div>
            );
          })
        ) : (
          <div>Posts Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
