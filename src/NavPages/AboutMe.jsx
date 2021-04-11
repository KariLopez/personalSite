
import React from 'react';
import Footer from '../components/Footer.jsx';
import Menu from '../components/Menu.jsx';
import Story from '../components/Story.jsx';
import headshot from '../assets/headshot.jpeg';

function AboutMe(){
    return(
        <div className='aboutMe'>
            <Menu/>
            <div className='aboutMe_content'>
            <p id="aboutMe_desc">
                A summary about who I am professionally, my interests, aspirations, and career path
            </p> 
            <img className='aboutMe_headshot' src={headshot} title='headshot'/>
           { /*<div className='ImageReel'>
                    <Story src='https://i.imgur.com/fC213Az.jpg' caption='Teaching an Intro to Coding Class hosted by Grand Circus' icon='school'/>
                    <Story src='https://i.imgur.com/4FWTH43.jpg' caption='Volunteering at Weekend for Good with Citizen Labs Team' icon='self_improvement'/>
                    <Story src='https://i.imgur.com/UOBt49t.jpg' caption='Honored to have been part of this great panel with other women working in tech from West Michigan!' icon='emoji_objects'/>
                    <Story src='https://i.imgur.com/CrzJw60.png' caption='I was so excited to be a part of this panel in collaboration with The Hive, such a cool co-working space concept' icon='whatshot'/>
                </div>*/}
            </div>
            <Footer/>
        </div>
    )
}
export default AboutMe; 