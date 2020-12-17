import React from 'react';
import './ForecastTab.css';

const ForecastTab = (props) => {

    //console.log(props.weather.list[1].main.temp_max);

    // use a map instead of a for loop

    return(
        <div className='forecast-tab'>
            <h3>Forecast Tab</h3>
            <div className="forecast-temp">
                Temp: {Math.round(props.weatherData.main.temp_max)}°F
            </div>
            <div className="forecast-weather">
                Forecast: {props.weatherData.weather[0].main}
            </div>   
        </div>
    );
}

export default ForecastTab;