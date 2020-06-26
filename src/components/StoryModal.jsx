import React from 'react';

function StoryModal(props){
    return(
        <div className='modal'>
        <img src={props.src}/>
        <p>{props.caption}</p>
        </div>
    )
}
export default StoryModal;