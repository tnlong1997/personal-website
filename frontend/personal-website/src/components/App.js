import React, { Component } from 'react';

import HomePage from './HomePage/HomePage';
import NavHeader from './NavHeader/NavHeader';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<NavHeader />
			<HomePage />
		</div>
	);
  }
}

export default App;
