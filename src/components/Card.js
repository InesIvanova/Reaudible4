import React, { Component } from 'react';
import './Card.css'
import { NavLink } from 'react-router-dom';

var firebase = require('firebase')


class Card extends Component {
    constructor(props) {
        super(props)
        console.log('card', this.props)
        console.log('knigiteeeeeeee',this.props.books)
        this.state = {
            book: this.props.books,
            
            delete: () => {
                const db = firebase.firestore();
                
                db.settings({
                    timestampsInSnapshots:true
                })
                db.collection('books').doc(this.state.book.id).delete().then((res) => {
                    console.log("Document successfully deleted!");
                    //pass to parent to rerender
                })
            },

            rerender: () => {
                this.forceUpdate();
                console.log('updated? ', this.state)
            }
        }
        
        
        
        
      
       this.deleteBook = this.deleteBook.bind(this)
    //    this.rerender = this.rerender.bind(this);
      
    }
    deleteBook(id) {
        console.log('daleted', id);
    }

   

    render() {
        let downloadButton = <a download href={this.state.book.download_link}  className="btn btn-primary">Download pdf</a>
        let startReading = <NavLink className="btn btn-primary" exact to ='login'>Start reading</NavLink>
        let item = ''
        let deleteItem = '';
        let clickitm = '';
            if (localStorage.getItem('token')) {
              item = downloadButton
            }
            else if (localStorage.getItem('admin')) {
                item = downloadButton
                deleteItem =  <button type="button" onClick={this.state.delete} className="btn btn-danger">Delete</button>;
                clickitm = <button type="button"  onClick={this.state.rerender}  className="btn btn-danger">Try</button>;
            }
            else {
                item = startReading
            }
       
        const myPath = '/books/' + this.props.books.id + '';
      return (
         
        
        <div className="card" id={this.state.book.id}  >
        <NavLink exact to={myPath} >
            <img className="card-img-top" src={this.state.book.image_url} alt="Card image cap" />
            </NavLink>
            <div className="card-body">
                <h5 className="card-title">{this.state.book.title}</h5>
                <p className="card-text">{this.state.book.author}</p>
                <div className="row">
                    <div className="col-md-7">{item}</div>
                    <div className="col-md-5">{deleteItem}</div>
                </div>
                <div className="row">
                    <div className="col-md-12">{clickitm}</div>
                    
                </div>
                
                
            </div>
        </div>
        
      );
    }
}
  
  
 

export default Card;
