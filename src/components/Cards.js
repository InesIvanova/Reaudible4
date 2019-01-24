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
            value: '',
            messageShown: ''
        }
        items = []

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handler = this.handler.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
       // this.rerender = this.rerender.bind(this);

    }
    componentWillMount() {
        let self = this;
        self.setState({'value': null})

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots:true
        })
        
        
        db.collection("books").get().then((querySnapshot) => {
            let arr=[];
            querySnapshot.forEach((doc) => { 
                var obj = doc.data()
                obj['id'] = doc.id;
                arr.push(obj)
            });
            
            for (let index = 0; index < arr.length; index++) {
                self.setState({
                    value: arr[index]
                })
                items.push(<div key={index.toString()} className="col-md-3 cards-margin"><Card action={this.handler} books={self.state.value}></Card></div>)        
            }
            self.setState({
                value: []
            })
            arr = []
            
        })
    }

    handler() {
       this.setState(this.state);
        
    }
  
    componentDidMount(event) {
        var self = this;
       
        

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
