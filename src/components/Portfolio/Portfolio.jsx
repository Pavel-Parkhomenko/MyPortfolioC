import React from 'react'
import './style.scss'
import IMG from '../../img.jpg'

function Card({ img, summary, stack, descr }) {
	return (
		<div className="card">
			<img src={IMG} alt={summary}/>
			<div className='text'>
				<p>{summary}</p>
				<div className='stack'>
					{stack.map(item => <span>{item}</span>)}
				</div>
				<p>{descr}</p>
			</div>
		</div>
	)
}

export function Portfolio() {
  return(
		<div className='box-portfolio'>
			<div className='box-text'>
				<h2>Portfolio</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<div className='blue-line'/>
			</div>
			<div className='box-card'>
				<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
				<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
				<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
				<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
								<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
								<Card 
					img={"img"}
					descr={"aa aaa aaa aaa aaa"}
					stack={["C++", "QT"]}
					summary={"Bbb b"}
				/>
			</div>
		</div>
	)
}