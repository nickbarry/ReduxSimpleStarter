import React from 'react';
import ReactDOM from 'react-dom';
import config from '../configUntracked';

const API_KEY = config.YOUTUBE_API_KEY;

const App = () => {
    return <div>Hi!</div>;
};

ReactDOM.render(<App />,document.getElementsByClassName('container')[0]);