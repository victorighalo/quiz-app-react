import React, { Component } from 'react'
import styled from "styled-components";

const Ideasbtn = styled.button`
border-radius:5px;
padding:12px 19px;
background:#27AE60;
color:#fff;
border:none;
`

const Feedbackbtn = styled.button`
border-radius:5px;
padding:12px 19px;
background:#2D74DA;
color:#fff;
border:none;
`

export default class Body extends Component {
  render() {
    return (
        <div className="col-sm-10 body_container"
        style={{padding:'25px'}}>
        <div className="main_body">
        <div>
        <h1 style={{color:'#2D74DA', padding:'50px 10px'}}>Join us in developing Vencru to serve your growing business</h1>
        <img src={require('../../public/img/shake.png')}/>
        <h4 style={{color:'#9AACBD', padding:'30px 10px'}}>Collaborate on the evolution of Vencru by leaving feedback, suggesting and commenting on ideas you believe in.</h4>
        <div style={{display:'flex',justifyContent: 'space-evenly' }}>
        <Ideasbtn>Leave feedback</Ideasbtn>
        <Feedbackbtn>Enter Ideas Portal</Feedbackbtn>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
