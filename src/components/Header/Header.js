import React from "react";
import "./Header.css"

class Header extends React.Component {
    render() {
        return (

						<div className="jumbotron d-flex justify-content-center align-items-center">
							<div className="text-white">
								<h1>EMPLOYEE DIRECTORY</h1>
								<h4>Search for an Employee by Last name</h4>
							</div>
						</div>

				);
    }
    };

export default Header;