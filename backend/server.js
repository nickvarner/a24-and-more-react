const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const app = express();

const db = require('./models');
const Role = db.role;

var corsOptions = {
	origin : 'http://localhost:8081'
};

db.mongoose
	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
		useNewUrlParser    : true,
		useUnifiedTopology : true
	})
	.then(() => {
		console.log('successfully connected to mongodb');
		initial();
	})
	.catch((err) => {
		console.error('connection error', err);
		process.exit();
	});

app.use(cors(corsOptions));

function initial () {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name : 'user'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}
				console.log("added 'user' to roles collection");
			});

			new Role({
				name : 'moderator'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'moderator' to roles collection");
			});

			new Role({
				name : 'admin'
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'admin' to roles collection");
			});
		}
	});
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ message: 'welcome to a24 app' });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});
