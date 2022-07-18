import React from "react";

class WelcomeClass extends React.Component {

    render() {
        return(
            <h1>Hi {this.props.text}</h1>
        );
    }
}

export default WelcomeClass;