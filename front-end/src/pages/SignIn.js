import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

import SignInScreen from '../components/SignIn'

function SignIn() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			setLoading(false)
			setUser(user)
			if (user) {
				sessionStorage.setItem('uid', user.uid)
			}
		})
	})

	const logout = () => {
		firebase.auth().signOut();
		sessionStorage.removeItem('uid')
	}

	if (loading) return <div>loading</div>;
	return (
		<div className="Home">
			<div>
				<br />
				{user ?
					(<button onClick={logout}>Logout</button>) :
					(<SignInScreen />)
				}
			</div>
			<a href="/home">home</a>
		</div>
	);
}

export default SignIn;
