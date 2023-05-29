import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingScreen.css';

const LoadingScreen = () => {
	return (
		<div className="loading">
			<h1 className="blue" style={{ fontSize: '5rem' }}>
				<b>Blink</b>Quiz
			</h1>
			<Loader color="#29455a" width={130} height={130} type="BallTriangle" />
		</div>
	);
};
export default LoadingScreen;
