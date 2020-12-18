import React from 'react';
import './CurrentForecast.css';
import cloudyIcon from '../../assets/cloudy_forecast.png';
import rainIcon from '../../assets/rainy.png';
import snowIcon from '../../assets/snow.png';
import clearIcon from '../../assets/sunny_forecast.png';

// CHILD of WeatherSection.js
// GRANDCHILD of DataPage.js
// SIBLING of ForecastTab.js

// ===============================================

const CurrentForecast = (props) => {


    // RESEARCH javascript Date object

    // function that builds the current date
    // const dateBuilder = (d) => {
        
    //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //     // .getDay .getDate .getMonth .getFullYear
    //     let day = days[d.getDay()];
    //     let date = d.getDate();
    //     let month = months[d.getMonth()];
    //     let year = d.getFullYear();

    //     return `${day}, ${month}, ${date} ${year}`;
    // }

    //console.log('current forecast props: ', props);

    // function that determines what forecast icon to be inserted into jsx
    const determineForecastIcon = () => {
        //console.log('determineForecast props: ', props.weather.list[0].weather[0].main);
        switch (props.weather.list[0].weather[0].main) {
            case 'Clouds':
                return `<img className='forecast-icon' src='${cloudyIcon}' alt='cloudy forecast'>`
            case 'Rain':
                return `<img className='forecast-icon' src='${rainIcon}' alt='rain forecast'>`
            case 'Snow':
                return `<img className='forecast-icon' src='${snowIcon}' alt='snow forecast'>`
            case 'Clear':
                return `<img className='forecast-icon' src='${clearIcon}' alt='clear forecast'>`

        }

    }

    return(
        <div className='current-forecast-container'>
            
            <div className='date-location'>
                <div className="location">{props.weather.city.name}, {props.weather.city.country}</div>
                <div className="date">Friday December 18, 2020</div>
                {/* <div className="date">{dateBuilder(new Date())}</div> */}
            </div>

            <div className='forecast-temps'>
                <div className="current-temp" aria-label='current temp'>
                    {Math.round(props.weather.list[0].main.temp)}°F
                </div>
                <div className="weather" aria-label='current forecast'>
                    { determineForecastIcon() }               
                    {props.weather.list[0].weather[0].main}
                </div>
                <div className="max-temp">
                    High {Math.round(props.weather.list[0].main.temp_max)}°F
                </div>	
                <div className="min-temp">
                    Low {Math.round(props.weather.list[0].main.temp_min)}°F
                </div>									
            </div>


            <div className='forecast-info'>               
                <div className='forecast-snippet'>
                    It's cloudy today, but the weather is warm! A good day for biking! 
                </div>
                <div className='forecast-misc'>
                    <div className="humidity" aria-label='humidity'>
                        {props.weather.list[0].main.humidity}%
                    </div>
                    <div className="wind" aria-label='wind speed'>
                        {Math.round(props.weather.list[0].wind.speed)}mph
                    </div>
                    <div className="sunrise" aria-label='sunrise time'>
                        {props.weather.city.sunrise}
                    </div>
                    <div className="sunset" aria-label='sunset time'>
                        {props.weather.city.sunset}
                    </div>       
                </div>
            </div> 

        </div>         
    );
}

export default CurrentForecast;