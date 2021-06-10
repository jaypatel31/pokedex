import React from 'react'
import "./SearchBar.css";

function SearchBox({search, method}) {
	return (
		<div className="searchbar-container">
			<input type="text" value={search} onChange={(e)=>method(e)} className="searchbar" placeholder="Search Pokemon"/>
		</div>
	)
}

export default SearchBox