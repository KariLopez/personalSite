import React from 'react';
function Download (props){
    return(
        <div className="DownloadButton">
        <a href={props.Navigation} download>{props.label}</a>
        </div>
    );  

}
/*
function Navigation(url){
    window.open(url);
}*/


export default Download;