import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
class Profile extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="text-center box">
                        <h4>Read books</h4>
                        <button className="btn btn-primary"><NavLink className="buttonText" exact to='/'>Go</NavLink></button>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                <div className="text-center box">
                    <h4>Change password</h4>
                    <button className="btn btn-warning"><NavLink className="buttonText" exact to='/reset-pass'>Go</NavLink></button>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile