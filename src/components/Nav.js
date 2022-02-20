import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className = "Nav-Main">
        <h1 className = "Nav-Header">Where's Waldo?</h1>
        <ul className = "Nav-Button-List">
          <Link className = "Nav-Button" to = "/Home">
          <li className = "Nav-Button-List-Item">Home</li>
          </Link>
          <Link className = "Nav-Button Nav-Leaderboard-Button"to = "/Leaderboard">
          <li className = "Nav-Button-List-Item">Leaderboard</li>
          </Link>
        </ul>
    </div>
  )
}
