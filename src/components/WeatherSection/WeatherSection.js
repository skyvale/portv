import React, { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import ForecastTab from '../ForecastTab/ForecastTab';
import './WeatherSection.css';
import { useParams } from 'react-router-dom';

/* 
    using query data from SearchBox component, this component fetches data from the API and passes the data
    to its other child components, CurrentForecast and ForecastTab, to display on the page
*/
// =====================================


// api info
const api = {
	key: "63f783f49c54c8c9b52ac4624b488e3a",
	base: "https://api.openweathermap.org/data/2.5/forecast?q="
}

const WeatherSection = (props) => {

    // yoinks the weather data object from api
	const [weather, setWeather] = useState({}) 

    //
    useEffect(()=>{
        if(props && props.query && props.query != ''){
            search(props.query)
        }
    },[props.query,props]);

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

    // renders the forecast tabs on the page by sending them the api information
    const makeTabs = ()=>{

        // checks if API is working, if not, displays default tab
        if (!weather || !weather.list){ return(
            <h3 className='null-data'> No forecast data for specified city. </h3>
        )};

        // grabs data from the API and gives to forecast tab components to render
        // *note* the index%8 is there since the API splits each day into 3-hour chunks
        let weatherElements = weather.list.map((item,index)=>{
                if(index%8 === 0){
                // add ternary operator inside active{} to make the first rendered day active
                 return   <ForecastTab className='forecast-tab' key={index} active={true} weatherData={item} />
                }
        });
          
        return weatherElements;
    }

    // JSX
    return (
        <div className='weather-sect-container'>
            <div className='top-section'>
                <h1>Weather Section</h1>
                <SearchBox className='search-box' query={props.query} onSearch={search} />
                <div className='current-weather'>
                    {renderWeather()}
                </div>  
            </div>        
            <div className='forecast-tabs'>
                { makeTabs() }            
            </div>
        </div>
    );

}

export default WeatherSection;