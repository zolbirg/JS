import {useState} from 'react';
import Post from "./Post.jsx";


const PostList = ({posts,title}) => {

    

    return (
        <>
        <h1 style={{textAlign: "center"}}>{title}</h1>
    {posts.map(post => 
        <Post post={post} key={post.id}></Post>
      )}
        </>
    );
}

export default PostList;
