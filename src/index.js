import React from 'react';
import ReactDOM from 'react-dom';

// Example:
// Arrow Function: Sending the event object manually:


class Football extends React.Component{
    shoot = (a, b) => {
        alert(b.type);
        // 'b' represents the React event that triggered the function, in this case the 'click' event
    }
    render(){
        return(
            <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shoot!</button>
        );
    };
};

ReactDOM.render(<Football />, document.getElementById('root'));
