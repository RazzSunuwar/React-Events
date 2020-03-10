import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Put the shoot function inside the Football component:


class Football extends React.Component{
    shoot(){
        alert("Great Shot!")
    }
    render(){
        return(
            <button onClick={this.shoot}>Take the shoot!</button>
        );
    };
};

ReactDOM.render(<Football />, document.getElementById('root'));
