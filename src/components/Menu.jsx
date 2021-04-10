import React,{useState} from 'react';

function Menu(){
    const [show, seeMenu] = useState(false);

    let menuitems=<div></div>
    if(show){
        menuitems= <div><div>Home</div><div>Work</div><div>About Me</div><div><a href="https://drive.google.com/file/d/1YGtzrhmGB83dFQKcadWHazXDCvX3Zhj3/view?usp=sharing" target="_blank">Resume</a></div></div>;         
    }
    return(
        <div className='menu'>
            <a onClick={()=>seeMenu(!show)}><span class="material-icons">menu</span></a>
           {menuitems}
        </div>
    )
}
export default Menu;