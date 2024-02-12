
import { useState } from "react";
import "./Header.css"
// import logo from '/logo-name.svg'
import logo from "/public/rick.png"

export default function Header() {
    const [now, setNow] = useState(new Date());
   // const now = new Date();

   setInterval(() => setNow(new Date()), 1000)
    return(
    <header>
        <img className='logo' src={logo} alt="logo" />
      <h3>Peace Among Worlds</h3>
  
      <span>время сейчас: {now.toLocaleTimeString()}</span>
    </header>
    );
  }