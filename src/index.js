import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Make this available in the shoot function by binding it in the constructor function:


class Football extends React.Component{
    constructor(props){
        super(props)
        this.shoot = this.shoot.bind(this)
    }

    shoot = () => {
        alert(this);
        /*
        Thanks to the binding in the constructor function,
        the 'this' keyword now refers to the component object
        */
    }
    render(){
        return(
            <button onClick={this.shoot}>Take the shoot!</button>
        );
    };
};

ReactDOM.render(<Football />, document.getElementById('root'));
