import React, { useState, useEffect } from 'react';

// CHILD of WeatherSection.js
// GRANDCHILD of App.js
// SIBLING of ForecastTab.js

// ===============================================

const CurrentForecast = (props) => {

    /*
    const [data, setData] = useState({});

    // acts similar to componentDidMount
    useEffect(() =>{
        setData(props);
    }, []);
    */

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

    return(
        <div>
            <h2>Current Forecast</h2>
            <div>
                <div className="location-box">
                <div className="location">{props.weather.city.name}, {props.weather.city.country}</div>
                <div className="date">Tuesday December 9, 2020</div>
                {/* <div className="date">{dateBuilder(new Date())}</div> */}
            </div>
            <div className="weather-box">
                <div className="current-temp">
                    Current Temp: {Math.round(props.weather.list[0].main.temp)}°F
                </div>
                <div className="min-temp">
                    Min Temp: {Math.round(props.weather.list[0].main.temp_min)}°F
                </div>
                <div className="max-temp">
                    Max Temp: {Math.round(props.weather.list[0].main.temp_max)}°F
                </div>										
                <div className="weather">
                    Forecast: {props.weather.list[0].weather[0].main}
                </div>
                <div className="humidity">
                    Humidity: {props.weather.list[0].main.humidity}%
                </div>
                <div className="wind">
                    Wind: {Math.round(props.weather.list[0].wind.speed)} mph
                </div>
                <div className="sunrise">
                    Sunrise: {props.weather.city.sunrise}
                </div>
                <div className="sunset">
                    Sunset: {props.weather.city.sunset}
                </div>
                </div>
            </div>         
        </div>
    );
}

export default CurrentForecast;