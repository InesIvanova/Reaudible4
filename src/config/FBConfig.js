var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCFeaBY5TDYZAPp3JWz9aQQt6broEwVAg4",
    authDomain: "reaudible-35a71.firebaseapp.com",
    databaseURL: "https://reaudible-35a71.firebaseio.com",
    projectId: "reaudible-35a71",
    storageBucket: "reaudible-35a71.appspot.com",
    messagingSenderId: "289579657439"
};
var firebaseApp = firebase.initializeApp(config);

export default firebaseApp;