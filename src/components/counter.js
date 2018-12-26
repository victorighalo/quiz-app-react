import React from 'react';

const Counter = function(props){
    return (
    <h5 className="font-weight-light mb-5 pb-3 text-center">Question {props.index} ({props.max} remaining)</h5>
    )
}

export default Counter;