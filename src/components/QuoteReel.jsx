import React,{useState, useEffect} from 'react';

function QuoteReel(){
    const [data, setData] = useState({quote:[]});
    
    const fetchData = fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result=>{
       debugger;
        setData(result[0]);
        console.log(data);

    });
    /*
    useEffect(()=>{
        const fetchData = fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result=>{
        setData=result[0];
    });
    })*/
    
return(
            <div className='quoteBlock'><div className='apiQuote'><p className='quote'>{data.text}</p><p className='author'>{data.author}</p></div></div>

)
}
export default QuoteReel;
