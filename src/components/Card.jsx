import React, {useState, useEffect} from 'react'
import "../styles/App.css"

export default function Card({id, src, selected, onClick}) {
    
  return (
    <>
        <img className="card" id={id} src={src} data-selected={selected} onClick={onClick}/>
    </>
  )
}
