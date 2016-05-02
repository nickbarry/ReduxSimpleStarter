import React from 'react';
import ReactDOM from 'react-dom';
import config from '../configUntracked';

import SearchBar from './components/search_bar';

const API_KEY = config.YOUTUBE_API_KEY;

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />,document.getElementsByClassName('container')[0]);