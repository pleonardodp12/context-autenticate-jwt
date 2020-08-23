import React from 'react';
import {Switch, Router } from 'react-router-dom'

import Login from './pages/Login';
import Users from './pages/Users';

export default function Routes(){
  return (
    <Switch>
      <Router exact path="/login" component={Login}/>
      <Router exact path="/users" component={Users}/>
    </Switch>
  );
};