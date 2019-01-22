import React, {Component} from 'react';
import '../private/Profile.css';
import {NavLink} from 'react-router-dom'

class AdminProfile extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="text-center box">
                        <h4>Manage all books</h4>
                        <button className="btn btn-primary"><NavLink className="buttonText" exact to='/'>Go</NavLink></button>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                <div className="text-center box">
                    <h4>Manage requested books</h4>
                    <button className="btn btn-warning"><NavLink className="buttonText" exact to='/books/requested'>Go</NavLink></button>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AdminProfile;