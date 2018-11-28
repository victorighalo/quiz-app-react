import React, {Component} from 'react';

class register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: [ '', true],
            lastname: [ '', true],
            email: [ '', true],
            password: [ '', true],
        }
        this.validateForm = this.validateForm.bind(this)
    }

    //Methods
    validateForm(){
        let form = this.state.formFields;
        form.forEach(function(val, i){
            if(val.firstname === ''){
               alert(`First name is empty`)
            }
        })
    }
    validateFormField = (event) =>{
        event.persist()
        console.log(event.target.value.length)
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
    <button type="button" className="btn btn-primary btn-block" onClick={this.validateForm}>Register</button>
  </form>
    </div>
  </div>
</div>

        )
    }
}

export default register;