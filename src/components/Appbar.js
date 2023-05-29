import React from 'react';
import Sidebar from './Sidebar';
import './Appbar.css';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
//header of dashboard
const Appbar = ({ user, isAdmin }) => {
	return (
		<div className="appbar">
			<div className="slider">
				<Sidebar isAdmin={isAdmin} />
				<Link to="/" className="home">
					<b>Blink</b>Quiz
				</Link>
			</div>
			<div className="appbar-user">
				<Icon>
					<AccountCircle />
				</Icon>
				<p>{user.name}</p>
			</div>
		</div>
	);
};

export default Appbar;
