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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/hoge'>
        <App />
      </Route>
      <Route path='/'>
        <PostContent />
      </Route>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
