import React from "react"
import './style.scss'
import { HLine } from "../HLine/HLine"
import { Bar } from '../Bar/Bar'

export function About() {
  return(
		<div className='box-about'>
			<div className='bars'>
				<Bar wBar={80}/>
				<Bar wBar={50}/>
				<Bar wBar={70}/>
				<Bar wBar={20}/>
				<Bar wBar={30}/>
				<Bar wBar={100}/>
			</div>

			<div className="text">
				<div>
					<h2>About Me</h2>
					<HLine />
				</div>
				<p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.</p>
			</div>
		</div>
	)
}