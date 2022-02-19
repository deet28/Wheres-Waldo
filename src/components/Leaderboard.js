import React from 'react'
import { useState,useEffect } from 'react';
import { getFirebaseConfig } from '../firebase';
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

export default function Leaderboard() {
  const firebaseAppConfig = getFirebaseConfig();
  const app = initializeApp(firebaseAppConfig);
  const db = getFirestore(app);

  const [title,setTitle] = useState([])
  const [level, setLevel] = useState([]);

  let array = [];
  useEffect(()=>{
    const getData = async(input) => {
      const querySnapshot = await getDocs(collection(db,input));
      querySnapshot.forEach((doc)=>{
        let test = (doc.id, "=>",doc.data())
        let result = {
          name:test.name,
          time:test.time
        }
        array.push(result)
      })
      setLevel(array);
      setTitle('Level1');
    }
      getData('Level1');
  },[])

  const handleClick = async (e) => {
    let title = e.target.textContent;
    array = [];
    const querySnapshot = await getDocs(collection(db,title));
    querySnapshot.forEach((doc)=>{
      let test = (doc.id, "=>", doc.data())
      let result = {
        name:test.name,
        time:test.time
      }
      array.push(result);
    })
    setLevel(array);
    setTitle(title);
  }


return (
    <div className = "Leaderboard-Main">
      <div className = "Leaderboard-Title">
        <h1>Leader Board</h1>
        <div className = "Leaderboard-Levels">
          <button className = "test" onClick = {handleClick}>Level1</button>
          <button className = "test" onClick = {handleClick}>Level2</button>
        </div>
        <h2>{title}</h2>
        <div className = "Leaderboard-List">
        {level.map((index => (
        <div className = "Leaderboard-Times">
          <p className = "Leaderboard-Name">{index.name}</p>
          <p className = "Leaderboard-Time">{index.time}</p>
        </div>
        )))}
        </div>
      </div>
  </div>
  )
}
