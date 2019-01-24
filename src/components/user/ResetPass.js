import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

let firebase = require('firebase');
let error = ''
class ResetPass extends Component {
    constructor(props) {
        super(props) 
        
       
      
        
        this.state = {
            pass: undefined,
            error: undefined,
            success_pass: false,
            passwordValid: false,
            formErrors: {pass: ''},

        }

        this.handleChange = this.handleChange.bind(this);
        this.onFormSumbit = this.onFormSumbit.bind(this);
        this.validateField = this.validateField.bind(this);


       
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.pass;
        
      
        switch(fieldName) {
          case 'pass':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        passwordValid: passwordValid,
                      }, this.validateForm);
        if (passwordValid) {
            this.setState({'formValid': true})
        }
      }
    componentDidMount() {
        this.setState({
            pass: undefined,
            success_pass: false,
            passwordValid: false,
        })
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
        var user = firebase.auth().currentUser;
            user.updatePassword(form.pass).then((details) => {
            
                localStorage.removeItem('token')
                this.setState({
                    success_pass: true
                })
            }).catch(function(error) {
            });
            event.preventDefault();
        
       
        }
        
        

    render() {
        if(this.state.success_pass) {
            return <Redirect to='/login'/>
        }
        return (
            <div className="login">

            <form className="form-signin" onSubmit={this.onFormSumbit}>
            <p>The new password should be at least 6 characters.</p>
            
            <div className="form-group">
                <label htmlFor="pass" className="sr-only">Password</label>
                <input name="pass" onChange={this.handleChange} type="password" id="pass" className="form-control" placeholder="New Password" required />
            </div>
            
            <button disabled={!this.state.formValid} className="btn btn-lg btn-primary btn-block" type="submit">Change password</button>
                       
            
        </form>
        </div>
        );
    }
}

export default ResetPass;