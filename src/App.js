import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/login'
import Newuser from './components/auth/newUser'
import Tagsdescriptors from './components/tagsdescriptors/tagsDescriptors'

import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';



function App() {
  return (

    <AuthState>
      <AlertState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/newuser" component={Newuser}/>
            <Route exact path="/tagsdescriptors" component={Tagsdescriptors}/>
          </Switch>
      </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
