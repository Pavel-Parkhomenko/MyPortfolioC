import React, { useEffect, useState } from 'react'
import './style.scss'

export function Header() {

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return(
		<div className={`box-header ${scrolled ? 'scrolled' : ''}`}>
				sss
		</div>
	)
}