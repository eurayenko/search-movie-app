import React from 'react';
import classes from './searchInput.module.css';

function SearchInput(props) {
	return (
		<input type="text" value={props.value} onChange={props.onChange}/>
	);
}

export default SearchInput;
