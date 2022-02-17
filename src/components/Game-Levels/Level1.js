import React from 'react'
import {useState, useEffect} from 'react'
import Waldo from '../../media/levels/waldo.jpg';
export default function Level1() {

let selectMenu;

   
  
   function selectLocation(){
    selectMenu = document.querySelector('.Game-Board-Menu');
    let x = parseInt(selectMenu.style.left);
    let y = parseInt(selectMenu.style.top);
    console.log(x);
    console.log(y);
    if ((x === 17 || x === 18 || x ===19) && (y === 22 || y === 23 || y === 24)){
      console.log('correct')
    } else {
      console.log('false')
    }
    selectMenu.classList.add('Hidden')
  }
  function getCoords (e){
    selectMenu = document.querySelector('.Game-Board-Menu');
    let x = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100;
    let y = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100;

    let xCoord = Math.round(x);
    let yCoord = Math.round(y);
    let coords = {
      x:xCoord,
      y:yCoord
    };
    console.log(coords);
    selectMenu.classList.remove('Hidden');
    selectMenu.style.left = `${xCoord}%`;
    selectMenu.style.top = `${yCoord}%`;
  }
  return (
    <div className = "Game-Board-Wrapper">
      <div>
        <p>{}</p>
        <div>
          <div className = "Game-Board-Relative">
            <img className = "Game-Board-Image" src = {Waldo} onClick = {getCoords}></img>
            <div className = "Game-Board-Menu Hidden">
              <button className = "Game-Selection-Button" onClick = {selectLocation}>Here!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
