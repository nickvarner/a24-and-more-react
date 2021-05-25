module.exports = (mongoose) => {
	var schema = mongoose.Schema(
		{
			title       : String,
			description : String,
			year        : String,
			Released    : String,
			Genre       : String,
			Director    : String,
			Actors      : String,
			Poster      : String,
			imdbID      : String,
			published   : Boolean
		},
		{ timestamps: true }
	);

	schema.method('toJSON', function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const Movie = mongoose.model('movie', schema);
	return Movie;
};
