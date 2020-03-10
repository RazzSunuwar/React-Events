import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Bind this


class Football extends React.Component{
    shoot = () => {
        alert(this);
        /*
        The 'this' keyword refers to the component object
        */
    }
    render(){
        return(
            <button onClick={this.shoot}>Take the shoot!</button>
        );
    };
};

ReactDOM.render(<Football />, document.getElementById('root'));
