import React from 'react';
import MovieDataService from '../services/movieService';

const AddMovie = () => {
	const initialMovieState = {
		id          : null,
		title       : '',
		description : '',
		published   : false
	};
	const [ movie, setMovie ] = React.useState(initialMovieState);
	const [ submitted, setSubmitted ] = React.useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setMovie({ ...movie, [name]: value });
	};

	const savemovie = () => {
		var data = {
			title       : movie.title,
			description : movie.description
		};

		MovieDataService.create(data)
			.then((response) => {
				setMovie({
					id          : response.data.id,
					title       : response.data.title,
					description : response.data.description,
					published   : response.data.published
				});
				setSubmitted(true);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const newMovie = () => {
		setMovie(initialMovieState);
		setSubmitted(false);
	};

	return <h1>add movie</h1>;
};

export default AddMovie;
