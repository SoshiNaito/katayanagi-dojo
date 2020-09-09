import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostContent from './components/PostContent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PostList from './components/PostList';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/hoge'>
        <App />
      </Route>
      <Route path='/'>
        <PostList />
      </Route>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
