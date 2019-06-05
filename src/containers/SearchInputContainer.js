import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';
import { inputChangeAction, searchAction } from '../actions/index';

const API_KEY = 'e2d26c1741502ce9efa8dc4782aceb9a';

const mapStateToProps = (state) => {
	return {
		value: state.value
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (event) => {
			dispatch(inputChangeAction(event));
			(async function(value = event.target.value) {
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
