import React from 'react';

const CurrentForecast = (props) => {

    // research javascript Date object
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


    return(
        <div>
            <h2>Current Forecast</h2>
            {/* this ternary operator checks if api query is undefined before render */}
            {(typeof props.weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                    <div className="location">{props.weather.name}, {props.weather.sys.country}</div>
                    {/* <div className="date">{dateBuilder(new Date())}</div> */}
                </div>
                <div className="weather-box">
                    <div className="current-temp">
                        Current Temp: {Math.round(props.weather.main.temp)}°F
                    </div>
                    <div className="min-temp">
                        Min Temp: {Math.round(props.weather.main.temp_min)}°F
                    </div>
                    <div className="max-temp">
                        Max Temp: {Math.round(props.weather.main.temp_max)}°F
                    </div>										
                    <div className="weather">
                        Forecast: {props.weather.weather[0].main}
                    </div>
                    <div className="humidity">
                        Humidity: {props.weather.main.humidity}%
                    </div>
                    <div className="wind">
                        Wind: {Math.round(props.weather.wind.speed)} mph
                    </div>
                    <div className="sunrise">
                        Sunrise: {props.weather.sys.sunrise}
                    </div>
                    <div className="sunset">
                        Sunset: {props.weather.sys.sunset}
                    </div>
                </div>
                </div> ) : ('')}          
        </div>
    );
}

export default CurrentForecast;