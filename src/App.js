import React, { useState } from 'react';

const api = {
  key: "63f783f49c54c8c9b52ac4624b488e3a",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  // these are react hooks 
  const [query, setQuery] = useState(''); // yoinks the user input
  const [weather, setWeather] = useState({}); // yoinks the weather data from the api

  // api get request
  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery(''); // resets text after submission
          console.log(result);
        });
    }
  }

  // function that builds the current date
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // .getDay .getDate .getMonth .getFullYear
    // ^ all of these methods are part of JS
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month}, ${date} ${year}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search for a City..." 
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {/* 
          this ternary operator checks if api query is undefined before render 
          -note- ternary operators in jsx only work when wrapped around one element
          -note- the result can't be empty, has to be an empty string ' '
        */}
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°F
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>       
            </div>        
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
