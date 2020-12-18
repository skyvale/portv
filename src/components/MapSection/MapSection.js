import React from 'react';
import BikeMap from '../BikeMap/BikeMap';
import MapInfo from '../MapInfo/MapInfo';
import './MapSection.css';

const MapSection = (props) => {

    //console.log('mapsection props: ', props);
    return(
        <div className='map-container'>
            <MapInfo className='map-info'/>
            <BikeMap className='bike-map' query={props.query}/>
        </div>
    );
}

export default MapSection;