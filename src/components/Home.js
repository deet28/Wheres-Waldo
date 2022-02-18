import React from 'react'
import Waldo from '../media/levels/waldo.jpg';
import Waldo2 from '../media/levels/waldo2.jpg';
import Waldo3 from '../media/levels/waldo3.jpg';
import Waldo4 from '../media/levels/waldo4.jpg';
import Waldo5 from '../media/levels/waldo5.jpg';
import Waldo6 from '../media/levels/waldo6.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
  <>
    <div className = "Home-Card-Div">
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level1">
          <img src = {Waldo} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 1</p>
        </Link>
      </div>
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level2">
          <img src = {Waldo2} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 2</p>
        </Link>
      </div>
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level3">
          <img src = {Waldo3} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 3</p>
        </Link>
      </div>
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level4">
          <img src = {Waldo4} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 4</p>
        </Link>
      </div>
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level5">
          <img src = {Waldo5} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 5</p>
        </Link>
      </div>
      <div className = "Home-Card">
        <Link className = "Home-Link" to  = "/Level6">
          <img src = {Waldo6} className = "Home-Level"></img>
          <p className = "Home-Level-Tag">Level 6</p>
        </Link>
      </div>
    </div>
    <div className = "Home-Footer-Div">
      <div className = "Home-Footer">
        <h1 className = "Home-Footer-Header">How did you do?</h1>
        <h2 className = "Home-Footer-Text">Check out the leader board.</h2>
        <Link className = "Home-Link" to = "/Leaderboard">
          <button className = "Home-Footer-Button">View Leaderboard</button>
        </Link>
        
      </div>
    </div>
  </>
  )
}
