import React from "react";
import SearchForm from "../SearchForm";
import "./Nav.css"

function Nav() {
    return(
        <div>
        <nav className="navbar navbar-expand-lg">
            <button
            className="navbar-toggler"
            type="button">
        </button>
            <div className="search-area col-4">
                <SearchForm/>
            </div>
        </nav>
        </div>
    );
};

export default Nav;