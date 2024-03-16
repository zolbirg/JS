import React from 'react';
import MyButton from '../ui/button/MyButton';
import './post.css'

const Post = (props) => {

    return (
        <div className="post" >
        <div className="post__counter">
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    );
}

export default Post;
