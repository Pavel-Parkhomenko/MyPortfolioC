import React from 'react'
import './style.scss'
import IMG from '../../img.jpg'
import { HLine } from '../HLine/HLine.jsx'
import GIT_ICON from '../../img/icon-git.svg'

const data = [
	{
		id: 1,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	},
	{
		id: 2,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	},
	{
		id: 3,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	},
	{
		id: 4,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	},
	{
		id: 5,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	},
	{
		id: 6,
		img: 'img',
		descr: "aaa a aaaaaaaaaaaaaa aaaaa aaa aa a a aa a aaaaaaa a aa a a a aa a a a a a ",
		stack: ["C++", "QT"],
		summary: 'Bbbb bbbb b'
	}
]

function Card({ img, summary, stack, descr }) {
	return (
		<div className="card">
			<img src={IMG} alt={summary}/>
			<div className='text'>
				<div className='text-into'>
					<div>
						<p>{summary}</p>
						<div className='stack'>
							{stack.map(item => <span>{item}</span>)}
						</div>
					</div>
					<a className='icon-gh' href="/" aria-label="github" title="link to github">
  						<img src={GIT_ICON} alt="" />
					</a>
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
				<HLine />
			</div>
			<div className='box-card'>
				{data.map(item => (
					<Card 
						img={item.img}
						descr={item.descr}
						stack={item.stack}
						summary={item.summary}
					/>
				))}
			</div>
		</div>
	)
}