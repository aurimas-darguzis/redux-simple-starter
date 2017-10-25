import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = process.env.API_KEY;

// Create a new component. It should produce HTML
const App = () => {
    return <div>Hi!</div>
}

// Put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));