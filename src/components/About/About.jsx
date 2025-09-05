import React from "react"
import './style.scss'
import { HLine } from "../HLine/HLine"
import { Bar } from '../Bar/Bar'

const data = [
	{
		text: 'C++',
		level: '90'
	},
	{
		text: 'QT',
		level: '80'
	},
	{
		text: 'JavaScript',
		level: '90'
	},
	{
		text: 'MySQL',
		level: '70'
	},
	{
		text: 'OpenGL',
		level: '75'
	},
	{
		text: 'QML/Qt Quick',
		level: '72'
	}
]

export function About() {
  return(
		<div className='box-about' id='about'>
			<div className='bars'>
			<div className='block-for-adaptive'>
				<h2>About Me</h2>
					<HLine />
				</div>
				{data.map(item => (
					<Bar text={item.text} wBar={item.level}/>
				))}
			</div>

			<div className="text">
				<div>
					<h2>Обо мне</h2>
					<HLine />
				</div>
				<p>
					<span className='span-block'>Специализация:</span> Системный разработчик с отличным знанием C++ и Qt.
					<span className='span-block'>Опыт:</span> Работа с памятью, файловыми дескрипторами, виртуальной памятью, контекстом процессора.

					<p>
						<span className='span-block'>Навыки:</span>
						<ul>
							<li>Отладка и оптимизация алгоритмов</li>
							<li>Работа с бинарной арифметикой</li>
							<li>Разработка кросс-платформенных GUI-приложений</li>
						</ul>
					</p>

					<span className='span-block'>Документация:</span> Создание технических справочников и FAQ по C++, JavaScript и системному программированию.
					<span className='span-block'>Языки:</span> Русский, английский (технический уровень)
				</p>
			</div>
		</div>
	)
}