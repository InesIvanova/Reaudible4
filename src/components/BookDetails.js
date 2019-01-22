import React, { Component } from 'react';
import './BookDetails.css'
let service = require('../config/bookService');


let idBook = '';
class BookDetails extends Component {
    constructor(props) {
        super(props)
        idBook = this.props.match.params.id;
        this.state = {
            book: ''
        }
    }

    componentDidMount() {
        let self = this;
        console.log('shte vika')
        service.getBook().then(function(querySnapshot) {
            querySnapshot.forEach(q => {
                if(q.id === idBook) {
                    console.log('namri',q.id)
                    self.setState({
                        book: q.data()
                    })
                    console.log(self.state)
                }
                
            });
            
        })
       
    }
    render(){
        return (
        <div className="container">
        <div className="row">
                <div className="col-md-6">
                    <img src={this.state.book.image_url} alt="snimka" />
                </div>
                <div className="col-md-6">
                    <div className="title">
                        <h1>Title: <span>{this.state.book.title}</span></h1>
                    </div>
                    <div className="title">
                         <h3>Author: <span> {this.state.book.author}</span></h3>
                    </div>
                    <div className="title">
                        <p>Description: <span> {this.state.book.description}</span></p>
                    </div>
                    <button className="btn btn-primary">Read the book!</button>
                </div>
           </div></div>
        )
    }
}

export default BookDetails;