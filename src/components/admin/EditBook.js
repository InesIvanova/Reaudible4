import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import './BookForm.css';

let firebase = require('firebase');
let id = '';

class EditBook extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            title: '',
            author: '',
            image_url: '',
            download_link: '',
            content: '',
            description: '',
            release_date: '',
            id: '',
            toDashboard: false

        }
        
        id = this.props.match.params.id

        firebase.firestore().collection('books').doc(id).get().then((book) => {
            let requestedBook = book.data()
            this.setState({
                title: requestedBook.title,
                author: requestedBook.author,
                image_url: requestedBook.image_url,
                download_link: requestedBook.download_link,
                content: requestedBook.content,
                description: requestedBook.description,
                release_date: requestedBook.release_date,
                id: requestedBook.id,
                toDashboard: false
            })
        })
        
        this.handleChange = this.handleChange.bind(this);
        this.onFormSumbit = this.onFormSumbit.bind(this);

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
        firebase.firestore().collection('books').doc(id).update(form).then(() => {
            this.setState({
                toDashboard: true
            })
        })
          
        event.preventDefault();
    }
    

    render() {
        let delPath = '/reject/' + this.state.id

        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
          }
        return (
            <div className="container">
                <div className="row">
                <div className="col-md-4"></div>

                    <div className="col-md-4">
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
                <label htmlFor="download_link">Download link here</label>
                <input  onChange={this.handleChange} value={this.state.download_link} name="download_link"    type="url" className="form-control" id="title" style={{border: '1px solid red'}}  placeholder="Enter a download link" />
            </div>
    <div className="form-group">
    <label htmlFor="description">Short description</label>
    <textarea onChange={this.handleChange} value={this.state.description} name="description" className="form-control" id="description" rows="3"></textarea>
    </div>
    
    
    <div className="row">
            <div className="col-md-6">
                <button type="submit"  className="btn btn-primary">Approve</button>
            </div>
            <div className="col-md-6">
                <button type="button" className="btn btn-danger"><NavLink exact to='/' >Discard</NavLink></button>
            </div>
    </div>
    </form>
                    </div>
                    <div className="col-md-4"></div>

                </div>
            </div>
        )
    }
}

export default EditBook;