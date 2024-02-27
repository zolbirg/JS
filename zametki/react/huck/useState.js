//https://www.youtube.com/watch?v=9KJxaFHotqI

import React, {useState} from 'react'

function app(){
const[counter,setCouner] = useState(начальное занчение)

//обычный хук
// function plus(){
//     setCouner(counter + 1)
// }

// двойной вызов основываясь на предыдущем состоянии
function plus(){
    setCouner((prev) => {
        return prev +1
    })
    setCouner(prev => prev + 1)
}


function minus(){
    setCouner(counter - 1)
}

return(
    <div>
        <h1>Счетчик: {counter}</h1>
        <button onClick={plus} />
        <button onClick={minus} /> 
    </div>
)
}