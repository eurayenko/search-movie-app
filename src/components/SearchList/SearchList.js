import React from 'react';
import SearchItem from './SearchItem';
// import classes from './Header.module.css';

function SearchList(props) {
	const items = props.items.map(item => <SearchItem 
		title = {item.title} 
		overview = {item.overview} 
		img = {item.poster_path} 
		id = {item.id}
		onClick = {props.onClick}
		/>)
	return (
		<ul className="wrapper">
			{items}
		</ul>
	);
}

export default SearchList;
