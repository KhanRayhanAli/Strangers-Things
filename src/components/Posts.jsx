import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'

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
                            <div><h3>{post.title}</h3></div>
                            <div>{"Price: "+post.price}</div>
                            <div>{post.description}</div>
                            <div>{post.location}</div>
                        </div>
                )}) : <div>Posts Loading...</div>
            }
        </div>
    )
}

export default Posts;