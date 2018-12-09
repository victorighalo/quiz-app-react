import React, {Component} from 'react';
import {AuthService} from '../../shared/services/'
class login extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      submitting: false
    }
    this.validateForm = this.validateForm.bind(this)
  }
  validateForm(){
    let formState = true;
    this.setState({submitting: true})
    Object.keys(this.state).forEach(element => {
      if(element !== 'submitting'
       && element !== 'error'
       ){
          if(!this.state[element] && this.state[element] === ''){
          formState = false;
      }else{
          formState = true;
      }
  }
  });
  if(!formState){
    this.setState({submitting: false})
    alert('Please fill all fields')
  }else{
    let data = {
        'email': this.state.email,
        'password': this.state.password
    }
    AuthService.login(data).then( (result) => {
        this.setState({submitting: false})
        alert(result.data.message)
        } )
        .catch( (err) => {
        alert(err.response.data.message)
        this.setState({submitting: false})
        })
}
    }

    validateFormField = (event) =>{
      event.persist()
      // console.log(event.target.value)
      // return false;
 if(event.target.value.length < 1){
  this.setState(()=>{
      return {[event.target.id]: event.target.value}
  })   
   }else{
      this.setState(()=>{
          return {[event.target.id]: event.target.value}
      })
   }

  }
    render(){
        return (
<div className="container d-flex h-100">
  <div className="row justify-content-center align-items-center w-100" style={{height:'100vh'}}>
    <div className="col-md-4">
        <h3 className="font-weight-bold mt-3 mb-3">Login</h3>
  <form>
    <div className="form-group">
      <label>Email address</label>
      <input 
      type="email" 
      className="form-control"
       id="email" 
       aria-describedby="emailHelp"
        placeholder="Enter email"
        onChange={this.validateFormField}
        />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input 
      type="password" 
      className="form-control" 
      id="password"
       placeholder="Password"
       onChange={this.validateFormField}
       />
    </div>
    <button type="button" className="btn btn-primary btn-block" onClick={this.validateForm}>{this.state.submitting ? 'Sending...': 'Login' }</button>
  </form>
    </div>
  </div>
</div>
        )
    }

}

export default login;