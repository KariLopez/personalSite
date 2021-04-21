import React from 'react';
import SiteLink from '../components/SiteLink.jsx';
import work from '../assets/linkedIn.png';
import code from '../assets/gitHub.png';
import send from '../assets/send.png';

function Footer(){
    return(
        <div className='footer'>
            <SiteLink src={work} newWindow='https://www.linkedin.com/in/karina-lopez11/' />
            <SiteLink src={code} newWindow='https://github.com/KariLopez'/>
            <SiteLink src={send} newWindow='mailto:karinalopez91@gmail.com'/>
            
        </div>
    )
}
export default Footer;