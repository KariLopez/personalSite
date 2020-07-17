import React,{useState, useEffect} from 'react';

function QuoteReel(){
    const [data, setData] = useState({quote:[]});
    
    
    useEffect(()=>{
        const fetchData = fetch('').then(response=>response.json()).then(result=>{
        setData=result.value[0];
    });
    })
    
return(
            <div className='quoteBlock'><div className='apiQuote'><p className='quote'>{data.quote}</p><p className='author'>{data.quote}</p></div></div>

)
}
export default QuoteReel;
