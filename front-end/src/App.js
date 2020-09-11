import React from 'react';

import './assets/styles/App.css'
import Post from './pages/Post'
import Header from './components/Header'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'
import PostList from './components/PostList';

import Mypage from './pages/Mypage'
function App() {
  const uid = sessionStorage.getItem('uid')

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'><PostList /></Route>
        <Route exact path='/post'><Post /></Route>
        {uid === null &&
          <Redirect to="/login" />
        }
        <Route path='/home'><PostList /></Route>
        <Route path='/login'><SignIn /></Route>
        <Route path='/mypage'>
          <Mypage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
