import React, { Component } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeTable.css';



// states property for employee, empty array to start
class EmployeeTable extends Component {
  state = {
    employees: []
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

      const {  email, location,  name, picture } = currentVal
      const { city } = location
      const { first, last } = name
      const { thumbnail } = picture

     
      

      
      
  
      return (
							<tr>
                <td><img src={`${thumbnail}`} alt="employee"></img></td>
								<td>{`${first}`}</td>
								<td>{`${last}`}</td>
								<td>{`${city}`}</td>
								<td><a href={`${email}`}>{`${email}`}</a></td>
							</tr>

			); 
    })

    return (  
        <div className="container">
          <div className ="row">
					<table className="table">
						<thead>
							<tr>
                <th>Image ID</th>
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
