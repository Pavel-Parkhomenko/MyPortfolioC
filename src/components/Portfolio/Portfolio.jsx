import React from 'react'
import './style.scss'
import { HLine } from '../HLine/HLine.jsx'
import GIT_ICON from '../../img/icon-git.svg'

import activationLinux from '../../img/works/activation-linux.png'
import crypto from '../../img/works/crypto.png'
import desctopIconGame from '../../img/works/desktop_icon_game.png'
import starWars from '../../img/works/star-wars.png'
import transcendentalEquation from '../../img/works/transcendental_equation.png'
import treeApp from '../../img/works/tree_app.png'

const data = [
	{
		id: 1,
		img: activationLinux,
		descr: "Сообщение о том, что вам необходимо активировать Linux.",
		stack: ["C++", "QT", "Linux"],
		summary: 'Activation Linux',
		gh: "https://github.com/Pavel-Parkhomenko/ActivationLinuxTitle",
	},
	{
		id: 2,
		img: crypto,
		descr: "Веб-приложение для отслеживания цен и динамики криптовалют.",
		stack: ["JavaScript", "React", "API", "WEB"],
		summary: 'Crypto Tracker',
		gh: "https://github.com/Pavel-Parkhomenko/crypto-tracker",
	},
	{
		id: 3,
		img: desctopIconGame,
		descr: "Мини-игра, в которой вам нужно будет вернуть значки на рабочем столе в их первоначальное положение.",
		stack: ["C++", "QT", "Linux"],
		summary: 'Desktop Icon Game',
		gh: "https://github.com/Pavel-Parkhomenko/DekstopIconGame",
	},
	{
		id: 5,
		img: starWars,
		descr: "Данное приложение позволяет решать трансцендентные уравнения на заданном диапазоне данных.",
		stack: ["C++", "C#", "Chart", "Assembler", "DLL"],
		summary: 'Transcendental Equation',
		gh: "https://github.com/Pavel-Parkhomenko/Transcendental-Equations",
	},
	{
		id: 6,
		img: transcendentalEquation,
		descr: "В этом приложении вы можете создать, отобразить и выполнить некоторые операции над двоичном дереве.",
		stack: ["C++", "QT", "Linux/Windows"],
		summary: 'Tree App',
		gh: "https://github.com/Pavel-Parkhomenko/GIT-WORK/tree/main/treeapp",
	},
	{
		id: 7,
		img: treeApp,
		descr: "Вы печаете текст, а он очень сильно хочет быть похожим на титры Star Wars.",
		stack: ["C++", "QT", "Linux/Windows"],
		summary: 'Star Wars',
		gh: "https://github.com/Pavel-Parkhomenko/StarWarsText",
	}
]

function Card({ img, summary, stack, descr, gh }) {
	return (
		<div className="card">
			<div className='box-img'>
				<img src={img} alt={summary}/>
			</div>
			<div className='text'>
				<div className='text-into'>
					<div>
						<p>{summary}</p>
						<div className='stack'>
							{stack.map(item => <span>{item}</span>)}
						</div>
					</div>
					<a className='icon-gh' href={gh} aria-label="github" title="link to github">
  						<img src={GIT_ICON} alt="GIT" />
					</a>
				</div>
				<p>{descr}</p>
			</div>
		</div>
	)
}

export function Portfolio() {
  return(
		<div id="portfolio" className='box-portfolio'>
			<div className='box-text'>
				<h2>Портфолио</h2>
				<p>Данные проекты созданы и даже работают!</p>
				<HLine />
			</div>
			<div className='box-card'>
				{data.map((item, ind) => (
					<Card 
						id={item.id}
						img={item.img}
						descr={item.descr}
						stack={item.stack}
						summary={item.summary}
						gh={item.gh}
					/>
				))}
			</div>
		</div>
	)
}