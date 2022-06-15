import React, { useEffect, useState } from 'react';
import './App.css';
import {Texts} from './texts'
import Time from './Time';
function App() {
  
  const [condition,setCondition] = useState(false)
  const [text, setText] = useState('')
  const [value,setValue] = useState('')
  const [error,setErrors] = useState(0) ; 
  useEffect(()=>{
    setValue('')
    const randomIndex = Math.floor(Math.random() * Texts.length);
    console.log('randomIndex',randomIndex)
    setText(Texts[randomIndex])

  },[])
  function newText(len){
    let char = []
    for(let i = 0 ; i < len ; i++ ){
      char.push(text[i])
    }
    return char 
  
  }
  function style(index,value){
      let err = 0 
      if (value === text[index]){ 
    console.log('styleee')

        return ['true',err] }
      else {
        // setErrors(error + 1)
    console.log('styleee')
        
        return ['false',err]}
  }
  useEffect(()=>{
  if(newText(text.length).length === value.length ) {
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
    console.log('useEffect check value')
  }
  if(value.length +1 === text.length)console.log('trueeeeee')
  },[value])
  return (
    <div className="App">
      <Time condition={condition} textLength={text.length} valueLen={value.length} />
     <h4>{
      newText(text.length).map((char,index)=> <span
      className={ index < value.length ?style(index,value[index])[0] : ''}
      key={index}>{char}</span>)
      }</h4>
     <input value={value} onChange={ e =>{if(!condition){!(e.target.value.length  -1 === text.length) &&  setValue(e.target.value)}
    else {e.target.blur()}
    
    }} />
    
    </div>
  );
}

export default App;
