export const inputChangeAction = (event) => {
	return {
		type: 'INPUT_CHANGE',
		value: event.target.value
	}
};

export const searchAction = (data) => {
	return {
		type: 'SERCH_MOVIE',
		searchItems: data
	}
};

export const movieSelectAction = (data) => {
	return {
		type: 'MOVIE_SELECT',
		movieInfo: data
	}
}; 
