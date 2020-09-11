import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="App-header">
			<Link to="/">home</Link>
			<Link to="/post">+</Link>
		</header>
	)
}
export default Header;
