import { connect } from 'react-redux';
import SearchList from '../components/SearchList/SearchList';
import { movieSelectAction } from '../actions/index';

const API_KEY = 'e2d26c1741502ce9efa8dc4782aceb9a';

const mapStateToProps = (state) => {
	return {
		items: state.searchItems
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (event) => {
			(async function(id = event.target.attributes.data.value) {
				const data = await fetch(
					`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
					.then(response => response.json());
				dispatch(movieSelectAction(data));	
			})(); 
		}
	}
}

const SearchListContainer = connect(mapStateToProps, mapDispatchToProps)(SearchList)

export default SearchListContainer;
