import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import './BikeMap.css';

// uses the MapBox API for the map and the Google Geocoding API for the location

// =====================================

const BikeMap = (props) => {

    // hook for getting the location data from the google api
	const [location, setLocation] = useState({});

    // set coordinates after getting data from api
    let latitude = location.results[0].geometry.location.lat;
    let longitude = location.results[0].geometry.location.lng;

    // checks if the query was successfully sent in the props, and if it was, then it will run the api fetch request
    useEffect(()=>{
        //if(props && props.query && props.query !== ''){}
        getLatAndLong(props.query);

    },[]);

    // grabs the city name that the user inputed
    let cityName = props.query;

    // Google Geocoding API stuff
    const googleAPIkey = 'AIzaSyCjwsWu1EqiE2WazgNayzqUIHMpnHAsDZo';
        
    // using the google api, determine and the latitude and longitude based on the location the user entered
	const getLatAndLong = (query) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=+${props.query},+USA&key=${googleAPIkey}`)
            .then(res => res.json())
            .then(result => {
                //console.log(result);
                setLocation(result);        
            });
    }   

    // !!TODO This is happening before the fetch request gets the lat/long data-- figure out how to get it to happen after the data is fetched
    // MapBox API stuff
    const mapboxApiAccessToken = 'pk.eyJ1Ijoic2t5dmFsZSIsImEiOiJja2lueDIzMDcxNzhiMnNzdjdvbGlreGNuIn0.TuSm75u2GLQlTdA2YOf4wQ';
    const [viewport, setViewport] = useState({
        width: '600px',
        height: '600px',
        latitude: `${latitude}`,
        longitude: `${longitude}`,
        zoom: 10
    });
    
    return(
        <div className='map-container'>
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