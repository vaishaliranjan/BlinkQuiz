'use strict';
const express = require('express');
const app = express();
const path = require('path');
const userRoute = require('./Routes/Users');
const quizzesRoute = require('./Routes/Quizzes');

// Hosting Frontend

// Middleware
app.use(express.json());
app.use('/API/users', userRoute);
app.use('/API/quizzes', quizzesRoute);

// Listening to APIs
app.listen(process.env.PORT || 8005, () =>
	console.log('Listening on Port 8005')
);
