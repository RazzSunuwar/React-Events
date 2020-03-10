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


// Note on the second example: If you send arguments without using the bind method,
// (this.shoot(this, "Goal") instead of this.shoot.bind(this, "Goal")), the shoot function
// will be executed when the page is loaded instead of waiting for the button to be clicked.
