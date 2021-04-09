import React from 'react';

function Home(){
    return(
        <div className='Home'>
            <h1>Karina Lopez</h1>
            <h2>A descriptive title about what I do</h2>
            <ul className="homeNav">
                <li onClick={RenderPage()}>Work</li>
                <li onClick={RenderPage()}>About</li>
               <li><a href="https://drive.google.com/u/0/uc?id=1Ts3_3VFz0pn8XzAHk7eI5u2VLX9-FHYq" target="_blank">Resume</a></li>
            </ul>
        </div>
    )
}
function RenderPage(component){
    switch(component){
        case "work":
            return Work;
            break;
        case "about":
            return About;
            break;
    }
    
}
export default Home; 