import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import About from './components/home/About';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import NoSuchPage from './components/user/NoSuchPage';
import BookRequest from './components/BookRequest';
import BookDetails from './components/BookDetails';
import Success from './components/Success';
import Protected from './components/Protected';
import PrivateRoute from './RouteGuard';
import Profile from './components/private/Profile';
import ResetPass from './components/user/ResetPass';
import PrivateAdminRoute from './RouteAdminGuard';
import AdminProfile from './components/admin/AdminProfile';
import RequestedBooks from './components/admin/RequestBooks';
import DeleteComponent from './components/admin/DeleteComponent';



const AppRoutes  = () => (
    
    <div>
       <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/request" component={BookRequest} />
        <Route exact path="/request/success" component={Success} />
        <Route exact path="/sign-up" component={Signup} />
        
        <PrivateAdminRoute path='/books/requested' component={RequestedBooks} />
        <Route exact path="/books/:id" component={BookDetails} />
        <Route exact path="/books" component={Homepage} />
        <PrivateRoute path='/protected' component={Protected} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/reset-pass' component={ResetPass} />
        <PrivateAdminRoute path='/admin-profile' component={AdminProfile} />
        <PrivateAdminRoute path='/delete/:id' component={DeleteComponent} />

        

        <Route component={NoSuchPage} />
       </Switch>


    </div>
)

export default AppRoutes;