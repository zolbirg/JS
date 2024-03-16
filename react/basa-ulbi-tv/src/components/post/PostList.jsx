
import Post from "./Post.jsx";


const PostList = ({posts,title,remove}) => {

    

    return (
        <>
        <h1 style={{textAlign: "center"}}>{title}</h1>
    {posts.map((post, index) => 
        <Post remove={remove} number={index+ 1} post={post} key={post.id}></Post>
      )}
        </>
    );
}

export default PostList;
