import React, {Component} from 'react';
import {AuthService} from '../../shared/services/'
class register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: [ '', false, true],
            lastname: [ '', false, true],
            email: [ '', false, true],
            password: [ '', false, true],
            role: [ 'user', false, true],
            roleid: '',
            submitting: false,
            error: ['', false, false],
            roles: []
        }
        this.validateForm = this.validateForm.bind(this)
    }

    componentDidMount(){
        AuthService.userCategories()
        .then( (roles) => {
            this.setState({roles: roles.data})
        })
        .catch( (err)=>{
            this.displayError(err.message)
        })
    }
    //Methods
    validateForm(){
        let formState = true;
        this.setState({submitting: true})
        Object.keys(this.state).forEach(element => {
            if(element !== 'submitting'
             && element !== 'error' 
             && element !== 'roles' 
             && element !== 'roleid'
             && element !== 'role'
             ){
                if(!this.state[element][1] && this.state[element][0] === ''){
                formState = false;
            }else{
                formState = true;
            }
        }
        });
        if(!formState){
            this.setState({submitting: false})
            this.displayError('Please fill all fields')
        }else{
            let {_id} = this.state.roles.find( (role) =>{
                return role.rolename === this.state.role[0];
            });
            let data = {
                'firstname': this.state.firstname[0],
                'lastname': this.state.lastname[0],
                'email': this.state.email[0],
                'password': this.state.password[0],
                'role': _id
            }
            AuthService.register(data).then( (result) => {
                this.setState({submitting: false})
                this.displayError(result.data.message, true)
                } )
                .catch( (err) => {
                this.displayError(err.response.data.message, false)
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
        return {[event.target.id]: [event.target.value, false, false]}
    })   
     }else{
        this.setState(()=>{
            return {[event.target.id]: [event.target.value, true, false]}
        })
     }

    }

    displayError(error, type){
        this.setState({error : [error, true, type] });
        setTimeout(() => {
            this.setState({error : ['', false, type] });
        }, 3000)
    }

    render(){
        let notification;
 
        if(this.state.error[1]){
           notification = <div className={this.state.error[2] ? 'alert alert-success' : 'alert alert-danger'}>
            {this.state.error}
            </div>
        }
        let roles = this.state.roles.map( (role) => 
            <option key={role._id} id={role._id}>{role.rolename}</option>
        );

        return (
<div className="container d-flex h-100">
  <div className="row justify-content-center align-items-center w-100" style={ {height: '100vh'}}>
    <div className="col-md-4">
        <h3 className="font-weight-bold mt-3 mb-3">Register</h3>
            {notification}
        <form>
      <div className="form-row">
          <div className="form-group col-md-6">
            <label>First name</label>
            <input 
            type="text" 
            id="firstname"
            className={ this.state.firstname[1] || this.state.firstname[2] ? 'form-control': 'form-control form-invalid'} 
            value={this.state.firstname[0]} 
            onChange={this.validateFormField}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last name</label>
            <input 
            type="text" 
            className={this.state.lastname[1] || this.state.lastname[2] ? 'form-control': 'form-control form-invalid'} 
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
      className={this.state.email[1] || this.state.email[2] ? 'form-control': 'form-control form-invalid'} 
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
      className={this.state.password[1] || this.state.password[2] ? 'form-control': 'form-control form-invalid'} 
      id="password" 
      value={this.state.password[0]}
      onChange={this.validateFormField}
      />
    </div>
    <div className="form-group">
      <label>Role</label>
      <select 
       className={this.state.role[1] || this.state.role[2] ? 'form-control': 'form-control form-invalid'}
      id="role" 
      onChange={this.validateFormField}
      >
      {roles}
      </select>
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