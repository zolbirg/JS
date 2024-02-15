
import { useEffect, useState } from "react";
import "./Header.css"
import logo from "/public/rick.png"
import {styled} from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {
    const [now, setNow] = useState(new Date());
   // const now = new Date();

    useEffect(() => {
      const interval = setInterval(() => setNow(new Date()), 1000)

      return() => {
        clearInterval(interval)
      }
    },[])

   //setInterval(() => setNow(new Date()), 1000)
    return(
    <HeaderContainer>
        <img className='logo' src={logo} alt="logo" />
      <h3>Peace Among Worlds</h3>
  
      <span>время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
    );
  }