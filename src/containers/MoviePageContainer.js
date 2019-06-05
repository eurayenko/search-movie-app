import { connect } from 'react-redux';
import MoviePage from '../components/MoviePage/MoviePage';

const mapStateToProps = (state) => {
	return {
		movie: state.movie
	}
}

const MoviePageContainer = connect(mapStateToProps)(MoviePage);

export default MoviePageContainer;
