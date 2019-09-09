// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = function() {
    const buttonText = { text: 'Click Me!' }
    const buttonStyle = {backgroundColor: 'blue', color: 'white'}
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={buttonStyle}>{buttonText.text}</button>
        </div>
    );
};


// Show React Component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)