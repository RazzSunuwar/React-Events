import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Send "Goal" as a parameter to the shoot function:


class Football extends React.Component{
    shoot (a) {
        alert(a);
    }
    render(){
        return(
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shoot!</button>
        );
    };
};

ReactDOM.render(<Football />, document.getElementById('root'));
