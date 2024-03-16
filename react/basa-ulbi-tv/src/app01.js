// //https://www.youtube.com/watch?v=GNrdg3PzpJQ

// // import React, { useState,useRef } from "react";
// // //import Counter from "./components/counter/Counter.jsx";
// // //import ClassCounter from "./components/counter/ClassCounter.jsx";
// // import PostList from "./components/post/PostList.jsx";
// // import MyButton from "./components/ui/button/MyButton.jsx";
// // import MyInput from "./components/ui/input/MyInput.jsx";



// //function App() {

// //const[value, setValue] = useState('text');

// const[posts , setPosts]= useState([{id:1 , title: 'js',body: ' bla bla bla'},
//                                    {id:2 , title: 'pukton',body: ' bla bla bla'},
//                                   ])
 
// const[title, setTitle]= useState('');
// const[body, setBody] = useState('');
// //const bodyInputRef = useRef();

// const addNewPost = (e) =>{
//   e.preventDefault();
// const newPost ={
//   id: Date.now(),
//   title,
//   body
// }
// setPosts([...posts, newPost])
// setTitle('');
// setBody('');
//   }

//   return (
    
//     <div className="App">
      
     
//      <form>
//       <MyInput 
//         value={title}
//         onChange={e =>setTitle(e.target.value) }
//         type="text"
//         placeholder="название" />
        
//         <MyInput 
//         value={body}
//         onChange={e =>setBody(e.target.value) }
//         type="text" 
//         placeholder="описание" />


//       {/* <MyInput 
//       ref = {bodyInputRef}
//       type="text" 
//       placeholder="описание" /> */}

//       <MyButton onClick={addNewPost}>Создать пост</MyButton> 

//      </form>
//    <PostList posts={posts} title={'Posts list2'} />
    
     
//     {/* //первая версия
//     <Post post={{id:1 , title: 'js',body: ' bla bla bla'}} /> */}

//     {/* // вторая версия
//      <PostList posts={posts} title={'Posts list1'} /> 
      
//       <h1>Input : {value}</h1>
//       <input 
//        type="text"
//        value={value}
//        onChange={event => setValue(event.target.value)}
//         />
//         <h1>ClassComponent</h1>
//       <ClassCounter />
//       <h1>FunctionComponent</h1>
//       <Counter /> */}

//      </div>
//   );
// }

// //export default App;
