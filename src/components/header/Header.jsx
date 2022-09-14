import React from 'react'
import { useState } from 'react'

const Header = () => {
	const [activeNav, setActiveNav] = useState('#hero');
	return (

	<header>
		<div className="container">
			<div className="logo-area">
				<div className="logo">
					<a href="#me">Faizan</a>
				</div>
			</div>
			<div className="greeting-area">
				<div className="greeting">Hi there</div>
			</div>
			<div className="nav">
				<a href="#hero" className={activeNav === '#hero' ? 'active' : ''} onClick={() => setActiveNav('#hero')}>Me</a>
				<a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
				<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
				<a href="#journey" onClick={() => setActiveNav('#journey')} className={activeNav === '#journey' ? 'active' : ''}>Journey</a>
				<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
			</div>
		</div>
	</header>

	)
}

export default Header