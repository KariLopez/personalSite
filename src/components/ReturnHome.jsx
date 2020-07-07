import React from 'react';

function ReturnHome(){
    return(
    <a href="#top" className="Home"><span className="material-icons">
arrow_circle_up
</span></a>)
}
function NavToTop(){
    document.documentElement.scrollTop=0;
    //document.body.scrollTop=0;
}
export default ReturnHome;