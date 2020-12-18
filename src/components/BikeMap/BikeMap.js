import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import './BikeMap.css';

// uses the MapBox API for the map and the Google Geocoding API for the location

// =====================================

const BikeMap = (props) => {

    // hook for getting the location data from the google api
    const [location, setLocation] = useState({});
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // MapBox API stuff
    const mapboxApiAccessToken = 'pk.eyJ1Ijoic2t5dmFsZSIsImEiOiJja2lueDIzMDcxNzhiMnNzdjdvbGlreGNuIn0.TuSm75u2GLQlTdA2YOf4wQ';
    //const [viewport, setViewport] = useState({});
    const [viewport, setViewport] = useState({
        latitude: 36,
        longitude: -81,
        zoom: 10
    });
 
    // checks if the query was successfully sent in the props, and if it was, then it will run the api fetch request
    useEffect(()=>{
        if(props && props.query && props.query !== ''){
            //console.log('bikemap props: ', props);
            getLatAndLong(props.query);            
        }

    },[props, props.query]);


    // Google Geocoding API stuff
    const googleAPIkey = 'AIzaSyCjwsWu1EqiE2WazgNayzqUIHMpnHAsDZo';
        
    // using the google api, determine and the latitude and longitude based on the location the user entered
	const getLatAndLong = (query) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=+${query},+USA&key=${googleAPIkey}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setLocation(result);
                setViewport({
                    latitude: result.results[0].geometry.location.lat, 
                    longitude: result.results[0].geometry.location.lng,
                    zoom: 10
                }); 
                setLatitude(result.results[0].geometry.location.lat);
                setLongitude(result.results[0].geometry.location.lng);
            });
    }

    //!!TODO add marker to current city using the set lat/long variables, not the ones in viewport
    return(
        <div className='map-container'>
            <ReactMapGL
                {...viewport }
                width='600px'
                height='600px'
                mapboxApiAccessToken={mapboxApiAccessToken}
                mapStyle='mapbox://styles/skyvale/ckiny3d0h127l18n65lkffaqw'
                onViewportChange = {viewport => {setViewport(viewport)}} >         
            </ReactMapGL>
        </div>
    );
}

export default BikeMap;