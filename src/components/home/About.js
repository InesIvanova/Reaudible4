import React, { Component } from 'react';
import logo from './0.jpg';


class About extends Component {
  
  render() {
   
    return (
     
        <div> 
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                <p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </section>
    
        <div className="album py-5 bg-light">
            <div className="container">
    
                <div className="row">
                    <div className="col-md-4">
                       
                </div>
                <div className="col-md-4">
                    <a href="https://bg.linkedin.com/in/ines-ivanova-751292134" target="_blank">
                    <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={logo} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                    </a>
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
