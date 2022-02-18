import React from 'react'
import { useState, useEffect } from 'react';

export default function Timer() {
const [time,setTime] = useState(0);
const [running, setRunning] = useState(true);

useEffect(()=>{
  let interval; 
  if (running){
    interval = setInterval(()=>{
      setTime((prevTime)=>prevTime+10)
    },10)
  } else if (!running){
    clearInterval(interval);
  }
  return () => clearInterval(interval);
},[running])

  return (
    <div className = "Game-Timer">
      <div className = "Game-Timer-Numbers">
        <span>{("0"+Math.floor(time/60000%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor(time/1000%60)).slice(-2)}:</span>
        <span>{("0"+((time/10)%100)).slice(-2)}</span>
        <span><button onClick = {() => setRunning(false)} className = "Stop-Time">Test</button></span>
      </div>
    </div>
  )
}
