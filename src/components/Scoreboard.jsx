import React from 'react'
import "../styles/App.css"

export default function Scoreboard({score, highScore}) {
  return (
    <>
        <p>Current score: {score}</p>
        <p>High score: {highScore}</p>
    </>
  )
}
