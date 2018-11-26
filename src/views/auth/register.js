import React, {Component} from 'react';

class register extends Component{
    constructor(props){
        super(props)
        this.state = {
            formFields :
            [
                {firstname: ''},
            {lastname: ''},
            {email: ''}
        ]
            
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
    render(){
        return (
<div className="container d-flex h-100">
  <div className="row justify-content-center align-items-center w-100" style={ {height: '100vh'}}>
    <div className="col-md-4">
        <h3 className="font-weight-bold mt-3 mb-3">Register</h3>
        <form>
      <div className="form-row">
          <div className="form-group col-md-6">
            <label>First name</label>
            <input type="text" className="form-control" id="firstname" placeholder="First name" value={this.state.formFields[0].firstname}/>
          </div>
          <div className="form-group col-md-6">
            <label>Last name</label>
            <input type="text" className="form-control" id="lastname" placeholder="Last name" value={this.state.formFields[1].lastname}/>
          </div>
        </div>
    <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.formFields[2].email}/>
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" id="password" placeholder="Password"/>
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