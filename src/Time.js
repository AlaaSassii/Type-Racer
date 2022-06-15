import React,{useState,useEffect} from 'react'
import Car from './Car';

const Time = ({condition , textLength , valueLen}) => {
    console.log('condition',condition)
    const [WPM ,setWPM] = useState(0)
    const [baseTime,setBaseTime] = useState('') ; 
    useEffect(()=>{
            setBaseTime(+new Date())
    },[])
    const calculateTimeLeft = () => {
        
        const difference = +new Date() - baseTime  ;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            };
        }
    
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
    if(!condition){
        setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    }
    else {
        console.log(timeLeft)
         setWPM(textLength * 60  / (parseInt(timeLeft.seconds)*5 )   )
    }
  });
  return (
    
    <div className="App">
      <Car textLength={textLength} valueLen={valueLen}  />
        {condition && <p>{WPM}</p> }
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ?
    <p>
      <span>{timeLeft.minutes}</span>
      <span>:</span>
      <span>{timeLeft.seconds}</span>
    </p>
   : 
    <p>Time is up </p>
 
}
    </div>
    
  )
}

export default Time