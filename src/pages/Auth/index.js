import React from 'react';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default Auth;
