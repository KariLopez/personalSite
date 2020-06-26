import React from 'react';

function ExtLink(props){
    return(

            <a className='outsideLink' href={props.newWindow}>
            <img src={props.src}/>
            </a>

    )
}
export default ExtLink;