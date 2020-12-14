import React from 'react';
import BikeMap from '../BikeMap/BikeMap';
import MapInfo from '../MapInfo/MapInfo';
import './MapSection.css';

const MapSection = () => {

    return(
        <div className='container'>
            <MapInfo className='map-info'/>
            <BikeMap className='bike-map'/>
        </div>
    );
}

export default MapSection;