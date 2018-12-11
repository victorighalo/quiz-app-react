import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../actions/useractions';

class index extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        return (
<div className="container">
<h1>Questions</h1>
</div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.user)
    const user = state.user
}
export default connect(mapStateToProps)(index);