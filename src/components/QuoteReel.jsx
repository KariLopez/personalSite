import React,{useState, useEffect} from 'react';
function QuoteReel(){
    const [data, setData] = useState({quote:[]});

    useEffect(()=>{
            fetch('https://type.fit/api/quotes').then(response=>response.json()).then(result=>{
            let results= result.length;
            let quoteInt = getRandomInt(results);
            setData(result[quoteInt]);
            })
    },[]);
    
return(
            <div className='quoteBlock'><div className='apiQuote'><p className='quote'>{data.text}</p><p className='author'>{data.author}</p></div></div>

)
}
function getRandomInt(max){
    let rand = Math.random();

    return Math.floor(rand* max);
}
export default QuoteReel;
