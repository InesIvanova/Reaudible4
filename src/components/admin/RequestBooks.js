import React, {Component} from 'react';
import BookForm from './BookForm';
let firebase = require('firebase');
let items = ''

class RequestedBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        let db = firebase.firestore();
        let reqestedBooks = []
        items = [];
        db.collection('requestedBooks').get().then((books) => {
            books.forEach((book) => { 
                var obj = book.data()
                obj['id'] = book.id;
                reqestedBooks.push(obj)
                console.log('req books', reqestedBooks)       
            });
            for (let index = 0; index < reqestedBooks.length; index++) {
                this.setState({
                    value: reqestedBooks[index]
                })
                items.push(<div className="col-md-4"><BookForm  books={this.state.value}></BookForm></div>)        
            }
        })
    }

   

    render() {
        return (
            <div className="container">
                <div className="row">
                        {items}
                </div>              
            </div>
        )
    }
}

export default RequestedBooks;