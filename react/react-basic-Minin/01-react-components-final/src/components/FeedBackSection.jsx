import { useState, useRef } from "react";
import Button from "./Buttons/Button";

function SteteVsRef(){
    const input = useRef()
    // const [value, setValue] = useState('');
     const[show, setShow] = useState(false)

    function handleKeyDawn(event){
        if(event.key=== 'Enter'){
            setShow(true)
        }
    }


    return(
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input 
            ref={input}
            type="text" 
            //value={value}
            onKeyDown={handleKeyDawn}
           // onChange={(e)=> setValue(e.target.value)} 
            className="control" />
        </div>
    )
}

export default function FeedBackSection(){
const [form, setForm] = useState ({
    name:'',
    hasError: false,
    reason: 'help',

})
// const [name, setName] = useState('');
// const [hasError, setHasError] = useState(false);
// const [reason, setReason] = useState('help');

function handleNameChange(event){
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    
    // setForm({
    //     name: event.target.value,
    //     hasError: event.target.value.trim().length === 0,
    // })

    setForm((prev)=> ({
        ...prev,
        name: event.target.value,
        hasError: event.target.value.trim().length === 0,
    }))

}

    return (
        <section>
            <h3>Обратная связь</h3>
            <form style={{marginBottom:'1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input 
                type="text" 
                id="name" 
                className="control" 
                value={form.name} 
                style={{
                    border: form.hasError ? '1px solid red' : null 
                 }}
                onChange={handleNameChange} />

                <label htmlFor="reason">Причина обращения</label>
                <select
                 id="reason" 
                 className="control" 
                 value={form.reason}
                 onChange={(event) => 
                    setForm((prev) =>
                    ({ ...prev, reason: event.target.value,}))}>

                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощ</option>
                    <option value="suggest">Предложение</option>
                </select>
                <Button disabled={form.hasError} isActive={!form.hasError} >Отправить</Button>
            </form>
                    <hr />
            <SteteVsRef />

            {/* <pre>
            Name: {form.name}
                <br />
            Reason: {form.reason}

            </pre> */}


        </section>
    )
}