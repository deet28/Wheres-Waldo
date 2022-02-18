import React from 'react'
import Timer from '../Timer';
import Waldo2 from '../../media/levels/waldo3.jpg';


export default function Level3() {
  
  let selectMenu;

  function selectLocation(){
    let stopTime = document.querySelector('.Stop-Time');
    selectMenu = document.querySelector('.Game-Board-Menu');
    let x = parseInt(selectMenu.style.left);
    let y = parseInt(selectMenu.style.top);
    console.log(x);
    console.log(y);
    if ((x >83 && x < 90) && (y > 10 && y < 20)){
      stopTime.click();
      selectMenu.classList.add('Hidden')
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
        <p className = "Game-Board-Time-Div">Find Waldo! <Timer /></p>
        <div>
          <div className = "Game-Board-Relative">
            <img className = "Game-Board-Image" src = {Waldo2} onClick = {getCoords}></img>
            <div className = "Game-Board-Menu Hidden">
              <button className = "Game-Selection-Button" onClick = {selectLocation}>Here!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}