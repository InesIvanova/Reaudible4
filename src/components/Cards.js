import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';

const initialState = {
    /* etc */
};
var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyCFeaBY5TDYZAPp3JWz9aQQt6broEwVAg4",
    authDomain: "reaudible-35a71.firebaseapp.com",
    databaseURL: "https://reaudible-35a71.firebaseio.com",
    projectId: "reaudible-35a71",
    storageBucket: "reaudible-35a71.appspot.com",
    messagingSenderId: "289579657439"
};
var firebaseApp = firebase.initializeApp(config);
var UCRef = firebaseApp.database().ref("books")
let items = []

class Cards extends Component {
    defaultState = { title: null, author: null, image_url: null, content: null, description: null, id: null, release_date: null };
    constructor(props) {
        super(props) 
        this.state = {
            value: ''
        }
        items = []

        this.componentDidMount = this.componentDidMount.bind(this);
       // this.rerender = this.rerender.bind(this);

    }
    componentWillMount() {
        let self = this;
        self.setState({'value': null})
    }
  
    componentDidMount(event) {
        var self = this;
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots:true
        })
        
        let arr=[];
        db.collection("books").get().then(function(querySnapshot) {
            console.log('query', querySnapshot)
            querySnapshot.forEach(function(doc) { 
                var obj = doc.data()
                obj['id'] = doc.id;
                arr.push(obj)
                console.log(arr)       
            });
            
            for (let index = 0; index < arr.length; index++) {
                self.setState({
                    value: arr[index]
                })
                items.push(<div className="col-md-3 cards-margin"><Card  books={self.state.value}></Card></div>)        
            }
            self.setState({
                value: []
            })
            arr = []
            
        })
        

      }
    //   rerender(event) {
    //     this.setState();
    // }
    render() {
        
       
  return (
    

    <div className="container-fluid">
        <div className="row">
            {items}  
        </div>
    </div>
  )
     
}
}

  
  
 

export default Cards;
