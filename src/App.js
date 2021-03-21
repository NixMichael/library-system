import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Browse from './views/Browse'
import Register from './views/Register'
import SignIn from './views/SignIn'
import MyAccount from './views/MyAccount'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact>
            <Browse />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/myaccount'>
            <MyAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
