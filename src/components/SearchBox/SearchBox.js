import React, { useState } from 'react';

// This component gets data from the weather API and gives it to the parent, WeatherSection.js
// ===========================


const SearchBox = (props) => {

	// yoinks the user input from search bar
	const [query, setQuery] = useState(''); 

	const search = (e) => {

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
					</div>					
				</main>
			</div>
		);
}

export default SearchBox;

