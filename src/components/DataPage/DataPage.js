import React, { useEffect,useState } from 'react';
import WeatherSection from '../WeatherSection/WeatherSection';
import MapSection from '../MapSection/MapSection';
import Footer from '../Footer/Footer';
import './DataPage.css';
import { useParams } from 'react-router-dom';

/* 
    The main page of the website. This is where the query is set.
*/

// =====================================

const DataPage = () => {

    // sets the query based on the current /url
    const { paramQuery } = useParams();
    const [ query,setQuery ] = useState('');

    // track the param query for changes
    useEffect(()=>{
        setQuery(paramQuery || '');
    },[paramQuery]);

    return(
        <div className='datapage-container'>
            <WeatherSection query={query} />
            <MapSection query={query} />
            <Footer />
        </div>
    );
}

export default DataPage;