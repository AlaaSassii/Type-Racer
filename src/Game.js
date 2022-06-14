import React , {useState , useEffect} from 'react'

const Game = () => {
    const [text , setText ] = useState('asdas') ; 
    const [value ,setValue] = useState('') ;
    const [condition ,setCondition] = useState(false) 

    const TextArray = () => {
        const array = [] ; 
        for(let i=0 ; i <text.length ; i++){
            array.push(text[i])
        }
        return array ; 
    }
    function style(index,length,value){
        if (index + 1 <= length){
          if (value === text[index]){ 
            console.log('true')
            return 'true' }
          else {
            console.log('false')
            // setErrors(error + 1)
            return 'false'}
        }
        else {
        return ''}
      }
      useEffect(()=>{
        if(TextArray().length == value.length) {
          let Cond = false 
          for(let i = 0 ; i < value.length ; i++ ){
            if (value[i] !== text[i] ) {
              Cond = false
              break
            }
            Cond = true
          }
          // console.log(Cond)
          setCondition(Cond)
        }
        },[value])
  return (
    <div>
        <h1>{TextArray().map((char,ind) => 
        <span key={ind} className={style(ind,value.length,value[ind])}>
            {char}
        </span> )}</h1>
        <input onChange={e => {if(!condition){!(e.target.value.length === text.length) &&  setValue(e.target.value)}
    else {e.target.blur()}
            
    }} /> 
    </div>
  )
}

export default Game