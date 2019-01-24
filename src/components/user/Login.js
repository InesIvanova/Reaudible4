import React, { Component } from 'react';
import './Login.css';
import { NavLink, Redirect } from 'react-router-dom';
let firebase = require('firebase');

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: undefined,
            token: undefined,
            error: undefined,
            admin: undefined
        }

        this.handleChange = this.handleChange.bind(this);
        this.onFormSumbit = this.onFormSumbit.bind(this);
    }


    componentDidMount() {
        this.setState({
            email: undefined,
            token: undefined,
            admin: undefined
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    onFormSumbit(event) {
        
        let form = this.state;
        delete form['value']
         firebase.auth().signInWithEmailAndPassword(form['email'], form['password'])
        .then((res) =>  {
            // localStorage.setItem('token', res.user.uid)
            const db = firebase.firestore();
            db.settings({
                timestampsInSnapshots:true
            })
            
            let arr=[];
            db.collection("user_admin").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => { 
                    if (doc.data().Admin === res.user.email) {
                        localStorage.setItem('admin', res.user.uid)
                         this.setState({'admin': res.user.uid})
                    } else {
                        localStorage.setItem('token', res.user.uid)
                         this.setState({'token': res.user.uid})
                    }   
                });
            })
            
        })
        .catch((err) => {
            if (err.code === "auth/wrong-password") {
                this.setState({error: "email or password invalid"})
            }
            // ...
          });
        event.preventDefault();
    }

    render() {
        if(this.state.token) {
            return <Redirect to='/profile'/>
        }
        if(this.state.admin) {
            return <Redirect to='/admin-profile'/>
        }
        else{
            if(this.state.error) {
                var error = <div className="alert alert-danger">{this.state.error}</div>
            }
            return (
                <div className="login">
                    <form className="form-signin" onSubmit={this.onFormSumbit}>
                        <img className="mb-4" src="https://slushalki.net/image/cache/catalog/product/Samsung/slushalki-net-samsung-premium-200x200.jpg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
                        <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input name="email" onChange={this.handleChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        </div>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input name="password" onChange={this.handleChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox mb-3">
                        <label>
                            You do not have an account? <NavLink className="sign-up" exact to="/sign-up"> Sign up</NavLink>
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                        {error}
                    </form>
                
                </div>
            );
        }
        
    }
}

export default Login;