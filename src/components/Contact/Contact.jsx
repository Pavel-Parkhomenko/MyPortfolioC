import React from "react"
import './style.scss'
import { Button } from '../Button/Button.jsx'
import { HLine } from "../HLine/HLine.jsx"

import LINKEDIN from '../../img/linkedin.svg'
import TG from '../../img/telegram.svg'
import GIT from '../../img/github.svg'

export function Contact() {
  return (
		<section className="box-contact">
      <div className='left-panel'>
        <div>
          <h2>Send A Message</h2>
          <HLine />
        </div>
        <div className="form">
          <input placeholder="Your Email"/>
          <input placeholder="Subject"/>
          <textarea placeholder="Message"/>
          <Button text={'Send Message'} />
        </div>
      </div>
      <div className='right-panel'>
        <h2>Get in Touch</h2>
        <HLine />
        <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
        Simply fill the from and send me an email.</p>
        <div>
          <a href="/" aria-label="linkedin" title="link to linkedin">
            <img src={LINKEDIN} alt='linkedin'/>
					</a>
          <a href="/" aria-label="telegram" title="link to tg">
            <img src={TG} alt='telegram'/>  
					</a>
          <a href="/" aria-label="github" title="link to github">
            <img src={GIT} alt='github'/>
					</a>
        </div>
      </div>
    </section>
	)
}