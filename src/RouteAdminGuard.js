import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem('admin')
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  ) 

  export default PrivateAdminRoute;