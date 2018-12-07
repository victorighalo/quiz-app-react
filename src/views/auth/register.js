import React, {Component} from 'react';
import {AuthService} from '../../shared/services/'
class register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: [ '', false],
            lastname: [ '', false],
            email: [ '', false],
            password: [ '', false],
            submitting: false
        }
        this.validateForm = this.validateForm.bind(this)
    }


    //Methods
    validateForm(){
        let formState = true;
        this.setState({submitting: true})
        Object.keys(this.state).forEach(element => {
            if(element !== 'submitting'){
            if(!this.state[element][1]){
                formState = false;
            }else{
                formState = true;
            }
        }
        });
        if(!formState){
            alert('Please fill all fields')
        }else{
            let data = {
                'firstname': this.state.firstname[0],
                'lastname': this.state.lastname[0],
                'email': this.state.email[0],
                'password': this.state.password[0],
            }
            AuthService.register(data).then( (result) => {
                console.log('Result', result);
                this.setState({submitting: false})
                } )
                .catch( (err) => {
                console.log('Error', err);
                this.setState({submitting: false})
                })
        }
    }
    validateFormField = (event) =>{
        event.persist()
        // console.log(event.target.value.length)
   if(event.target.value.length < 1){
    this.setState(()=>{
        return {[event.target.id]: [event.target.value, false]}
    })   
     }else{
        this.setState(()=>{
            return {[event.target.id]: [event.target.value, true]}
        })
     }

    }

    render(){
        return (
<div className="container d-flex h-100">
  <div className="row justify-content-center align-items-center w-100" style={ {height: '100vh'}}>
    <div className="col-md-4">
        <h3 className="font-weight-bold mt-3 mb-3">Register</h3>
        {this.state.firstname} 
        <form>
      <div className="form-row">
          <div className="form-group col-md-6">
            <label>First name</label>
            <input 
            type="text" 
            id="firstname"
            className={this.state.firstname[1] ? 'form-control': 'form-control form-invalid'} 
            value={this.state.firstname[0]} 
            onChange={this.validateFormField}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last name</label>
            <input 
            type="text" 
            className={this.state.lastname[1] ? 'form-control': 'form-control form-invalid'} 
            id="lastname" 
            value={this.state.lastname[0]}
            onChange={this.validateFormField}
            />
          </div>
        </div>
    <div className="form-group">
      <label>Email address</label>
      <input 
      type="email" 
      className={this.state.email[1] ? 'form-control': 'form-control form-invalid'} 
      id="email" 
      aria-describedby="emailHelp" 
      value={this.state.email[0]}
      onChange={this.validateFormField}
      />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input 
      type="password" 
      className={this.state.password[1] ? 'form-control': 'form-control form-invalid'} 
      id="password" 
      value={this.state.password[0]}
      onChange={this.validateFormField}
      />
    </div>
    <button type="button" className="btn btn-primary btn-block" onClick={this.validateForm}>{this.state.submitting ? 'Submitting...': 'Register' }</button>
  </form>
    </div>
  </div>
</div>

        )
    }
}

export default register;