import React, { useState } from 'react';
import './assets/styles/App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const uid = sessionStorage.getItem('uid')

  if (uid) {
    setIsLogin(true)
  }

  return (
    <div className="App">
      <Router>
        {!isLogin &&
          <Redirect to="/login" />
        }
        <Route path='/home'>home</Route>
        <Route path='/login'><SignIn /></Route>
      </Router>
    </div>
  );
}

export default App;
