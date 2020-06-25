import React, {useState} from 'react';
import ResumeButton from '../components/ResumeButton.jsx';

function App(){
    const [hide,setHide]=useState(false);
    return( <div>
    <ResumeButton onclick={()=>setHide(!hide)}/>
        </div>)
       
    
}
export default App;

