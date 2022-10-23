import React, {useEffect, useState} from "react";
import { useParams, Link  } from "react-router-dom";


const PostDetails = (props) => {
    const { id } = useParams()
    const [postDetails, setPostDetails] = useState({})
    useEffect(() => {
        async function getSinglePost(){
            try{
             const post = props.postData.filter((singlePost) => {
                return singlePost._id == id
              }) [0]
              setPostDetails(post)
            } catch (err) {
                console.log(err);
            }
        }
        getSinglePost();
    }, []);
    




    return ( <>
        <div className="postDetails">
            <Link to="/Posts">
            <button id="detailBtn">Go Back</button>
            </Link>
            <div key={`posts-${postDetails._id}`} id="postDetails">
            <div><h1 id="detailTitle">{postDetails.title}</h1></div>
            <div id="PriLoc">
                <div id="detailPrice">{"Price: "+postDetails.price}</div>
                <div id="detailLocate">{"Location: " + postDetails.location}</div>
            </div>
            <div id="detailDesc">{"Description: " + postDetails.description}</div>
            </div>
        </div>
    </>
    )

    
}

export default PostDetails;