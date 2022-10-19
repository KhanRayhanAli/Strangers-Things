import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
import { useParams, Link} from "react-router-dom";

const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])

    return (
        <div className="postsBox">
            {
                posts.length ? posts.map((post) => {
                    return (
                        <div key={`posts-${post._id}`} id="singlePost">
                            <div><h3 id="allTitle">{post.title}</h3></div>
                            <div id="allPrice">{"Price: "+post.price}</div>
                           
                            <Link to= {`/PostDetails/${post._id}`}><button id="allBtn">See Details</button></Link>
                        </div>
                )}) : <div>Posts Loading...</div>
            }
        </div>
    )
}

export default Posts;