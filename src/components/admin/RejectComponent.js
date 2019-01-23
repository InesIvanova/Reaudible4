import React, {Component} from 'react';
import './DeleteComponent.css'
import {Redirect} from 'react-router-dom'
let firebase = require('firebase');
let id = ''
class RejectComponent extends Component {
    constructor(props){
        super(props)
        this. state = {
            toDashboard: false,
          }
        this.deleteItem = this.deleteItem.bind(this);
        this.redirect = this.redirect.bind(this);

    }
    
    deleteItem(event) {
        const db = firebase.firestore();
         id = this.props.match.params.id
         console.log(id)
        db.settings({
            timestampsInSnapshots:true
        })
        db.collection('requestedBooks').doc(id).delete().then((res) => {
            console.log("Document successfully deleted!");
            this.setState({
                toDashboard: true
            })
            //pass to parent to rerender
        })
    }

    redirect() {
        console.log('to pr')
        this.setState({
            toDashboard: true
        })
    }
    
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/admin-profile' />
          }
        return (
            <div className="container text-center">
                <div className="row text-center">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                <h1>Are you sure you want to reject this item?</h1>
                <img className="strange-cat-pic" src='https://i.pinimg.com/originals/ac/c9/ad/acc9ad98cf762f2d867ae012adcc1bf1.gif' />
                </div>
                <div className="col-md-4">
                </div>
            </div>
             <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-danger" onClick={this.deleteItem} > Delete</button>
                </div>
                <div className="col-md-2">
                <button type="button" className="btn btn-primary" onClick={this.redirect}> Profile</button>

                </div>
                <div className="col-md-4"></div>
             </div>
            </div>
        )
    }
}

export default RejectComponent;