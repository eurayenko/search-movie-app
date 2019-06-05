import React from 'react';
import { Link } from 'react-router-dom';
import classes from './searchItem.module.css';

function SearchItem(props) {
	return (
		<li className={classes.item}>
			<img className={classes.img} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.img}`} alt=""/>
			<div className={classes.text}>
				<Link to="/movie">
					<h2 className={classes.movieTitle} onClick={props.onClick} data={props.id}>{props.title}</h2>
				</Link>	
				<p className={classes.overview}>{props.overview}</p>
			</div>
		</li>
	);
}

export default SearchItem;
