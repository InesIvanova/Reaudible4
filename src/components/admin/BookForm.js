import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import './BookForm.css';

let firebase = require('firebase');

class BookForm extends Component {
    
    constructor(props) {
        super(props)
        this.state =  {
            title: this.props.books.title,
            author: this.props.books.author,
            image_url: this.props.books.image_url,
            download_link: '',
            content: this.props.books.description,
            description: this.props.books.description,
            release_date: this.props.books.release_date,
            id: this.props.books.id,
            email: this.props.books.email,
            name: this.props.books.name,
            toDashboard: false

        }
        

        
        this.handleChange = this.handleChange.bind(this);
        this.onFormSumbit = this.onFormSumbit.bind(this);
        this.rejectBook = this.rejectBook.bind(this)

    }

   

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    }

    onFormSumbit(event) {
        let form = this.state;
        delete form['name']
        delete form['email']
        firebase.firestore().collection('books').add(form).then((book) => {
            firebase.firestore().collection('requestedBooks').doc(form.id).delete().then(()=> {
                this.setState({
                    toDashboard: true
                })
            })
        })
          
        event.preventDefault();
    }

    rejectBook(event) {
        let form = this.state;
        firebase.firestore().collection('requestedBooks').doc(form.id).delete().then(()=> {
            
        })
    }

    

    render() {
        let delPath = '/reject/' + this.state.id

        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
          }
        return (
            <form className="admin-form text-center" onSubmit={this.onFormSumbit}>
            <div className="form-group">
                <img src={this.state.image_url} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Book's title</label>
                <input  value={this.state.title} onChange={this.handleChange} type="text" className="form-control" id="exampleInputEmail1"  name="title" placeholder="Enter email" / >
            </div>
            <div className="form-group">
                <label htmlFor="name">Book's author</label>
                <input onChange={this.handleChange} name="author"  value={this.state.author}  type="text" className="form-control" id="name"  placeholder="Enter your name" />
            </div>
           
            <div className="form-group">
                <label htmlFor="image_url">Book's url</label>
                <input onChange={this.handleChange} name="image_url" type="url"  value={this.state.image_url} className="form-control" id="author"  placeholder="Enter book's author" />
            </div>
            <div className="form-group">
                <label htmlFor="title">Book's release date</label>
                <input onChange={this.handleChange} name="release_date"  value={this.state.release_date} type="number" className="form-control" id="title"  placeholder="Enter book's title" />
            </div>
            <div className="form-group">
                <label htmlFor="download_link">Please add a download link here</label>
                <input  onChange={this.handleChange} name="download_link"   type="url" className="form-control red-border" id="title" style={{border: '1px solid red'}}  placeholder="Enter a download link" />
            </div>
    <div className="form-group">
    <label htmlFor="description">Short description</label>
    <textarea onChange={this.handleChange} value={this.state.description} name="description" className="form-control" id="description" rows="3"></textarea>
    </div>
    <div className="form-group">
        <label htmlFor="image">Book is requested from {this.state.name}</label>
        <input type="email" readOnly value={this.state.email} className="form-control" id="image" name="image_url"  placeholder="Enter book's image url" />
    </div>
    
    <div className="row">
            <div className="col-md-6">
                <button type="submit"  className="btn btn-primary">Approve</button>
            </div>
            <div className="col-md-6">
                <button type="button" className="btn btn-danger"><NavLink exact to={delPath} >Delete</NavLink></button>
            </div>
    </div>
    </form>
        )
    }
}

export default BookForm;