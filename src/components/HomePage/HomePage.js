import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import BikeAppLogo from '../../assets/logo.png';
import './HomePage.css';

/* 
    The home page. The user will only be on this page if they haven't yet put a query in before.
*/

// =====================================

const HomePage = () => {

    // function that sets the query to the url
    const onHomeSearch = (query) => {
        window.location = '#/search/' + query;
    }

    return(
        <div className='homepage'>
            <img className='logo' src={BikeAppLogo} alt='bike app logo' />
            <SearchBox className='homepage-search' onSearch={onHomeSearch} />
        </div>
    );
}

export default HomePage;