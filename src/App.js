import React, { useState, useEffect } from 'react'
import { About } from './components/About/About.jsx'
import { Intro } from './components/Intro/Intro.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'
import './style.scss'
import { Header } from './components/Header/Header.jsx'

import vector1 from './img/frame2.svg'
import vector2 from './img/vector2.svg'

function App() {

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll2 = () => {
      setOffsetY(window.scrollY * 0.1);
    };

    window.addEventListener('scroll', onScroll2);
    return () => window.removeEventListener('scroll', onScroll2);
  }, []);

  return (
    <div>
      <Header />
      <Intro /> 
      <div className='container-info'>
        <img className='vector__ v1' src={vector1} alt={""} style={{ transform: `translateY(${offsetY}px)` }}/>
        {/* <img className='vector__ v2' src={vector2} alt={""} style={{ transform: `translateY(${offsetY}px)` }}/> */}
        <div className='wrapper'>
          <About />
        </div>
        <div className='wrapper'>
          <Portfolio />
        </div>
        <div className='container-contact'>
          <div className='container-contact-into' />
          <div className='wrapper'><Contact /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
