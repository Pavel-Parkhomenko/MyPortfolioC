import React from 'react'
import { ReactTyped } from 'react-typed'
import './style.scss'
import "./stars.scss"

export function Intro() {
  return (
		<div className="box-intro">
			<div id="stars" />
			<div id="stars2" />
			<div id="stars3" />

			<div className="box-text">
				<div>
					<p className="p1">Aaaaa</p>
					<p className="p2">Bbbbbb</p>
					<p>button</p>
				</div>
			</div>
		</div>
	)
}