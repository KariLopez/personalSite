import React, {useState} from 'react';
import NavButton from '../components/NavButton.jsx';
import Header from '../components/Header.jsx';
import ReturnHome from '../components/ReturnHome.jsx';
import styles from '../styling/styles.css';

function App(){
    const [hide,setHide]=useState(false);
    return( <div>
        <Header/>
        <div className="NavBar">
            <NavButton onclick={()=>setHide(!hide)} label="Resume" Navigation=""/>
      <NavButton onclick={()=>setHide(!hide)} label="Experiences" Navigation=""/>
    <NavButton onclick={()=>setHide(!hide)} label="LinkedIn" Navigation="https://www.linkedin.com/in/karina-lopez11/"/>
    <NavButton onclick={()=>setHide(!hide)} label="GitHub" Navigation="https://github.com/KariLopez"/>
    
</div>
<ReturnHome/>
        </div>)
       
    
}
export default App;

