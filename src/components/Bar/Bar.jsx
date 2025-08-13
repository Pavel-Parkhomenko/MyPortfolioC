import React from 'react'
import './style.scss'

export function Bar({ wBar }) {
  return(
    <div className="box-bar">

      <div className="text">
        <p>Aaaa</p>
        <p>{wBar}%</p>
      </div>

      <div className="bar-long">
        <div className="bar-short" style={{width: `${wBar}%`}}></div>
      </div>

    </div>
  )
} 