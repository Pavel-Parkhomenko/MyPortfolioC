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
    setActiveBurger(!activeBurger)
  }

  return(
		<div className={`box-header ${scrolled ? 'scrolled' : ''}`}>

			<div className="menu-panel">
        <span>&lt;Pavel Parkhomenko&gt; </span>

        {/* the menu is not be in mobile version */}
        <div className={`right ${!activeBurger ? 'active' : ''}`}>
          <Menu />
        </div>

        <div onClick={() => handleBurger()} className={`burger ${activeBurger ? 'active' : ''}`}><div/></div>

      </div>
		</div>
	)
}