import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className = "Nav-Main">
        <h1>Where's Waldo?</h1>
        <ul className = "Nav-Button-List">
          <Link className = "Nav-Button"to = "/Leaderboard">
          <li>Leaderboard</li>
          </Link>
        </ul>
    </div>
  )
}
