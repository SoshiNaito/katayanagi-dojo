import React from 'react';
import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  const uid = sessionStorage.getItem('uid')
  console.log(uid)

  return (
    <div className="App">
      <Router>
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
