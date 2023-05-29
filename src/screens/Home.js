import React, { useState, useEffect } from 'react';
import './Home.css';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from '../firebase/firebase';
import LoadingScreen from './LoadingScreen';
import { useLocation } from 'react-router-dom';
import classes from './Homepage.module.css';

const Home = ({ setUser }) => {
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [checked, setChecked] = useState(false);
	function handleChange(e) {
		setChecked(e.target.checked);
	}

	//firebase google and email authentification
	var uiConfig = {
		signInflow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	};

	useEffect(() => {
		let isMounted = true;
		let isAdmin = false;
		const getAuthdetails = async () => {
			try {
				const response = await fetch(
					`/API/users/getUserRole/${firebase.auth().currentUser.uid}`
				);
				const data = await response.json();
				isAdmin = await data.isAdmin;
				return isAdmin;
			} catch (error) {
				console.log('Role fetching failed: ', error);
			}
		};

		firebase.auth().onAuthStateChanged((user) => {
			if (user && isMounted) {
				if (user.uid)
					if (
						firebase.auth().currentUser.metadata.lastSignInTime !==
						firebase.auth().currentUser.metadata.creationTime
					) {
						getAuthdetails();
					}
				setTimeout(() => {
					setUser({
						uid: firebase.auth().currentUser.uid,
						name: firebase.auth().currentUser.displayName,
						email: firebase.auth().currentUser.email,
						isAdmin: checked ? checked : isAdmin,
					});
				}, 1000);

				console.log('User Logged In');
			} else {
				console.log('User Signed Out');
				setUser({});
			}
			console.log('auth change');
			if (isMounted) setLoading(false);
		});
		return () => (isMounted = false);
	}, [setUser, checked]);
	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<div className={classes.bg}>
					<div className={classes.header}>
						<h1 className={classes.title}>BlinkQuiz</h1>
					</div>
					<div className={classes.flex}>
						<div className={classes.text}>
							<h1 className={classes.heading}>BlinkQuiz</h1>
							<div className={classes.heading3}>
								Now create and join quiz at a single platform.You can create
								trivia quizzes, personality test, polls and survays. Share out
								your quiz with your students with a unique code.
							</div>
						</div>

						<div className={classes.card}>
							<label className="login-label">
								<h1 className={classes.heading4}>BQ</h1>
							</label>
							{location.pathname === '/admin' ? (
								<div>
									<input
										type="checkbox"
										id="admin"
										name="admin"
										checked={checked}
										onChange={handleChange}
									/>
									<label className="login-text" htmlFor="admin">
										Sign in as Teacher
									</label>
								</div>
							) : (
								''
							)}
							<StyledFirebaseAuth
								borderRadius="40px"
								uiConfig={uiConfig}
								firebaseAuth={firebase.auth()}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
