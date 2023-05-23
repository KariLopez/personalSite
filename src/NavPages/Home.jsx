import React from 'react';
import Footer from '../components/Footer.jsx';
import { resumeLoc } from '../components/resumeLink.js';

function Home(){
    return(
        <div className='Home'>
            <h1>Karina López</h1>
            <h2>Builder. Tinkerer. Software Developer</h2> 
           <nav>
                <ul className="homeNav">
                    <li><a href='about.html'>About</a></li>
                    <li><a href={resumeLoc} target="_blank">Resume</a></li>
                </ul>
            </nav>
            <Footer/>
   
        </div>
    )
} 
export default Home; 