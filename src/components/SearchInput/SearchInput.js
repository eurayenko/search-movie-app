import React from 'react';
import classes from './searchInput.module.css';

function SearchInput(props) {
	return (
		<div className="wrapper">
			<input 
				className={classes.input}
				type="text" 
				placeholder="Enter movie title here..."
				value={props.value} 
				onChange={props.onChange}
			/>
		</div>
	);
}

export default SearchInput;
