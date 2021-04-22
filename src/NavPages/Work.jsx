
import React from 'react';
import Footer from '../components/Footer.jsx';
import Menu from '../components/Menu.jsx';
import styles from '../styling/styles.css';
import Portrait from '../components/Portrait.jsx';
import workStyle from '../styling/work.css';

function Work(){
    return(
        <div className='workPage'>
            <Menu/>
            <div className='workContent'>
                <Portrait desc='Google Certification' />
                <Portrait desc='Example 2' />
                <Portrait desc='Example 3'  />
                <Portrait desc='Example 4'  />
            </div>
            <Footer/>
        </div>
    )
}
export default Work; 