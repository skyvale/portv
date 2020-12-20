import React from 'react';
import './CurrentForecast.css';

import cloudyIcon from '../../assets/clouds.png';
import rainIcon from '../../assets/rain.png';
import drizzleIcon from '../../assets/drizzle.png';
import thunderstormIcon from '../../assets/thunderstorm.png';
import snowIcon from '../../assets/snow.png';
import clearIcon from '../../assets/clear.png';
import sunriseIcon from '../../assets/sunrise.png';
import sunsetIcon from '../../assets/sunset.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';


/*
    This section displays the current forecast information, along with the current location and date.
    It is child of WeatherSection component and sibling to SearchBox component.
*/

// ===============================================

const CurrentForecast = (props) => {

    
    let currentForecast = props.weather.list[props.forecastIndex].weather[0].main;
    let currentTemp = props.weather.list[props.forecastIndex].main.feels_like;
    let sunrise = props.weather.city.sunrise;
    let sunset = props.weather.city.sunset;

    //console.log('current forecast props: ', props);
    //console.log('currentForecast: ', currentForecast);
    //console.log('currentTemp: ', currentTemp);

    // function that builds the current date
    const dateBuilder = (d) => {
        
         let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

         // .getDay .getDate .getMonth .getFullYear
         let day = days[d.getDay()];
         let date = d.getDate();
         let month = months[d.getMonth()];
         let year = d.getFullYear();

         return `${day}, ${month}, ${date} ${year}`;
    }

    // function that determines what forecast icon to be inserted into jsx
    const determineForecastIcon = () => {
        switch (currentForecast) {
            case 'Clouds':
                return <img className='forecast-icon' src={cloudyIcon} alt='clouds forecast' />
            case 'Rain':
                return <img className='forecast-icon' src={rainIcon} alt='rain forecast' />
            case 'Snow':
                return <img className='forecast-icon' src={snowIcon} alt='snow forecast' />
            case 'Clear':
                return <img className='forecast-icon' src={clearIcon} alt='clear forecast' />
            case 'Drizzle':
                return <img className='forecast-icon' src={drizzleIcon} alt='drizzle forecast' />
            case 'Thunderstorm':
                return <img className='forecast-icon' src={thunderstormIcon} alt='thunderstorm forecast' />
            default:
                return <img className='forecast-icon' src={cloudyIcon} alt='clouds forecast' />           
        }

    }

    // function that determines what the forecast paragraph snippet will say   
    const determineForecastSnippet = () => {
        // Clear
        if(currentForecast === 'Clear' && currentTemp > 65) {
            return <p>It's a clear and warm day today! Great day for biking!</p>
        } else if (currentForecast === 'Clear' && currentTemp <= 65) {
            return <p>It's a nice day, but a little chilly. Still a good day for biking!</p>
        } 
        // Clouds
        else if (currentForecast === 'Clouds' && currentTemp > 65) {
            return <p>It's cloudy today, but warm! A great day for biking!</p>
        } else if (currentForecast === 'Clouds' && currentTemp <= 65) {
            return <p>It's cloudy and cold. If you go out, bring a hoodie!</p>
        } 
        // Rain
        else if (currentForecast === 'Rain' && currentTemp > 65) {
            return <p>It's raining today, but it's warm out. If you're going out, bring an umbrella!</p>
        } else if (currentForecast === 'Rain' && currentTemp <= 65) {
            return <p>It's cold and rainy out. Not a good day to go biking...</p>
        } 
        // Drizzle
        else if (currentForecast === 'Drizzle' && currentTemp > 65) {
            return <p>There's a slight drizzle, but it's warm, so you could still go biking. Bring an umbrella!</p>
        } else if (currentForecast === 'Drizzle' && currentTemp <= 65) {
            return <p>Even though the rain is not strong, it's still cold outside. Not a good day for biking...</p>
        }
        // Thunderstorm
        else if (currentForecast === 'Thunderstorm' && currentTemp > 65) {
            return <p>There's lightning out there! Even though it feels nice outside, stay indoors for your safety!</p>
        } else if (currentForecast === 'Thunderstorm' && currentTemp <= 65) {
            return <p>There's a lightning storm about. Not a good day to go on a bike ride!</p>
        }
        // Snow
        else if (currentForecast === 'Snow') {
            return <p>There's snow on the ground. Time to put the bike away for hibernation!</p>
        } else {
            return <p>It's always a good day for biking.</p>
        }
    }

    // functions to convert the time for the sunrise and sunset
    const convertSunriseTime = () => {
        let sunriseHour = new Date((sunrise)*1000).getHours();
        let sunriseMin = new Date((sunrise)*1000).getMinutes();

        // makes sure that the time is in H:MM format
        if (sunriseMin.toString().length < 2) {
            return sunriseHour + ':' + sunriseMin + '0';
        } else {
            return sunriseHour + ':' + sunriseMin;
        }   
    }
    const convertSunsetTime = () => {
        let sunsetHour = new Date((sunset)*1000).getHours();
        let sunsetMin = new Date((sunset)*1000).getMinutes();

        // makes sure that the time is in H:MM format
        if (sunsetMin.toString().length < 2) {
            return sunsetHour + ':' + sunsetMin + '0';
        } else {
            return sunsetHour + ':' + sunsetMin;
        }   
    }


    // -----------------------
    // JSX
    return(
        <div className='current-forecast-container'>
            
            <div className='date-location'>
                <div className="location">{props.weather.city.name}, {props.weather.city.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className='forecast-temps'>
                <div className="current-temp" aria-label='current temp'>
                    {Math.round(props.weather.list[props.forecastIndex].main.temp)}°F
                </div>
                <div className="weather" aria-label='current forecast'>
                    { determineForecastIcon() }               
                </div>
                <div className='high-low'>
                    <div className="max-temp">
                        High {Math.round(props.weather.list[props.forecastIndex].main.temp_max)}°F
                    </div>	
                    <div className="min-temp">
                        Low {Math.round(props.weather.list[props.forecastIndex].main.temp_min)}°F
                    </div>	              
                </div>					
            </div>


            <div className='forecast-info'>               
                <div className='forecast-snippet'>
                    {determineForecastSnippet()} 
                </div>
                <div className='forecast-misc'>
                    <div className="humidity" aria-label='humidity'>
                        <img className='misc-forecast-icons' src={humidityIcon} alt='humidity icon' /> 
                        {props.weather.list[props.forecastIndex].main.humidity}%
                    </div>
                    <div className="wind" aria-label='wind speed'>
                        <img className='misc-forecast-icons' src={windIcon} alt='wind icon' />
                        {Math.round(props.weather.list[props.forecastIndex].wind.speed)}mph
                    </div>
                    <div className="sunrise" aria-label='sunrise icon'>
                        <img className='misc-forecast-icons' src={sunriseIcon} alt='sunrise time' />
                        {convertSunriseTime()}
                    </div>
                    <div className="sunset" aria-label='sunset time'>
                        <img className='misc-forecast-icons' src={sunsetIcon} alt='sunset icon' />
                        {convertSunsetTime()}
                    </div>       
                </div>
            </div> 

        </div>         
    );
}

export default CurrentForecast;