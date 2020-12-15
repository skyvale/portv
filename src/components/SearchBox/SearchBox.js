import React, { useEffect, useState } from 'react';
import './SearchBox.css';
import magnifyingglass from '../../assets/magnifyingglass.png';

// This component gets data from the weather API and gives it to the parent, WeatherSection.js
// ===========================


const SearchBox = (props) => {

	// yoinks the user input from search bar
	const [query, setQuery] = useState('');

	// this occurs before page load
	useEffect(()=>{
		setQuery(props.query || "no query")			
		// SB: I think if you add props.query to the array, it'll make sure to refresh when that variable changes.	
	},[props.query])


	// search function for weather api
	const search = (e) => {
		// this function is activated when the user hits 'enter'
		if (e.key === 'Enter') {
			props.onSearch(query);
			console.log(query);			
		}
	}

	return(
		<div>
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
					<img src={magnifyingglass} alt='magnifying glass icon search' className='search-glass' />
				</div>					
			</main>
		</div>
	);
}

export default SearchBox;

