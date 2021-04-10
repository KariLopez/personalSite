import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from '../NavPages/AboutMe.jsx';
import Work from '../NavPages/Work.jsx';

function Home(){

    return(
        <div className='Home'>
            <h1>Karina Lopez</h1>
            <h2>Software Developer</h2> 
           <nav>
                <ul className="homeNav">
                    <li><a href='#workPage'>Work</a></li>
                    <li><a href='#aboutPage'>About</a></li>
                    <li><a href="https://drive.google.com/file/d/1YGtzrhmGB83dFQKcadWHazXDCvX3Zhj3/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}
function RenderPage(component){
    switch (component){
        case "work":
            break;
        case "about":
            break;
    }  
}
  
export default Home; 