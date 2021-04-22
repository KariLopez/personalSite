import React from 'react';
import style from '../styling/portrait.css';

function Portrait(props){
    return(
        <div className="portrait">
            <p>{props.desc}</p>
        </div>
    )
}
export default Portrait;