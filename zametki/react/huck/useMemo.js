//мемо нужен для оптимизации процеессов и кешрования

import React ,{useMemo, useState} from 'React'

function complexComputer(num){
    console.log('complexComputer')
let i = 0;
wile ( i < 1000000000) i++;
return num *2;
 }



export default function app(){
     const[number , setNumber] = useState(42);
    const[colorRed, setColorRed] = useState(false)
     
    const styles = {
        color: colorRed? 'darred': 'black';
    }
    
    const computed = useMemo(() => {
        return complexComputer(number)
    },[number])
    
    
    return(
        <>
            <h1></h1>
            <button className={'btn btn-success'} onClick={()=> setNumber(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-success'} onClick={()=> setNumber(prev => prev - 1)}>Убрать</button>
            <button className={'btn btn-success'} onClick={()=> setColorRed(prev => !prev )}>Сменить</button>

        </>
     )
}