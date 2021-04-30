import React,{useState} from 'react';
import menu from '../styling/menu.css';


function Menu(){
    const [show, seeMenu] = useState(false);

    let menuitems=<div></div>;
    if(show){
        menuitems= <div className='menuItems'><div><a href='index.html'>  Home</a></div>{/*<div><a href='work.html'>Work</a></div>*/}<div><a href='about.html'>About</a></div><div><a href="https://docs.google.com/document/d/1pPrCUpt-EN96BcgvytCy80R3YwMfYDwpuMcof9RQeWg/edit?usp=sharing" target="_blank">Resume</a></div></div>;         
    }
    return(
        <div className='menu'>
            <a onClick={()=>seeMenu(!show)}><span class="material-icons">menu</span></a>
           {menuitems}
        </div>
    )
}
export default Menu;