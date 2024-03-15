import React from 'react';
import './post.css'

const Post = (props) => {

    return (
        <div className="post" >
        <div className="post__counter">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <button>Dell</button>
        </div>
      </div>
    );
}

export default Post;
