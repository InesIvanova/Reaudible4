import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                value: ''
        }
    }
    
  
    
    render() {
        const logout = () => {
            localStorage.removeItem('token')
            localStorage.removeItem('admin')
        }  
        if (localStorage.getItem('admin')) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" exact to="/">Reaudible</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/about">About <span className="sr-only">(current)</span></NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/admin-profile">My admin profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login" onClick={logout}>Logout</NavLink>
                            </li>
                             {/* <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to=""></NavLink>
                            </li>  */}
                            
                        </ul>
                        </div>
                    </nav>
                </div>
              );
        }
        if (localStorage.getItem('token')) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" exact to="/">Reaudible</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/about">About <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/request">Request a book <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/profile">My profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login" onClick={logout}>Logout</NavLink>
                            </li>
                             {/* <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to=""></NavLink>
                            </li>  */}
                            
                        </ul>
                        </div>
                    </nav>
                </div>
              );
        }
      return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" exact to="/">Reaudible</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/about">About <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/request">Request a book <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ borderBottom: '1px solid black'}} exact to="/login">Login</NavLink>
                    </li>
                    
                </ul>
                </div>
            </nav>
        </div>
      );
    }
}
  
  
 

export default Navbar;
