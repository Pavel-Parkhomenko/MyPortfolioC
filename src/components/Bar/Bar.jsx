import React from 'react'
import './style.scss'

export function Bar({ text, wBar }) {
  return(
    <div className="box-bar">

      <div className="text-bar">
        <span>{text}</span>
        <span>{wBar}%</span>
      </div>

      <div className="bar-long">
        <div className="bar-short" style={{width: `${wBar}%`}}></div>
      </div>

    </div>
  )
} 