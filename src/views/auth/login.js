import React, {Component} from 'react';

class login extends Component{

    validateFormField(){
        
    }
    render(){
        return (
<div className="container d-flex h-100">
  <div className="row justify-content-center align-items-center w-100" style={{height:'100vh'}}>
    <div className="col-md-4">
        <h3 className="font-weight-bold mt-3 mb-3">Login</h3>
  <form>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input 
      type="email" 
      className="form-control"
       id="exampleInputEmail1" 
       aria-describedby="emailHelp"
        placeholder="Enter email"
        onChange={this.validateFormField}
        />
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input 
      type="password" 
      className="form-control" 
      id="exampleInputPassword1"
       placeholder="Password"
       onChange={this.validateFormField}
       />
    </div>
    <button type="button" className="btn btn-primary btn-block">Login</button>
  </form>
    </div>
  </div>
</div>
        )
    }

}

export default login;