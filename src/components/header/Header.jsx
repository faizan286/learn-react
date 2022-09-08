import React from 'react'

const Header = () => {
	return (

	<header class="text-center">
		<div class="container">
			<div class="row">
				<div class="col-3">
					<div class="logo-area">
						<div class="logo">Faizan</div>
					</div>
				</div>
				<div class="col-6">
					<div class="greeting-area">
						<div class="greeting">Hi there</div>
					</div>
				</div>
				<div class="col-3">
					<ul class="navigation-links">
						<li class="navigation-item">
							<a href="#" class="nav-links">work</a>
							<a href="#" class="nav-links">about</a>
							<a href="#" class="nav-links">contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	)
}

export default Header