import React from 'react';
import Footer from '../components/Footer.jsx';

function Home(){

    return(
        <div className='Home'>
            <h1>Karina López</h1>
            <h2>Builder. Tinkerer. Software Developer</h2> 
           <nav>
                <ul className="homeNav">
                    {/**/}
                    <li><a href='work.html'>Work</a></li>
                    <li><a href='about.html'>About</a></li>
                    <li><a href="https://drive.google.com/file/d/1YGtzrhmGB83dFQKcadWHazXDCvX3Zhj3/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </nav>
            <Footer/>
   
        </div>
    )
} 
export default Home; 