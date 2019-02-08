import React, { Component } from "react";

class NoMatch extends Component {
    render() {
        return (
        <div className="text-center justify-content-center align-items-center mt-5">
            <h3>
                404 Error!
            </h3>
            <h4>
                Path <code>{location.pathname}</code> is unavailable
            </h4>
            <p> Sorry, the page tou have requested does not exist.</p>
        </div>
        )
}
}
export default NoMatch;