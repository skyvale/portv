import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './HomePage.css';

const HomePage = () => {

    const onHomeSearch = (query) => {
        // console.log('query= ' + query);
        window.location = '#/search/' + query;
    }

    return(
        <div>
            <SearchBox onSearch={onHomeSearch} />
            <p>This is the homepage.</p>
        </div>
    );
}

export default HomePage;