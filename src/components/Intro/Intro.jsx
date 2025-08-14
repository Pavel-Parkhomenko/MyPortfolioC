import React from 'react'
import { ReactTyped } from 'react-typed'
import { Button } from '../Button/Button.jsx'
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
					<h1 className="h1">Hello, I am Pavel</h1>
					<div className='type'>
						<ReactTyped
							strings={[
								"Back End Developer",
								"Software Engineer",
								"Front End Developer",
							]}
							typeSpeed={80}
							backDelay={1100}
							backSpeed={30}
							loop
							/>
					</div>
					<Button text={'My CV'}/>
				</div>
			</div>
		</div>
	)
}