import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './BikeMap.css';

const BikeMap = () => {

    const mapboxApiAccessToken = 'pk.eyJ1Ijoic2t5dmFsZSIsImEiOiJja2lueDIzMDcxNzhiMnNzdjdvbGlreGNuIn0.TuSm75u2GLQlTdA2YOf4wQ';
    const [viewport, setViewport] = useState({
        width: '400px',
        height: '400px',
        latitude: 28.5421109,
        longitude: -81.3790304,
        zoom: 10
    });

    return(
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={mapboxApiAccessToken}
                mapStyle='mapbox://styles/skyvale/ckiny3d0h127l18n65lkffaqw'
                onViewportChange = {viewport => {setViewport(viewport)}}>
            </ReactMapGL>
        </div>
    );
}

export default BikeMap;