import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Timer from '../Timer';
import Waldo5 from '../../media/levels/waldo5.jpg';
import { getFirebaseConfig } from '../../firebase';
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc
} from "firebase/firestore"

export default function Level5() {
  
   //firebase stuff
   const firebaseAppConfig = getFirebaseConfig();
   const app = initializeApp(firebaseAppConfig);
   const db = getFirestore(app);
   //firebase stuff
 
   //clock for pop up modal
   const [clock,setClock] = useState(0);
   //clock for pop up modal
 
   let selectMenu;
 
   function selectLocation(){
     let submitModal = document.querySelector('.Game-Submit-Modal');
     let gameImage = document.querySelector('.Game-Board-Image');
     let stopTime = document.querySelector('.Stop-Time');
     selectMenu = document.querySelector('.Game-Board-Menu');
     
     let x = parseInt(selectMenu.style.left);
     let y = parseInt(selectMenu.style.top);
     
     if ((x >80 && x < 90) && (y > 20 && y < 30)){
       stopTime.click();
 
       let time = getTime();
       setClock(time);
 
       gameImage.classList.add('Hidden');
       selectMenu.classList.add('Hidden');
       submitModal.classList.remove('Hidden');
     } 
     selectMenu.classList.add('Hidden')
   }
 
   function getCoords (e){
     selectMenu = document.querySelector('.Game-Board-Menu');
     let x = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100;
     let y = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100;
 
     let xCoord = Math.round(x);
     let yCoord = Math.round(y);
     selectMenu.classList.remove('Hidden');
     selectMenu.style.left = `${xCoord}%`;
     selectMenu.style.top = `${yCoord}%`;
   }
 
   function getTime(){
       let minuteDiv = document.querySelector('.Timer-Minutes');
       let secondDiv = document.querySelector('.Timer-Seconds');
       let milisecondDiv = document.querySelector('.Timer-Miliseconds');
       let minutes = minuteDiv.textContent;
       let seconds = secondDiv.textContent;
       let miliseconds = milisecondDiv.textContent;
       let finalTime = `${minutes}${seconds}${miliseconds}`
       
       console.log(finalTime);
       return finalTime;
   }
 
   async function pushToFirebase(){
     
     let nameInput = document.querySelector('.Game-Submit-Name');
     let name = nameInput.value;
     let time = getTime();
     let id = uuidv4();
 try {
   const payload = {
     name:name,
     time:time,
     id:id
   }
   await setDoc(doc(db,"Level5",id),payload);
 } catch (error){
   console.log('Error adding to Level 2 Leaderboard',error);
 }
     
   }
   return (
     <div className = "Game-Board-Wrapper">
       <div>
         <p className = "Game-Board-Time-Div">Find Waldo! <Timer /></p>
         <div>
           <div className = "Game-Board-Relative">
             <img className = "Game-Board-Image" src = {Waldo5} onClick = {getCoords}></img>
             <div className = "Game-Board-Menu Hidden">
               <button className = "Game-Selection-Button" onClick = {selectLocation}>Here!</button>
             </div>
             <div className = "Game-Submit-Modal Hidden">
               <h2>You found him in {clock}</h2>
               <h3>Post your score to the leaderboard?</h3>
               <input className = "Game-Submit-Name"></input>
               <Link to = "/Home">
                 <button className = "Game-Submit-Button" onClick = {pushToFirebase}>Submit</button>
               </Link>
               </div>
           </div>
         </div>
       </div>
     </div>
   )
}