import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmployeeTable.css";

// states property for employee, empty array to start
class EmployeeTable extends Component {
	state = {
    order:'descend',
		employees: []
  };
  

	async componentDidMount() {
		try {
			const { data } = await axios.get("https://randomuser.me/api/?results=10");
			const { results } = data;

			await this.setState({
				employees: results,
			});

			console.log("employees array---->", this.state);
		} catch (err) {
      console.log(err);
    }
    
  }


  

	render() {
		    this.state.employees.sort((a, b) => (a.name.last > b.name.last) ? 1: -1);

		const usersMap = this.state.employees.map((currentVal, index) => {
			const { email, location, name, picture } = currentVal;
			const { city } = location;
			const { first, last } = name;
			const { thumbnail } = picture;

			return (
				<tr key="uniqueid1">
					<td>
						<img src={`${thumbnail}`} alt="employee"></img>
					</td>
					<td>{`${first}`}</td>
					<td>{`${last}`}</td>
					<td>{`${city}`}</td>
					<td>
						<a href={`${email}`}>{`${email}`}</a>
					</td>
				</tr>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<th>Image</th>
								<th> <button onClick={this.handleClick}>First Name</button></th>
								<th>Last Name</th>
								<th>City</th>
								<th>Email</th>
							</tr>
						</thead>

						<tbody>{usersMap}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default EmployeeTable;
