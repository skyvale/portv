import React from 'react';
import './ForecastTab.css';

const ForecastTab = (props) => {

    //console.log(props.weather.list[1].main.temp_max);

    // use a map instead of a for loop

    let forecastTemplate = ``;
    const determineDay = () => {
        for (let i = 1; i < 6; i++) {
            forecastTemplate = `            
                <div className="forecast-temp">
                    Temp: ${Math.round(props.weather.list[i].main.temp_max)}°F
                </div>
                <div className="forecast-weather">
                    Forecast: ${props.weather.list[i].weather[0].main}
                </div>   
            `
        }
    }

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