import React, { Component } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'



// states property for employee, empty array to start
class EmployeeTable extends Component {
  state = {
    employees: [],
  };

  async componentDidMount(){
    try {

      const { data } = await axios.get("https://randomuser.me/api/?results=10")
      const { results } = data
    
      await this.setState({
        employees: results
      })

      console.log(this.state)


    } catch(err) {
      console.log(err)
    }
  }

  render() {
    //declare variables if you want (dependencies)
    const usersMap = this.state.employees.map((currentVal, index) => {

      const { cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered } = currentVal
      const { city } = location
      const { title, first, last } = name
      const { thumbnail, medium, large } = picture

      
      
  
      return (
							<tr>
								<td>{`${first}`}</td>
								<td>{`${last}`}</td>
								<td>{`${city}`}</td>
								<td>{`${email}`}</td>
							</tr>

			); 
    })

    return (  
        <div className="container">
          <div className ="row text-align-left">
					<table className="table">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>City</th>
								<th>Email</th>
							</tr>
						</thead>

						<tbody>
        {usersMap}
        </tbody>
					</table>
				</div>
      </div>
    )
  }

}

export default EmployeeTable;
