import React, { useState } from "react";
import Counter from "./components/counter/Counter.jsx";
import ClassCounter from "./components/counter/ClassCounter.jsx";
import PostList from "./components/post/PostList.jsx";



function App() {

const[value, setValue] = useState('text');

const[posts , setPosts]= useState([{id:1 , title: 'js',body: ' bla bla bla'},
                                   {id:2 , title: 'pukton',body: ' bla bla bla'},
                                   {id:3 , title: 'rublik',body: ' bla bla bla'},
                                   {id:4 , title: 'g#',body: ' bla bla bla'},
                                  ])



  return (
    
    <div className="App">
    {/* <Post post={{id:1 , title: 'js',body: ' bla bla bla'}} /> */}
     
   <PostList posts={posts} title={'Posts list1'} />
   <PostList posts={posts} title={'Posts list2'} />
    
     
{/*       
      <h1>Input : {value}</h1>
      <input 
       type="text"
       value={value}
       onChange={event => setValue(event.target.value)}
        />
        <h1>ClassComponent</h1>
      <ClassCounter />
      <h1>FunctionComponent</h1>
      <Counter /> */}

     </div>
  );
}

export default App;
