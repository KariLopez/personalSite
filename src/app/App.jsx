import React, {useState} from 'react';
import NavButton from '../components/NavButton.jsx';
import Header from '../components/Header.jsx';
import ReturnHome from '../components/ReturnHome.jsx';
import ExtLink from '../components/ExtLink.jsx';
import Story from '../components/Story.jsx';
import work from '../assets/linkedIn.png';
import code from '../assets/gitHub.png'
import volunteer from '../assets/CFG.jpg';
import panel from '../assets/GRWebDevPanel.jpg';
import momPanel from '../assets/MomTechPanel.png';
import itc from '../assets/SeptemberITC.jpg';
import styles from '../styling/styles.css';


function App(){
    const [hide,setHide]=useState(false);
    return( <div>
        <div className='Home'>
        <Header/>
        <ExtLink src={work} newWindow='https://www.linkedin.com/in/karina-lopez11/' />
        <ExtLink src={code} newWindow='https://github.com/KariLopez'/ >
        </div>
        <div className='ImageReel'>
            <Story src={itc} caption='Teaching an Intro to Coding Class hosted by Grand Circus'/>
            <Story src={volunteer} caption='Volunteering at Weekend for Good with Citizen Labs Team'/>
            <Story src={panel} caption=''/>
            <Story src={momPanel} caption=''/>
            </div>
            <div className='quoteBlock'><div className='apiQuote'></div></div>
        <div className="NavBar">
            <NavButton onclick={()=>setHide(!hide)} label="Download Resume" Navigation=""/>    
</div>
<ReturnHome/>
        </div>)
       
    
}
export default App;

