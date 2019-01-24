import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
import './Overview.css';

class Overview extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome to the world of Reaudible!</h1>
                <p className="lead">Our purpose is to make finding your favourite books as easy as possible.</p>
                <hr className="my-4" />
                <p>You can search through our collection and find what you are looking for. If there isn't your favourite book you can <NavLink exact to='/request'>request it</NavLink>.</p>
                <p className="lead">
                    <NavLink exact to ='/sign-up'>Sign up </NavLink> and start reading. It is free and always will be.
                </p>
            </div>
        ) ;
    }
}

export default Overview;