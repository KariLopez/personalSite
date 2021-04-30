import React from 'react';
import Footer from '../components/Footer.jsx';

function Home(){

    return(
        <div className='Home'>
            <h1>Karina López</h1>
            <h2>Builder. Tinkerer. Software Developer</h2> 
           <nav>
                <ul className="homeNav">
                    {/*<li><a href='work.html'>Work</a></li>*/}
                    <li><a href='about.html'>About</a></li>
                    <li><a href="https://docs.google.com/document/d/e/2PACX-1vSk0pO2oLehnI5iGtC8z84tjefGfgPyezzKvNwN3YvKTfmCXiyJ-dDFZuP2qvAklrP9wQwNdrYqv6ME/pub" target="_blank">Resume</a></li>
                </ul>
            </nav>
            <Footer/>
   
        </div>
    )
} 
export default Home; 