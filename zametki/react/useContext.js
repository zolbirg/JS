import React {useState,useContext} from 'react'
//import Main from './Main'
//import Alert from './Alert'

const AlertContext  = React.createContext()

function App(){

    const [alert, setAlert]= useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    return(
        <AlertContext.Provider value={alert}>
        <div className={'container'}>
            <Alert />
            <Main toggle={toggleAlert}/>
        </div>
        </AlertContext.Provider>
    )
}

export default App;

//************************************************** */
 function Main({toggle}){
    <>
    <h1>Привет туда </h1>
    <buttnon onClick={toggle} className= 'btn btn-succeess'>Показать alert</buttnon>
    </>
}

//********************************************** */
 //import React {useState,useContext} from 'react'
 function Alert(){

    const alert = useContext(AlertContext)

    if (!alert) return null

    return(
        <div className={'alert'}>
            <p>очень важное сообщение</p>
        </div>
    )
 }