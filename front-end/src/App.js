import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/styles/App.css'
import Post from './pages/Post'
import Header from './components/Header'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  const uid = sessionStorage.getItem('uid')

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>home</Route>
        <Route exact path='/post'><Post /></Route>
        {uid === null &&
          <Redirect to="/login" />
        }
        <Route path='/home'>home</Route>
        <Route path='/login'><SignIn /></Route>
      </Router>
    </div>
  );
}

export default App;
