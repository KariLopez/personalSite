import React,{useState} from 'react';
import menu from '../styling/menu.css';
import { resumeLoc } from '../components/resumeLink.js';


function Menu(){
    const [show, seeMenu] = useState(false);

    let menuitems=<div></div>;
    if(show){
        menuitems= <div className='menuItems'>
            <div><a href='index.html'>Home</a></div>
                <div><a href='about.html'>About</a></div>
                <div><a href={resumeLoc} target="_blank">Resume</a></div>
            </div>;         
    }
    return(
        <div className='menu'>
            <a onClick={()=>seeMenu(!show)}><span class="material-icons">menu</span></a>
           {menuitems}
        </div>
    )
}
export default Menu;