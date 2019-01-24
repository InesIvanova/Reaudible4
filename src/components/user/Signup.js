import React, { Component } from 'react';
import './Login.css';
import { NavLink, Redirect } from 'react-router-dom';
import { FormErrors } from './FormErrors';
let firebase = require('firebase');


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: '',
            redirect: false,
            match_pass: '',
            email_exists: undefined,
            formErrors: {email: '', password: '', match_pass: ''},
            emailValid: false,
            passwordValid: false,
            matchPassValid: false,
            formValid: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onFormSumbit = this.onFormSumbit.bind(this);
        this.validateField = this.validateField.bind(this);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let matchPassValid = this.state.matchPassValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'match_pass':
          matchPassValid = value == this.state.password;
          fieldValidationErrors.match_pass = matchPassValid ? '': ' passwords missmatch';
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        matchPassValid: matchPassValid
                      }, this.validateForm);
        if (emailValid && passwordValid && matchPassValid) {
            this.setState({'formValid': true})
        }
      }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }, () => { this.validateField(name, value) });
    }

    onFormSumbit(event) {
        let form = this.state;
        delete form['value']
        firebase.auth().createUserWithEmailAndPassword(form['email'], form['password'])
        .then((a) => {
            this.setState({'redirect':true})
        }).catch((err) => {

            if (err.message === "The email address is already in use by another account.") {
                this.setState({'email_exists': err.message});
            }
           
            // ...
          });
          
        event.preventDefault();
    }

    render() {
        if (this.state.email_exists) {
            var error_email = <div className="error">{this.state.email_exists}</div>
        }

        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }
        return (
            
          
            <div className="login">
                <div className="error text-center">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form className="form-signin" onSubmit={this.onFormSumbit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input onChange={this.handleChange} value={this.state.email} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="sr-only">Your name</label>
                    <input onChange={this.handleChange} value={this.state.name} name="name" type="text" id="name" className="form-control" placeholder="Your name" required autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.handleChange} value={this.state.password} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <label for="match_pass" className="sr-only">Repeat Password</label>
                    <input onChange={this.handleChange} value={this.state.match_pass} name="match_pass" type="password" id="match_pass" className="form-control" placeholder="Repeat Password" required />
                </div>
                <div className="checkbox mb-3">
                <label>
                    Already have an account? <NavLink className="sign-up" exact to="/login"> Sign in</NavLink>
                </label>
                </div>
                <button disabled={!this.state.formValid} className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                {error_email}
            </form>
            
            </div>
        );
    }
}

export default Signup;