import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchInputContainer from './containers/SearchInputContainer';
import SearchListContainer from './containers/SearchListContainer';

// const API_KEY = 'e2d26c1741502ce9efa8dc4782aceb9a';

// let searchMovie = async (test) => {
// 	const data = await fetch(
// 		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=avengers`)
// 		.then(response => response.json());
// 	console.log(data);
// }
// searchMovie();

class App extends React.Component {
  render() {
	return (
		<div>
			<Header />
			<SearchInputContainer />
			<SearchListContainer />
		</div>
	);
  }
}

export default App;
