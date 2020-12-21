import React from 'react';
import Biker from '../../assets/biker.png';
import './MapInfo.css';

// this component is just the text that goes next to the map in the map section

const MapInfo = () => {

    return(
        <div className='info-container'>
            <h2>Bike Trails in Your Area!</h2>
            <p>For your convenience,  you can use this map to discover
            and find all marked bike trails within your area!</p>
            <p>*Please note that this map is only available in the United
            States. It also only displays official bike trails.</p>
            <img className='biker-image' src={Biker} alt='Biker Silhouette' />
        </div>
    );
}

export default MapInfo;