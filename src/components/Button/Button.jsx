import React from 'react'
import './style.scss'

export function Button({ text, handleClick }) {
  return <button className='btn' onClick={handleClick}>{text}</button>
}