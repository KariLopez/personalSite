import React,{useState, useEffect} from 'react';
import {GenerateRandom} from './RandomNumberGen.js';

function QuoteReel(){
    const [data, setData] = useState({quote:[]});
    /*
    const fetchData = fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result=>{
       debugger;
        setData(result[0]);

    });*/
    useEffect(()=>{
            fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result=>{
           var randomQuoteIndex =  GenerateRandom(result);
            setData(result[randomQuoteIndex]);
            })
    });
    
return(
            <div className='quoteBlock'><div className='apiQuote'><p className='quote'>{data.text}</p><p className='author'>{data.author}</p></div></div>

)
}
export default QuoteReel;
