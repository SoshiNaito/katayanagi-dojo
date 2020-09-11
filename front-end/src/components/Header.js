import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="header">
			<Link className="header__home" to="/">home</Link>
			<Link className="header__post" to="/post">+</Link>
		</header>
	)
}
export default Header;
