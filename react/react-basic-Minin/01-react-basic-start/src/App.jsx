import Header from "./components/Header/Header";
import WayToTaech from "./components/WayToTeach";
import Button from "./components/Buttons/Button";
import {useState} from 'react';
import {ways, differences} from "./data";



export default function App() {
  const [contentType, setContentType] = useState(null);
  
  // const stateArrey = useSate("Жми если не сыкло");
  // const content = stateArrey[0];
  // const setContent = stateArrey[1];
 

  function handleClick(type){
    setContentType(type)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <h3> What is the strength in, brother?</h3>

          <ul>
            {ways.map((way) =>(<WayToTaech key = {way.title} {...way} />))}

           {/* <WayToTaech title ={ ways[0].title } description ={ ways[0].description }></WayToTaech> 
           <WayToTaech {...ways[1]} />
           <WayToTaech {...ways[2]} />
           */}
          </ul>
        </section>
        <section>
          <h3> Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно. </h3>
          {/* <Button text="puk 1"/> */}
          <Button isActive = {contentType === 'way'} 
          onClick={() => handleClick('way')}>puk 1</Button>  

          <Button isActive = {contentType === 'easy'}
          onClick={() => handleClick('easy')}>puk 2</Button> 

          <Button isActive = {contentType === 'program'}
          onClick={() => handleClick('program')}>puk 3</Button> 

            {/* {content ? (
              <p>{differences[content]}</p>  
            ):(
              <div>Жмякай по кнопке</div>
            )} */}

            {!contentType &&  <div>Жмякай по кнопке</div> }
            {contentType && <p>{differences[contentType]}</p>   }

        </section>
      </main>
    </div>
  );
}
