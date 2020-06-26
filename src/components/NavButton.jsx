import React from 'react';
function NavButton (props){
    return(
        <div className="NavButton">
        <a href={props.Navigation}>{props.label}</a>
        </div>
    );  

}
/*
function Navigation(url){
    window.open(url);
}*/


export default NavButton;