import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchInputContainer from './containers/SearchInputContainer';
import SearchListContainer from './containers/SearchListContainer';
import MoviePageContainer from './containers/MoviePageContainer';


class App extends React.Component {
  render() {
	return (
		<Router>
			<Header />
			<SearchInputContainer />
			<Route exact path="/" component = {SearchListContainer} />
			<Route path="/movie" component = {MoviePageContainer} />
		</Router>
	);
  }
}

export default App;
