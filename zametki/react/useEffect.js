import React ,{useState,useEffect} from 'react';

export default function app(){
    const [type, setType] = useState('users');
    const[date, setDate] = useStste([])
    (  //будет вызываться при каждом рендэре компонента
         useEffect(() => { 
           })
    );

    ( //в конце зависимость от тайп и он будет рендериться только при изменении стэйта
       useEffect(() => { 
        },[type])
    );

    (
        useEffect(() => {
            fetch ('https://')
            .then(response => response.json())
            .then( json => setDate(json))
        },[type])
    )

    (
        function mouseMoveHandler(){

            }
            useEffect(() =>{
            console.log('bla bla');
            window.addEventListener('mousemove',mouseMoveHandler)
                //удаляет слушатель после использования
            return() => {
                window.removeEventListener('mousemove',mouseMoveHandler)
            }},[])
        
    )


        (//при изменение стейта
        //fetch запрос к серверу
        //2 преобразование в json
        //3 изменение стейта на основе полученных данных
        //4* catch отлов ошибок и вывод
        //5* завершение finally то что тут выполнется в любом случее
        useEffect(() =>{
            fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => {
            setUsers(json.data);
            }).catch(err => {
            console.warn(err)
            alert('bla bla error')
            }).finally(()=> setLoading(false))
        },[type])
        );

    return(
        <div>
            <h1> Ресурс: {type}</h1>
            
            <button onClick={() => setType('users')}>Пользооватьтель</button>
            <button onClick={() => setType('todos')}>тодо</button>
            <button onClick={() => setType('posts')}>посты</button>

            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>

    )
}

//export default app