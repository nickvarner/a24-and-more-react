import { useState, useEffect } from 'react';
import omdb from '../apis/omdbapi';

const useMovies = (defaultSearchTerm) => {
	const [ movies, setMovies ] = useState([]);
	useEffect(
		() => {
			search(defaultSearchTerm);
		},
		[ defaultSearchTerm ]
	);
	const search = async (query) => {
		const response = await omdb.get({
			params : {
				s : query
			}
		});
		setMovies(response.data.items); // videos
	};
	return [ movies, search ];
};

export default useMovies;
