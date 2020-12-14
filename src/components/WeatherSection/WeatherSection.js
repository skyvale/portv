import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import ForecastTab from '../ForecastTab/ForecastTab';
import './WeatherSection.css';

// pass searchbox data (input) up to this parent, using props
// =====================================


// api info
const api = {
	key: "63f783f49c54c8c9b52ac4624b488e3a",
	base: "https://api.openweathermap.org/data/2.5/forecast?q="
}

const WeatherSection = () => {

    // yoinks the weather data object from api
	const [weather, setWeather] = useState({}) 

	// api fetch request
	const search = (query) => {
        fetch(`${api.base}${query}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                console.log(result);
            });
        }

    // prevents the jsx from rendering before complete API call
    // also does user validation if user doesnt correctly write query	
    const renderWeather = () => {
        if(weather.cod === '200') {
            return <CurrentForecast weather={weather} />           
        } else if (weather.cod === '404'){
            return <p>Not a valid city. Please search again.</p>
        } else {
            return <p>No location searched. Please type a valid city name.</p>
        }
    }

    // !! probably need to render these differently, need a .active class
    const renderForecasts = () => {
        if(weather.cod === '200') {
            return <ForecastTab weather={weather} className='forecast-tab' />
        } else {
            return <p className='forecast-tab'>No forecast available for chosen city.</p>
        }
    }

    return (
        <div className='weather-sect-container'>
            <div className='top-section'>
                <h1>Weather Section</h1>
                <SearchBox className='search-box' onSearch={search} />
                <div className='current-weather'>
                    {renderWeather()}
                </div>  
            </div>        
            <div className='forecast-tabs'>
                {renderForecasts()}
                {renderForecasts()}
                {renderForecasts()}
                {renderForecasts()}
                {renderForecasts()}
            </div>
        </div>
    );

}

export default WeatherSection;