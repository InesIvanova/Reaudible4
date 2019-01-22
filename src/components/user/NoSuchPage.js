import React, { Component } from 'react';
import './NoSuchPage.css';
import { NavLink } from 'react-router-dom';


class NoSuchPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 margin">
                    <h3>Page not found! :(</h3>
                    <p>Go back to <NavLink exact to="/"> Home page</NavLink></p>
                </div>
                <div className="col-md-6">
                    <img src="https://cdn.dribbble.com/users/108607/screenshots/670667/dog_mc.gif" />
                </div>
            </div>
        )
    }
}

export default NoSuchPage;