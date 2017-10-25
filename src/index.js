import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

// Create a new component. It should produce HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ) 
}

// Put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));