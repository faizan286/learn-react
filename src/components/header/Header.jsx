import React from 'react'

const Header = () => {
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
				<a href="#hero" className='active'>Me</a>
				<a href="#projects" className='active'>Projects</a>
				<a href="#about">About</a>
				<a href="#journey">Journey</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	</header>

	)
}

export default Header