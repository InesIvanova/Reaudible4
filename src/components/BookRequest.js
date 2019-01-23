import React, { Component } from 'react';
import './BookRequest.css';
import { withRouter, Redirect, Route } from 'react-router-dom';
import Homepage from './home/Homepage';
let service = require('../config/bookService');


let years = [];
class BookRequest extends Component {
    isSuccess = false;
    years = []
    constructor(props) {
        super(props)
        this.state = {
            value: {isSuccess: false}
        }

        this.onInputChanged = this.onInputChanged.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
        for (let index = 1900; index <= 2019; index++) {
            years.push(<option id={index}>{index}</option>);
        }
        console.log(years)
        this.onSumbit = this.onSumbit.bind(this);


    }

  
    onInputChanged(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
         [name]: value
        });
        
    }

    onSumbit(event) {
        let form = this.state;
        delete form['value']
        console.log(form);
        
        console.log(this.state.isSuccess)

        service.postABook(form).then(() => {
            this.setState({
                isSuccess: true
            })
          });
        event.preventDefault();
  
    }
    
    render() {
      if(this.state.isSuccess) {
        return(
            <Route  path="/" component={Homepage}> </Route>
        )
    }
      else {
        return (
            <form className="request-form text-center" onSubmit={this.onSumbit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={this.onInputChanged} type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="name">Your name</label>
            <input name="name" onChange={this.onInputChanged} type="text" className="form-control" id="name"  placeholder="Enter your name" />
        </div>
        <div className="form-group">
            <label for="title">Book's title</label>
            <input name="title" onChange={this.onInputChanged} type="text" className="form-control" id="title"  placeholder="Enter book's title" />
        </div>
        <div className="form-group">
            <label for="author">Book's author</label>
            <input name="author" onChange={this.onInputChanged} type="text" className="form-control" id="author"  placeholder="Enter book's author" />
        </div>
<div className="form-group">
<label for="date">Choose a date of publicity</label>
<select className="form-control" id="date" onChange={this.onInputChanged} name="release_date">
    {years}
</select>
</div>
<div className="form-group">
<label for="description">Short description</label>
<textarea name="description" onChange={this.onInputChanged} className="form-control" id="description" rows="3"></textarea>
</div>
<div className="form-group">
    <label for="image">Book's image url</label>
    <input onChange={this.onInputChanged} type="url" className="form-control" id="image" name="image_url"  placeholder="Enter book's image url" />
</div>

<button type="submit"  className="btn btn-primary">Request</button>
</form>
        )
      }
       
    
  
}
      
           
}
  
  
 

export default BookRequest;
