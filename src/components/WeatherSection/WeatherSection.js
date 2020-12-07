import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CurrentForecast from '../CurrentForecast/CurrentForecast';

// pass searchbox data (input) up to this parent, using props
// =====================================


// api info
const api = {
	key: "63f783f49c54c8c9b52ac4624b488e3a",
	base: "https://api.openweathermap.org/data/2.5/"
}

const WeatherSection = () => {

    // yoinks the weather data object from api
	const [weather, setWeather] = useState({}) 

	// api fetch request
	const search = (query) => {
        fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                console.log(result);
            });
        }
		

    return (
        <div>
            <h1>Weather Section</h1>
            <SearchBox onSearch={search} />
            <CurrentForecast weather={weather} />
        </div>
    );

}

export default WeatherSection;