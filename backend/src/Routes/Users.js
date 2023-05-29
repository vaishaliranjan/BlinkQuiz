const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const Router = express.Router();
const DB = require('./DB');

// Create User in DB
Router.post('/create', (req, res) => {
	const { uid, name, email, isAdmin } = req.body;
	console.log(isAdmin);
	if (!uid) return res.status(500).json({ error: 'Incomplete Parameters' });

	DB.createUser(uid, name, email, isAdmin, res);
});

// Get user Data
Router.get('/:uid', (req, res) => {
	const uid = req.params.uid;
	if (!uid) return res.status(500).json({ error: 'Incomplete Parameters' });

	DB.withDB(async (db) => {
		const createdCursor = db
			.collection('quizzes')
			.find({ uid })
			.project({
				isOpen: 1,
				title: 1,
				questions: 1,
				responses: {
					$size: '$responses',
				},
			});
		const createdQuiz = await createdCursor.toArray();
		console.log(createdQuiz);
		const userCursor = await db.collection('users').find({ uid }).project({
			attemptedQuiz: 1,
		});
		const userInfo = await userCursor.toArray();
		if (userInfo) {
			const attemptedCursor = db
				.collection('quizzes')
				.find({ _id: { $in: userInfo[0].attemptedQuiz } })
				.project({
					title: 1,
					totalQuestions: {
						$size: '$questions',
					},
					responses: { $elemMatch: { uid } },
				});
			const attemptedQuiz = await attemptedCursor.toArray();
			console.log(attemptedQuiz);
			res.status(200).json({ createdQuiz, attemptedQuiz });
		} else {
			res.status(200).json({ createdQuiz });
		}
	}, res);
});

//get user id 
Router.get('/getUserRole/:uid', (req, res) => {
	const uid = req.params.uid;
	if (!uid) return res.status(500).json({ error: 'Incomplete Parameters' });

	DB.withDB(async (db) => {
		const user = await db.collection('users').findOne({ uid: uid });
		console.log(user.isAdmin);
		res.status(200).json({ isAdmin: user.isAdmin });
	}, res);
});

module.exports = Router;
