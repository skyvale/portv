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
		setQuery(props.query)			
			
	},[props.query]) // refreshes when query is changed


	// search function for weather api
	const search = (e) => {
		// this function is activated when the user hits 'enter'
		if (e.key === 'Enter') {
			props.onSearch(query);			
		}
	}
	
	// another search function because idk a better way to do this
	const searchMouse = (e) => {
		props.onSearch(query);
	}

	return(
		<div>
			<main>
				<div className="search">
					<input
						type="text"
						className="search-bar"
						placeholder="Search for a City..."
						onChange={e => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
					<img 
						src={magnifyingglass} 
						alt='magnifying glass icon search' 
						className='search-glass'
						onMouseDown={searchMouse}
					/>
				</div>					
			</main>
		</div>
	);
}

export default SearchBox;

