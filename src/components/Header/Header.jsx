import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu/Menu'
import './style.scss'

export function Header() {

	const [scrolled, setScrolled] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false)

	useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleBurger() {
    console.log(activeBurger)
    setActiveBurger(!activeBurger)
  }

  return(
		<div className={`box-header ${scrolled ? 'scrolled' : ''}`}>


			<div className="menu-panel">

        <div className="left">
          <span>&lt;Pavel Parkhomenko&gt; </span>
        </div>

        <div onClick={() => handleBurger()} className={`burger ${activeBurger ? 'active' : ''}`}><div/></div>

        <div className='right'>
          <Menu />
        </div>
        
      </div>
		</div>
	)
}