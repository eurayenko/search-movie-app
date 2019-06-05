import React from 'react';
import classes from './moviePage.module.css';
import UserScore from './UserScore';

function MoviePage(props) {
	return (
		<section className={classes.movieContent} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face/${props.movie.backdrop_path})`}}>
			<div className={classes.wrapper}>
				<div className={classes.poster}>
					<img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`} alt=""/>
				</div>
				<div className="info">
					<h2 className={classes.title}>
						{props.movie.title}
						<span className={classes.releaseDate}>({props.movie.release_date})</span>
					</h2>
					<UserScore score={props.movie.vote_average}/>
					<p>Overview</p>
					<p>{props.movie.overview}</p>
				</div>
			</div>
		</section>
	);
}

export default MoviePage;
