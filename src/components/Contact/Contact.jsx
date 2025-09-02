import React, { useState, useRef } from "react"
import './style.scss'
import { Button } from '../Button/Button.jsx'
import { HLine } from "../HLine/HLine.jsx"

import LINKEDIN from '../../img/linkedin.svg'
import TG from '../../img/telegram.svg'
import GIT from '../../img/github.svg'

export function Contact() {
  
  const [mailLink, setMailLink] = useState('')
  const [form, setForm] = useState({})
  const ref = useRef()

  function handleSubject(event) {
    setForm({ ...form, subject: event.target.value || '' })
  }

  function handleBody(event) {
    setForm({ ...form, body: event.target.value || '' })
  }

  function handleFrom(event) {
    setForm({ ...form, from: event.target.value || '' })
  }

  const handleClick = (event) => {
    const body = `${form.body || "Как дела?"}\n\n\nСообщение отправил(а): ${form.from}`
    setMailLink(`
      mailto:pawelparhomenko@gmail.com?subject=${encodeURIComponent(form.subject) || 'Привет, Павел!'}&body=${encodeURIComponent(body)}
    `)
  }

  return (
		<section id="contact" className="box-contact">
      <div className='left-panel'>
        <div>
          <h2>Написать</h2>
          <HLine />
        </div>
        <div className="form">
          <input placeholder="Ваше имя" onChange={handleFrom} />
          <input placeholder="Тема" onChange={handleSubject} />
          <textarea placeholder="Сообщение" onChange={handleBody} />
          <a ref={ref} href={mailLink} onClick={(e) => e.preventDefault()} style={{cursor: 'default'}}>
            <Button text={'Отправить'} handleClick={(event) => handleClick(event)} />
          </a>
        </div>
      </div>
      <div className='right-panel'>
        <h2>Контакт</h2>
        <HLine />
        <p>Хотите обсудить идею, задать вопрос или просто поздороваться? Не стесняйтесь — я всегда рад новым сообщениям. Укажите, от кого письмо, и нажмите «отправить». Всё просто.</p>
        <div>
          <a href="https://www.linkedin.com/in/pavel-parkhomenko-bb9810232/" aria-label="linkedin" title="link to linkedin">
            <img src={LINKEDIN} alt='linkedin'/>
					</a>
          <a href="https://t.me/author6663" aria-label="telegram" title="link to tg">
            <img src={TG} alt='telegram'/>  
					</a>
          <a href="https://github.com/Pavel-Parkhomenko" aria-label="github" title="link to github">
            <img src={GIT} alt='github'/>
					</a>
        </div>
      </div>
    </section>
	)
}