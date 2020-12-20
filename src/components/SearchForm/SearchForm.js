import React from "react";
import "../EmployeeTable";
import "./SearchForm.css"


function SearchForm({ handleSearchChange }) {
	return (
		<div className="searchForm">
			<form className="form">
				<input
					className="form-control"
					type="search"
					placeholder="Search by Last Name"
					aria-label="Search"
				/>
			</form>
		</div>
	);
}
    
    export default SearchForm;
