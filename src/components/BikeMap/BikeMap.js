import React, { useRef, useState, useEffect } from 'react';
import MapContext from '../MapContext/MapContext';
import * as ol from 'ol';
import './BikeMap.css';

const BikeMap = ({ children, zoom, center }) => {

    const mapRef = useRef();
    const [map, setMap] = useState(null);

    // on component mount
    useEffect(() => {

        let options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };

        let mapObject = new ol.Map(options);

        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);

    }, []);

    // zoom change handler
    useEffect(() => {
        
        if(!map) return;
        map.getView().setCenter(center)

    }, [center]);

    return(
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className='ol-map'>
                <h1>Bike Section</h1>
                { children }
            </div>     
        </MapContext.Provider>
    );
}

export default BikeMap;