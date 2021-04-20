import React from 'react';
import Download from '../components/Download.jsx';
import ReturnHome from '../components/ReturnHome.jsx';
import SiteLink from '../components/SiteLink.jsx';
import QuoteReel from '../components/QuoteReel.jsx';
import Story from '../components/Story.jsx';
import work from '../assets/linkedIn.png';
import code from '../assets/gitHub.png'
import styles from '../styling/styles.css';

function App(){
    return( 
    <div>
     <a id="top"></a>
        <div className='Home'>
            <h1 className="Header">Karina López</h1>
            <SiteLink src={work} newWindow='https://www.linkedin.com/in/karina-lopez11/' />
            <SiteLink src={code} newWindow='https://github.com/KariLopez'/ >
        </div>
        <div className='ImageReel'>
            <Story src='https://i.imgur.com/fC213Az.jpg' caption='Teaching an Intro to Coding Class hosted by Grand Circus' icon='school'/>
            <Story src='https://i.imgur.com/4FWTH43.jpg' caption='Volunteering at Weekend for Good with Citizen Labs Team' icon='self_improvement'/>
            <Story src='https://i.imgur.com/UOBt49t.jpg' caption='Honored to have been part of this great panel with other women working in tech from West Michigan!' icon='emoji_objects'/>
            <Story src='https://i.imgur.com/CrzJw60.png' caption='I was so excited to be a part of this panel in collaboration with The Hive, such a cool co-working space concept' icon='whatshot'/>
        </div>
        <QuoteReel/>
        <div className="NavBar">
            <Download label="Download Resume" Navigation="https://drive.google.com/u/0/uc?id=1Ts3_3VFz0pn8XzAHk7eI5u2VLX9-FHYq&export=download"/>    
        </div>
        <ReturnHome/>
        
    </div>
    )
}
export default App;

