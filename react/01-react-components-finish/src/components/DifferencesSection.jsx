
import Button from "./Buttons/Button";
import {useState} from 'react';
import {differences} from "../data";


export default function DifferencesSection(){
    const [contentType, setContentType] = useState(null);
  
    function handleClick(type){
      setContentType(type)
    }
    return(
        <section>
          <h3> Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно. </h3>
          
          <Button isActive = {contentType === 'way'} 
          onClick={() => handleClick('way')}>puk 1</Button>  

          <Button isActive = {contentType === 'easy'}
          onClick={() => handleClick('easy')}>puk 2</Button> 

          <Button isActive = {contentType === 'program'}
          onClick={() => handleClick('program')}>puk 3</Button> 

            {!contentType &&  <div>Жмякай по кнопке</div> }
            {contentType && <p>{differences[contentType]}</p>   }

        </section>

    )
} 