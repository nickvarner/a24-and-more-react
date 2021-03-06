const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoose.Promise = global.Promise;
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser    : true,
			useUnifiedTopology : true
		});
		console.log('mongodb successfully connected');
	} catch (err) {
		console.error(err.message);
		// exit process with failure
		process.exit(1);
	}
};
// const db = {};
// db.mongoose = mongoose;
// db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = connectDB;
