import React, { useEffect, useState } from 'react';
import './App.css';
import {Texts} from './texts'
function App() {

  const [text, setText] = React.useState('')
  const [value,setValue] = React.useState('')
  const [error,setErrors] = useState(0) ; 
  useEffect(()=>{
    setValue('')
    const randomIndex = Math.floor(Math.random() * Texts.length);
    console.log('randomIndex',randomIndex)
    setText(Texts[randomIndex])

  },[])
  const [condition,setCondition] = useState(false)
  function newText(len){
    let char = []
    for(let i = 0 ; i < len ; i++ ){
      char.push(text[i])
    }
    return char 
  
  }
  function style(index,length,value){
    if (index + 1 <= length){
      if (value === text[index]){ 
        console.log('true')
        return 'true' }
      else {
        console.log('false')
        setErrors(error + 1)
        return 'false'}
    }
    else {
    console.log('')
    return ''}
  }
  useEffect(()=>{
  if(newText(text.length).length === value.length) {
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
    <div className="App">
     <h4>{
      newText(text.length).map((char,index)=> <span
      className={style(index,value.length,value[index])}
      key={index}>{char}</span>)
      }</h4>
     <input value={value} onChange={ e =>{if(!condition){!(e.target.value.length === text.length) &&  setValue(e.target.value)}
    else {e.target.blur()}
    }} />
    </div>
  );
}

export default App;
