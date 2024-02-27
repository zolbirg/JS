//https://www.youtube.com/watch?v=9KJxaFHotqI

//основное свойство не вызывает повторных рендеров

import React, {useState, useRef} from 'react'

function app (){
const [value , setValue] = useState(1);
const renderCount = useRef(1);

useEffect(()=> {
    renderCount.current ++;
})
    return (
        <div>
                <h1>Количество рендеровЖ {renderCount.current}</h1>
                <input 
                type='text' 
                onChange={e => setValue(e.target.value)}
                value={value} 
                />
        </div>
    )

}

export default app;