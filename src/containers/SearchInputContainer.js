import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';
import { inputChangeAction, searchAction } from '../actions/index';

const mapStateToProps = (state) => {
	return {
		value: state.value
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (event) => {
			// if (event.target.value == '') {
			// 	event.value = '';
			// }
			dispatch(inputChangeAction(event));
			(async function(value = event.target.value) {
				console.log(0);
				const API_KEY = 'e2d26c1741502ce9efa8dc4782aceb9a';
				const result = await fetch(
					`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`)
					.then(response => response.json()).then((data) => data.results);
				if (result === undefined) {
					return dispatch(searchAction([]))
				} else {
					return dispatch(searchAction(result));
				}
			})();
		}
	}
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default SearchInputContainer;
