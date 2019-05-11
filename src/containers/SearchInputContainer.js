import React from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';
import { inputChangeAction } from '../actions/index';

const mapStateToProps = (state) => {
	return {
		value: state.value
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (event) => {
			dispatch(inputChangeAction(event))
		}
	}
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default SearchInputContainer;
