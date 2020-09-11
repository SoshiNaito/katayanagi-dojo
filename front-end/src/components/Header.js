import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Header() {
	return (
		<header className="header">
			{/* <Link className="header__home" to="/">home</Link>
			<Link className="header__post" to="/post">+</Link> */}
			<Tabs aria-label="simple tabs example">
				<Link to="/"><Tab label="Home" to="/" /></Link>
				<Link to="/mypage"><Tab label="My Page" /></Link>
				<Link to="/post"><Tab label="Post" /></Link>
			</Tabs>
		</header>
	)
}
export default Header;
