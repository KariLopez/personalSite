import React from 'react';

function ExtLink(props){
    return(
        <div className='outsideLink'>
            <a href={props.newWindow}>
            <img src={props.src}/>
            </a>
            </div>
    )
}
export default ExtLink;