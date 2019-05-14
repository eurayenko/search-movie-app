import { connect } from 'react-redux';
import SearchList from '../components/SearchList/SearchList'

const mapStateToProps = (state) => {
	console.log(state.searchItems);
	return {
		items: state.searchItems
	}
}

const SearchListContainer = connect(mapStateToProps)(SearchList)

export default SearchListContainer;
