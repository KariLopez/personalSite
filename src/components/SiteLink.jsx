import React from 'react';

function SiteLink(props){
    return(
<div className='outsideLink'>
            <a  href={props.newWindow} target="_blank">
            <img className='webImg' src={props.src}/>
            </a>
            </div>

    )
}
export default SiteLink;