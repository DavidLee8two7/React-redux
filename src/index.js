import React from 'react'; // var React = require('react');
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC6yoo5ncA_l1KD5Vv93g8F9RO2bcb0MWI';

// create a new component. This component should produce some HTML
const App = () => {
    return <div>Hi you!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
