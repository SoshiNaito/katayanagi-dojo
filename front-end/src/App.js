import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/styles/App.css'
import Post from './pages/Post'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>home</Route>
        <Route exact path='/post'><Post /></Route>
      </Router>
    </div>
  );
}

export default App;
