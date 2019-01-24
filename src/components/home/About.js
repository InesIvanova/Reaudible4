import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from './0.jpg';
import './About.css'


class About extends Component {
  
  render() {
   
    return (
     
        <div> 
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Reaudible</h1>
                <p className="lead text-muted">Reaudible was started  back in 2019 as a student project. Soon it became popular and more and more people use our site to find the books they love.</p>
                <p>
                   <button className="btn btn-primary my-2"> <NavLink exact to="/sign-up" style={{color: 'black'}}>Start for free</NavLink></button>
                   <button className="btn btn-secondary my-2"> <NavLink exact to="/login">Login</NavLink></button>
                </p>
            </div>
        </section>
    
        <div className="album py-5 bg-light">
            <div className="container">
    
                <div className="row">
                    <div className="col-md-4">
                       
                </div>
                <div className="col-md-4">
                    <div>
                    <div className="card mb-4 box-shadow about-card">
                    <img className="card-img-top about" src={logo} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-text">Founder: Ines Ivanova</h5>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary"><a href="https://bg.linkedin.com/in/ines-ivanova-751292134" target="_blank" >LinkedIn</a></button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="col-md-4">
                
            </div>
    
            
            </div>
        </div>
        </div>
    </div>
             
    
    );
  }
}

export default About;
