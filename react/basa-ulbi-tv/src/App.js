//https://www.youtube.com/watch?v=GNrdg3PzpJQ

import React, { useState,useRef } from "react";
import PostList from "./components/post/PostList.jsx";
import PostForm from "./components/post/PostForm.jsx";
import MySelect from "./components/ui/select/MySelect.jsx";



function App() {


const[posts , setPosts]= useState([{id:1 , title: 'js',body: '3 bla bla bla'},
                                   {id:2 , title: 'pukton',body: '2 bla bla bla'},
                                   {id:3 , title: 'aa',body: '1 bla bla bla'},
                                  ])
 
const createPost =(newPost)=>{
      setPosts([...posts, newPost])
}
const[selectedSort, setSelectedSort]= useState('')

const removePost =(post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts=(sort) =>{
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort]) ))
}

  return (
    
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
        <div>
          <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка по'
          option={[
              {value:'title',  name: 'название'},
              {value:'body',  name: 'описание'}
            ]}
          />
        </div>
      {posts.length !== 0
      ?<PostList 
        remove={removePost}
        posts={posts}
        title={'Posts list2'} />
      :<h1 style={{textAlign: 'center'}}> Нет записей </h1>
      }
      
    
    </div>
  );
}

export default App;
