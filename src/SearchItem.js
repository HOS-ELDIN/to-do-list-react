import React from "react";

const SearchItem = ({ searchInput, setSearchInput }) => {
	return (
		<form className="searchForm">
			<label htmlFor="searcing">searching</label>
			<input
				type="search"
				id="searching"
				placeholder="Search For An Item"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchItem;
