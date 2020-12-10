import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import ForecastTab from '../ForecastTab/ForecastTab';

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
        fetch(`${api.base}${query}&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                console.log(result);
            });
        }
		
    const renderWeather = () => {
        if(weather.cod === "200"){
            return <CurrentForecast weather={weather} />
        }else if (weather.cod === "404"){
            return <p>No city found, please search again</p>
        }else{
            return <p>Search for a location</p>
        }
    }

    return (
        <div>
            <h1>Weather Section</h1>
            <SearchBox onSearch={search} />
            {renderWeather()}
            <div className='forecast'>
                <ForecastTab weather={weather} />
                <ForecastTab weather={weather} />
                <ForecastTab weather={weather} />
                <ForecastTab weather={weather} />
                <ForecastTab weather={weather} />
            </div>
        </div>
    );

}

export default WeatherSection;